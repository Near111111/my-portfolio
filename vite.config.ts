import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Bind to all network interfaces
    port: 3000, // Specify the port
  },
  preview: {
    allowedHosts: ["near-portfolio.onrender.com"],
  },
});
