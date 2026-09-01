import { getProductById, getProducts } from "./api/products.js";
import { getUserById, getUsers } from "./api/users.js";

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
}

function parseQuery(url) {
  const queryIndex = url.indexOf("?");
  if (queryIndex === -1) {
    return {};
  }

  return Object.fromEntries(new URLSearchParams(url.slice(queryIndex + 1)));
}

function handleApiRequest(req, res) {
  const url = req.url || "";
  const pathname = url.split("?")[0];
  const query = parseQuery(url);

  if (pathname === "/api/health") {
    return sendJson(res, 200, {
      status: "ok",
      message: "Vestra API is running",
    });
  }

  if (pathname === "/api/products") {
    return sendJson(res, 200, getProducts(query));
  }

  const productMatch = pathname.match(/^\/api\/products\/(\d+)$/);
  if (productMatch) {
    const product = getProductById(productMatch[1]);
    if (!product) {
      return sendJson(res, 404, { detail: "محصول پیدا نشد" });
    }
    return sendJson(res, 200, product);
  }

  if (pathname === "/api/users" && req.method === "GET") {
    return sendJson(res, 200, getUsers(query));
  }

  if (pathname === "/api/users" && req.method === "POST") {
    return sendJson(res, 501, {
      detail:
        "ثبت‌نام در نسخه دمو آنلاین فعال نیست. از حساب‌های موجود استفاده کنید.",
    });
  }

  const userMatch = pathname.match(/^\/api\/users\/(\d+)$/);
  if (userMatch) {
    const user = getUserById(userMatch[1]);
    if (!user) {
      return sendJson(res, 404, { detail: "کاربر پیدا نشد" });
    }
    return sendJson(res, 200, user);
  }

  return sendJson(res, 404, { detail: "مسیر API پیدا نشد" });
}

export function localApiPlugin() {
  return {
    name: "vestra-local-api",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/api")) {
          return next();
        }

        handleApiRequest(req, res);
      });
    },
  };
}
