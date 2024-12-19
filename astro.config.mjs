import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import bookshop from '@bookshop/astro-bookshop';

export default defineConfig({
  integrations: [react(), bookshop()]  
});
