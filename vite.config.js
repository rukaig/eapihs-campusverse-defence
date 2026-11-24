import { defineConfig } from "vite";
import { resolve } from "node:path";

const root = process.cwd();

function charactersRoute() {
  const rewrite = (request, _response, next) => {
    const url = request.url || "";
    const match = /^\/characters(?:\/([^?]*))?(\?.*)?$/.exec(url);
    if (match) {
      const rest = match[1] || "index.html";
      request.url = `/characters/${rest}${match[2] || ""}`;
    }
    next();
  };
  return {
    name: "characters-route",
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [charactersRoute()],
  build: {
    target: "es2020",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        characters: resolve(root, "characters/index.html")
      }
    }
  },
  server: {
    host: "127.0.0.1"
  },
  preview: {
    host: "127.0.0.1"
  }
});
