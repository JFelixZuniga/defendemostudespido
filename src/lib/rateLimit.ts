/**
 * Best-effort in-memory sliding-window rate limiter keyed by IP.
 *
 * Honest limitation: Vercel serverless functions do not share memory across
 * cold starts or concurrent instances, so this map can reset or be bypassed
 * under real distributed load. It still stops the common case (a script
 * hammering the endpoint from one warm instance) without adding a paid
 * external dependency (e.g. Upstash) that nobody asked for. If this project
 * later needs a hard guarantee, swap this module for a shared store.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string, now = Date.now()): boolean {
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return true;
  }
  timestamps.push(now);
  hits.set(key, timestamps);
  return false;
}

export function clientIpFrom(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}
