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
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
