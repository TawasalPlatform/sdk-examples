import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import differenceInSeconds from "date-fns/differenceInSeconds";
import type { Language } from "@utils/i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleArray<T>(array: Array<T>) {
  let currentIndex = array.length;
  let randomIndex = 0;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function splitArray<T>(arr: Array<T>) {
  const leftSide = arr.slice(0, arr.length / 2);
  const rightSide = arr.slice(arr.length / 2);

  return [leftSide, rightSide];
}

export function bigIntToHex(value?: bigint | string | null): string {
  const bigint = typeof value === "string" ? BigInt(value) : value;

  return bigint ? (bigint & BigInt("0xffffffffffffffff")).toString(16) : "";
}

export const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

function getSeparated(remainingTime: number) {
  return {
    days: Math.floor(remainingTime / (3600 * 24)),
    hours: Math.floor((remainingTime % (3600 * 24)) / 3600),
    minutes: Math.floor((remainingTime % 3600) / 60),
    seconds: Math.floor(remainingTime % 60),
  };
}

export function getTimeDiff(timestamp: Date) {
  const now = new Date();
  const remainingTime = differenceInSeconds(timestamp, now);

  return getSeparated(Math.abs(remainingTime));
}

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

export const numberToMonth = (
  month: number,
):
  | "april"
  | "august"
  | "december"
  | "february"
  | "january"
  | "july"
  | "june"
  | "march"
  | "may"
  | "november"
  | "october"
  | "september" => months[month] as "september";

export const languageToLocale = (language: Language) => {
  switch (language) {
    case "ar":
      return "ar-AE";
    case "en":
      return "en-US";
    case "fa":
      return "fa";
    case "hi":
      return "hi-IN";
    case "es":
      return "es-ES";
    case "fr":
      return "fr-FR";
    case "ru":
      return "ru-RU";
    default:
      return language;
  }
};

const collator = new Intl.Collator("en-US");

export function sortAsc(a: string, b: string) {
  return collator.compare(a, b);
}

export function sortDesc(a: string, b: string) {
  return collator.compare(b, a);
}

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export const UAE = {
  flag: "🇦🇪",
  cities: [
    "Abu Dhabi",
    "Ajman",
    "Al Ain",
    "Dubai",
    "Fujairah",
    "RAK",
    "Sharjah",
    "UAQ",
  ],
};
export const citiesForCountries = {
  UAE: [
    "Abu Dhabi",
    "Ajman",
    "Al Ain",
    "Dubai",
    "Fujairah",
    "RAK",
    "Sharjah",
    "UAQ",
  ],
  "Saudi Arabia": [
    "Abha",
    "Al Jubail",
    "Al Ula",
    "Dammam",
    "Jeddah",
    "Madina",
    "Riyadh",
  ],
  Turkey: ["Bursa", "Cappadocia", "Kuşadası", "Pamukkale", "Trabzon"],
  Qatar: ["Doha"],
  Egypt: ["Hurghada", "Cairo", "Sharm El Sheikh"],
  UK: ["London"],
};

export const getCities = (countries: string[] | "all") => {
  return Object.entries(citiesForCountries)
    .filter(([country]) =>
      countries === "all" ? true : countries.includes(country),
    )
    .map(([_, cities]) => cities)
    .flat();
};

export const isAndroid = () => /(android)/i.test(navigator.userAgent);

export function areDeeplyEqual(
  obj1: any[] | null,
  obj2: string | any[] | null,
): boolean {
  if (obj1 === obj2) return true;

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;

    return obj1.every((elem, index) => {
      return areDeeplyEqual(elem, obj2[index]);
    });
  }

  if (
    typeof obj1 === "object" &&
    typeof obj2 === "object" &&
    obj1 !== null &&
    obj2 !== null
  ) {
    if (Array.isArray(obj1) || Array.isArray(obj2)) return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (
      keys1.length !== keys2.length ||
      !keys1.every((key) => keys2.includes(key))
    )
      return false;

    // @ts-ignore
    for (let key in obj1) {
      let isEqual = areDeeplyEqual(obj1[key], obj2[key]);
      if (!isEqual) {
        return false;
      }
    }

    return true;
  }

  return false;
}
