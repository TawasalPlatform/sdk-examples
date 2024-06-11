import type { Metadata } from "@utils/type/html";
import type { PrismaClient } from "@prisma/client";
import type { Dictionary } from "@utils/i18n";
import type { User } from "@tawasal/node";

declare module "hono" {
  interface Env {
    Variables: {
      prisma: PrismaClient;
      cookie: User;
      dict: Dictionary;
    };
    Bindings: {
      DB: D1Database;
    };
  }
  type ContextRenderer = (
    content: string | Promise<string>,
    head?: Metadata,
  ) => Response | Promise<Response>;
}
