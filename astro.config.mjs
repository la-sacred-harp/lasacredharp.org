// @ts-check
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://lasacredharp.org",

  prefetch: {
      prefetchAll: true,
  },

  vite: {
      css: {
          transformer: "lightningcss",
          lightningcss: {
              targets: browserslistToTargets(browserslist("defaults")),
          },
      },
  },

  integrations: [sitemap()],
});