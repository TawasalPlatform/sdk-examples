import type { ErrorHandler } from "hono";
import type { Context } from "hono/dist/types";
import { CloseAppButton } from "@islands/close-app-button";
import { ResetAppButton } from "@islands/reset-app-button";
import { getDictionary } from "@utils/i18n";
import MiniAppHeader from "@islands/mini-app-header";

const handler: ErrorHandler = async (e, c: Context) => {
  const tawasal = c.get("cookie");

  const dict = getDictionary(tawasal?.language ?? "en");

  return c.render(
    <div className="h-full w-screen">
      <MiniAppHeader
        initPath=""
        title=""
        baseUrl="/"
        className="w-full bg-transparent"
      />
      <div className="p-4 pt-48">
        <h2 className="mb-4 text-2xl font-semibold">
          {dict.errors.frontError}
        </h2>

        <p className="mb-10 text-foreground">{dict.errors.subtitle}</p>

        <ResetAppButton text={dict.errors.tryAgain} />
        <CloseAppButton text={dict.errors.back} />
      </div>
    </div>,
  );
};

export default handler;
