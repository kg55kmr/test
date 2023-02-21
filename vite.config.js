import path from "path";
import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $c: path.resolve("./src/lib/components"),
      $js: path.resolve("./src/lib/js"),
      $data: path.resolve("./src/lib/data"),
    },
  },
};

export default config;
