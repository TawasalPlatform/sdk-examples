"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { closeApp } from "@tawasal/web";
import { cn } from "@/lib/utils";

export default function MiniAppHeader({
  title,
  titleComponent,
  baseUrl,
  className,
  closeButtonClassName,
}: {
  title?: string;
  titleComponent?: React.ReactNode;
  baseUrl?: string;
  className?: string;
  closeButtonClassName?: string;
}) {
  const pathname = usePathname();
  const { back } = useRouter();
  const isMain = pathname === baseUrl || pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 grid w-full grid-cols-[1fr,2fr,1fr] items-center px-4 py-2 bg-zinc-900/90 backdrop-blur-xl",
        className,
      )}
    >
      <div className="z-10">
        {!isMain && (
          <Button
            variant="link"
            className="text-md py-1 text-foreground hover:no-underline ltr:pl-0 rtl:pr-0"
            onClick={back}
          >
            <ArrowLeft
              size={28}
              className="sensetive-icon stroke-primary ltr:-ml-2 rtl:-mr-2"
            />
          </Button>
        )}
      </div>
      {titleComponent ? (
        titleComponent
      ) : (
        <h2 className="flex-1 py-1.5 text-center font-semibold text-foreground">
          {title && <Link href="/">{title}</Link>}
        </h2>
      )}
      <div className="aligned-end z-10 py-1">
        <Button
          className={cn(
            "h-auto rounded-full bg-foreground/5 p-1.5 leading-none text-foreground/40 hover:bg-foreground/5 hover:text-foreground/40",
            closeButtonClassName,
          )}
          onClick={() => {
            closeApp();
          }}
        >
          <ChevronDown size={20} />
        </Button>
      </div>
    </header>
  );
}
