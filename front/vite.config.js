import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@context", replacement: "/src/context" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
});
