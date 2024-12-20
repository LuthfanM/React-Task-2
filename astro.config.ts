import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import bookshop from '@bookshop/astro-bookshop';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), bookshop(), tailwind()]  
});