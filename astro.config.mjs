import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      https: {
        key: "./key.pem",
        cert: "./cert.pem",
      },
    },
  },
});
