import type { Metadata } from "@utils/type/html";
import type { PropsWithChildren } from "hono/jsx";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { cn } from "@utils/helpers";

export default jsxRenderer(
  ({
    title,
    children,
    icon = "/favicon.ico",
    cookie,
    prefetches,
  }: PropsWithChildren<Metadata>) => {
    const language = new Intl.Locale(cookie?.language ?? "en");
    // @ts-expect-error it works on node level
    const dir: "rtl" | "ltr" = language?.textInfo?.direction;

    return (
      <html
        className={cn(dir)}
        dir={dir}
        lang={cookie?.language ?? "en"}
      >
        <head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/x-icon" href={icon} />
          <meta name="google" content="notranslate" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {prefetches}
          {import.meta.env.MODE === "production" ? (
            <>
              <link rel="preload" href="/static/style.css" as="style" />
              <link rel="stylesheet" href="/static/style.css" as="style" />
            </>
          ) : (
            <>
              <link rel="preload" href="/app/root.css" as="style" />
              <link rel="stylesheet" href="/app/root.css" as="style" />
            </>
          )}
          <Script src="/app/client.ts" />
          <title>{title ?? "Tawasal Hono JSX Example"}</title>
        </head>
        <body
          className={cn(
            "flex h-screen max-h-screen flex-col items-stretch justify-between bg-black text-gray-100",
          )}
        >
          {children}
        </body>
      </html>
    );
  },
);
