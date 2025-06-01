import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import viewTransitions from '@astrojs/view-transitions';

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    viewTransitions()
  ],
  site: 'https://farhanahmed.pro',
});