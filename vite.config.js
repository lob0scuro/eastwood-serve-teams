import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const dev = false;

const URL = dev ? "http://127.0.0.1:5000" : "https://epcteams.com:8000";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
