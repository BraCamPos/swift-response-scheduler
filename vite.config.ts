import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// vite.config.js
export default defineConfig(({ mode }) => ({
  base: "/swift-response-scheduler/", // Ensure this is correct for your deployment
  server: {
    host: "::", // If you want to allow other devices on your network, leave it as is
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(), // Only use componentTagger in development
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Aliasing @ to the ./src folder
    },
  },
}));
