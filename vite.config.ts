import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    ssr: {
      noExternal: ['@builder.io/qwik-city'], // Exclude this package from being externalized during SSR build
    },
    build: {
      rollupOptions: {
        input: {
          main: './index.html',  // Explicitly include index.html in the build
        },
        external: ['node:async_hooks'], // Treat this Node.js built-in module as external
      },
      outDir: 'dist', // Ensure the output directory is correct
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
