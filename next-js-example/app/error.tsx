"use client";

import { Button } from "@/components/ui/button";
import { closeApp } from "@tawasal/web";
import { useLocalStorage } from "react-use";
import { Dictionary } from "@/lib/i18n";

export default function Error({
  error, // tbd to check developer permissions later
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [dict] = useLocalStorage<Dictionary>("dictionary");

  return (
    <div className="px-4 pt-48">
      <h2 className="mb-4 text-2xl font-semibold">{dict?.errors.frontError}</h2>

      <p className="mb-10 text-muted-foreground">{dict?.errors.subtitle}</p>

      <Button className="mr-2" onClick={reset}>
        {dict?.errors.tryAgain}
      </Button>
      <Button variant="secondary" onClick={closeApp}>
        {dict?.errors.back}
      </Button>
    </div>
  );
}
