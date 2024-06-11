import { cookies } from "next/headers";
import type { Tawasal } from "@tawasal/web";
import { getUser } from "@tawasal/node";

export function getRawCookie() {
  const store = cookies();

  return store.get("tawasal");
}

export function getTawasal(): Tawasal {
  const store = cookies();
  const cookie = store.get("tawasal");
  if (!cookie) {
    return {} as Tawasal;
  }
  const tawasal = getUser(cookie.value);
  // tawasal.language = "ar"; // test RTL

  return {
    ...tawasal,
  };
}
