export type Language =
  | "en"
  | "ar"
  | "fr"
  | "fa"
  | "id"
  | "ru"
  | "tr"
  | "ur"
  | "hi"
  | "es";

import en from "./dict/en.json" assert { type: "JSON" };
import ar from "./dict/ar.json" assert { type: "JSON" };
import fr from "./dict/fr.json" assert { type: "JSON" };
import es from "./dict/es.json" assert { type: "JSON" };
import hi from "./dict/hi.json" assert { type: "JSON" };
import ur from "./dict/ur.json" assert { type: "JSON" };
import fa from "./dict/fa.json" assert { type: "JSON" };
import id from "./dict/id.json" assert { type: "JSON" };
import ru from "./dict/ru.json" assert { type: "JSON" };
import tr from "./dict/tr.json" assert { type: "JSON" };

const dictionaries = { en, ar, fr, fa, id, ru, tr, ur, hi, es };

export const getDictionary = (locale: Language) => {
  const usedLocale = dictionaries[locale] ? locale : "en";

  return dictionaries[usedLocale];
};

export type Dictionary = ReturnType<typeof getDictionary>;
