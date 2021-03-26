import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "@style/vant.theme.less";`,
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: "",
      },
      {
        find: "@style",
        replacement: resolve(__dirname, "src/style"),
      },
    ],
  },
});
