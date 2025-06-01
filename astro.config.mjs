import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Import view transitions directly from astro package
import { viewTransitions } from 'astro:transitions';

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    viewTransitions()
  ],
  site: 'https://farhanahmed.pro',
});