import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  output: "server",
  adapter: vercel()
});