import { defineConfig } from "vite";
import { resolve } from "node:path";

const root = process.cwd();

function pageRoute(name) {
  const pattern = new RegExp(`^/${name}(?:/([^?]*))?(\\?.*)?$`);
  const rewrite = (request, _response, next) => {
    const url = request.url || "";
    const match = pattern.exec(url);
    if (match) {
      const rest = match[1] || "index.html";
      request.url = `/${name}/${rest}${match[2] || ""}`;
    }
    next();
  };
  return {
    name: `${name}-route`,
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
  plugins: [pageRoute("characters"), pageRoute("presenter")],
  build: {
    target: "es2020",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        characters: resolve(root, "characters/index.html"),
        presenter: resolve(root, "presenter/index.html")
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
