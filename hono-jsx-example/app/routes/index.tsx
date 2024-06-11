import { render } from "@utils/hono";
import { createRoute } from "honox/factory";
import MiniAppHeader from "@islands/mini-app-header";
import {Button} from "@islands/button";

export default createRoute(async (c) => {
  const prisma = c.get("prisma");
  const tawasal = c.get("cookie");
  const queryParams = c.req.queries();
  const dict = c.get("dict");

  return render(
    <>
      <MiniAppHeader
        initPath=""
        title="Title for main page header"
        baseUrl="/"
        className="w-full bg-transparent"
      />
      <main
        style={{
          maxHeight: "calc(100vh - 50px)",
        }}
        className="flex h-[inherit] w-screen flex-col items-center justify-between py-4"
      >
          <div className="flex flex-col items-stretch w-full p-4 overflow-auto">
              {JSON.stringify(tawasal, null, 2)}
          </div>
          <Button variant="outline">Haptic</Button>
      </main>
    </>,
    {
      title: "title for main page",
      icon: "/favicon.ico",
    },
    c,
  );
});
