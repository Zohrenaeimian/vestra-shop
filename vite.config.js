import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { localApiPlugin } from "./server/vite-local-api.js";

export default defineConfig({
  plugins: [react(), tailwindcss(), localApiPlugin()],
});
