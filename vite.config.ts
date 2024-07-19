import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3300,
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@features": "/src/features",
      "@machines": "/src/machines",
      "@pages": "/src/pages",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
    },
  },
  base: "/PortfolioV2/",
});
