import type { Metadata } from "next";

import Header from "@/components/header";
import "keen-slider/keen-slider.min.css";
import "./globals.css";
import Script from "next/script";
import { getDictionary } from "@/lib/i18n";
import { DictPasser } from "@/app/dict-passer";
import { getTawasal } from "@/lib/tawasal-cookie";
import { cn } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { language } = getTawasal();
    const dict = await getDictionary(language);
    return {
      title: `Tawasal ${dict.errors.notFound}`,
    };
  } catch (e) {
    return {
      title: "Tawasal Mini App",
    };
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tawasal = getTawasal();
  const dict = await getDictionary(tawasal.language);
  const locale = new Intl.Locale(tawasal.language ?? "en");
  // @ts-expect-error lol it works, why error?
  const dir: "rtl" | "ltr" = locale.textInfo?.direction;

  return (
    <html lang="en">
      <DictPasser dict={dict} />
      <body dir={dir ?? "ltr"} className={cn("bg-zinc-900 dark", dir ?? "ltr")}>
        <main>
          <Header title={dict.errors.frontError} />

          {children}
        </main>
      </body>
    </html>
  );
}
