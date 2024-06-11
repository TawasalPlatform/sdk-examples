import { Button } from "@islands/button";
import { closeApp } from "@tawasal/web";

export const CloseAppButton = ({ text }: { text: string }) => {
  return (
    <Button variant="secondary" onClick={() => closeApp()}>
      {text}
    </Button>
  );
};
