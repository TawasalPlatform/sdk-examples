import { cn } from "@utils/helpers";
import { css, Style } from "hono/css";

export const DotsLoader = ({ className }: { className?: string }) => {
  return (
    <>
      <Style>{css`
        @keyframes dot-keyframes {
          0% {
            opacity: 0.4;
            transform: scale(1, 1);
          }

          50% {
            opacity: 1;
            transform: scale(1.2, 1.2);
          }

          100% {
            opacity: 0.4;
            transform: scale(1, 1);
          }
        }

        .dotItem {
          animation: dot-keyframes 1.5s infinite ease-in-out;
          height: 5px;
          width: 5px;
        }
      `}</Style>
      <div className={cn("flex gap-2 text-center", className)}>
        <div className="dotItem inline-block rounded-full bg-foreground delay-1500"></div>
        <div className="dotItem inline-block rounded-full bg-foreground delay-500"></div>
        <div className="dotItem inline-block rounded-full bg-foreground delay-1000"></div>
      </div>
    </>
  );
};
