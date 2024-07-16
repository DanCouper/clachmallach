import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://hyem.online",
  vite: {
    server: {
      https: {
        key: "./key.pem",
        cert: "./cert.pem",
      },
    },
  },
});
