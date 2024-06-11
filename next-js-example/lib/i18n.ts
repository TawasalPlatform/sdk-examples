import type { Language } from "@tawasal/web";
import "server-only";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  fa: () => import("@/dictionaries/fa.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  id: () => import("@/dictionaries/id.json").then((module) => module.default),
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
  tr: () => import("@/dictionaries/tr.json").then((module) => module.default),
  hi: () => import("@/dictionaries/hi.json").then((module) => module.default),
  ur: () => import("@/dictionaries/ur.json").then((module) => module.default),
};

export const getDictionary = async (locale: Language) => {
  const usedLocale = dictionaries[locale] ? locale : "en";

  return dictionaries[usedLocale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
