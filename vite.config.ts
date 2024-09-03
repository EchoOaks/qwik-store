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
        input: 'index.html', // Ensure the index.html is used as the entry point
      },
      outDir: 'dist', // Define output directory
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
