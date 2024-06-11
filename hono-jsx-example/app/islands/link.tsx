import { type PropsWithChildren } from "hono/jsx";
import { haptic } from "@tawasal/web";

export default function Link({
  className,
  href,
  children,
  isPrefetch,
}: PropsWithChildren<{
  className?: string;
  href: string;
  isPrefetch?: boolean;
  key?: number | string;
}>) {
  return (
    <>
      {isPrefetch && <link rel="prefetch" href={href} />}
      <a
        onClick={() => {
          haptic();
        }}
        href={href}
        className={className}
      >
        {children}
      </a>
    </>
  );
}
