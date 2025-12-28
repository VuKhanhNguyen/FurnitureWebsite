import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/register": "http://localhost:8000",
      "/login": "http://localhost:8000",
      // hoặc dùng '/api': 'http://localhost:8000' nếu backend có prefix /api
    },
  },
});
