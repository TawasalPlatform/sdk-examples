import { Button } from "@islands/button";
import { cn } from "@utils/helpers";
import { type Child } from "hono/jsx";
import usePath from "@islands/hooks/usePath";
import { ArrowBack } from "@components/icons/arrowBack";
import { ChevronDown } from "@components/icons/chevron-down";
import { closeApp } from "@tawasal/web";

export default function MiniAppHeader({
  title,
  titleComponent,
  baseUrl,
  className,
  initPath,
  closeButtonClassName,
}: {
  initPath: string;
  title?: string;
  titleComponent?: Child;
  baseUrl?: string;
  className?: string;
  closeButtonClassName?: string;
}) {
  const [pathname] = usePath(initPath);

  const isMain = pathname === baseUrl || pathname === "";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 grid w-full grid-cols-[1fr,2fr,1fr] items-center bg-background/90 px-4 py-2 backdrop-blur-none",
        className,
      )}
    >
      <div className="z-10">
        {!isMain && (
          <Button
            variant="link"
            className="text-md py-1 text-foreground hover:no-underline ltr:pl-0 rtl:pr-0"
            onClick={
              typeof history !== "undefined" ? () => history.back() : () => {}
            }
          >
            <ArrowBack className="sensetive-icon text-white ltr:-ml-2 rtl:-mr-2" />
          </Button>
        )}
      </div>
      {titleComponent ? (
        titleComponent
      ) : (
        <h2 className="flex-1 py-1.5 text-center font-semibold">
          {title}
        </h2>
      )}
      <div className="aligned-end z-10 flex items-center justify-end gap-5 py-1">
        <Button
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 p-0 text-center align-middle leading-none text-white ltr:-ml-2 rtl:-mr-2",
            closeButtonClassName,
          )}
          onClick={() => {
            closeApp();
          }}
        >
          <ChevronDown className="stroke-foreground" />
        </Button>
      </div>
    </header>
  );
}
