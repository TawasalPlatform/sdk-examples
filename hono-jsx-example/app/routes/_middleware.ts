import { PrismaClient } from "@prisma/client";

import { createRoute } from "honox/factory";
import { getDictionary } from "@utils/i18n";
import tawasal from "@tawasal/node";
import { getCookie } from "hono/cookie";

const prisma = new PrismaClient();

export default createRoute(async (c, next) => {
  if (c.req.method === "HEAD") {
    return c.newResponse(null, { status: 200 });
  }
  if (!c.get("prisma")) {
    c.set("prisma", prisma);
  }
  if (!c.get("cookie")) {
    const rawCookie = getCookie(
      c,
      process.env.NODE_PUBLIC_COOKIE_NAME as string,
    ) as string;

    try {
      c.set("cookie", tawasal.getUser(rawCookie));
    } catch (e) {
      console.error(e);
    }
  }
  if (!c.get("dict")) {
    c.set("dict", getDictionary(c.get("cookie").language));
  }
  await next();
});
