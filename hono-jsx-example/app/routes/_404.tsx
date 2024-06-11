import type { NotFoundHandler } from "hono";
import { CloseAppButton } from "@islands/close-app-button";
import { getDictionary } from "@utils/i18n";
import MiniAppHeader from "@islands/mini-app-header";

const handler: NotFoundHandler = (c) => {
  const tawasal = c.get("cookie");

  const dict = getDictionary(tawasal?.language ?? "en");
  return c.render(
    <div className="h-full w-screen">
      <MiniAppHeader
        initPath="/404"
        title=""
        baseUrl="/"
        className="w-full bg-transparent"
      />

      <div className="p-4 pt-48">
        <h2 className="mb-4 text-2xl font-semibold">
          {" "}
          {dict?.errors.notFound}
        </h2>

        <p className="mb-10 text-foreground">{dict.errors.subtitle}</p>
        <CloseAppButton text={dict.errors.back} />
      </div>
    </div>,
  );
};

export default handler;
