import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function beautifyNumber(number: number) {
  return Number(number?.toFixed(2)).toLocaleString();
}

// note: yeah, i know, what the actual fuck
// but it's api response and we're hacking it, babe
// need to move to something universal of course
export function transformPriceCurrency(price: number, currency?: string) {
  const number = beautifyNumber(price);

  if (currency === "USD") {
    return `$${number}`;
  }

  if (currency === "EUR") {
    return `€${number}`;
  }

  if (!currency) {
    return number;
  }

  return `${number} ${currency}`;
}
