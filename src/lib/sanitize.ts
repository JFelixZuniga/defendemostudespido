/**
 * Minimal HTML-escaping for interpolating user-supplied strings into the
 * Resend HTML email body. Not a general sanitizer — just enough to stop a
 * submitted field from injecting markup/styles into the email we send
 * ourselves, or newlines from smuggling extra "headers" into anything that
 * ever gets treated as raw text.
 */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Strips CR/LF so a field can never be used to smuggle extra header-like lines. */
export function stripNewlines(input: string): string {
  return input.replace(/[\r\n]+/g, ' ').trim();
}
