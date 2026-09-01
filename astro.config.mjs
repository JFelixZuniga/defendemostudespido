import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// output stays 'static' (the default) — only src/pages/contacto.astro and
// src/pages/api/contact.ts opt into SSR via `export const prerender = false`.
export default defineConfig({
  site: 'https://www.defendemostudespido.cl',
  trailingSlash: 'always',
  adapter: vercel(),
  integrations: [
    sitemap({
      // Not per-page content dates (Astro's static build doesn't track those) —
      // stamps every URL with the current build time so the sitemap at least
      // reflects "last deployed", instead of shipping with no lastmod at all.
      serialize(item) {
        item.lastmod = new Date();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
