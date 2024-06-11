import { Button } from "@islands/button";

export const ResetAppButton = ({ text }: { text: string }) => {
  return (
    <Button
      className="mr-2 text-foreground"
      onClick={() => {
        // @ts-expect-error handle clear cache
        window.location.reload(true);
        // @ts-expect-error handle clear cache
        window.history.forward(1);
        window.location.href = window.location.href + "";
      }}
    >
      {text}
    </Button>
  );
};
