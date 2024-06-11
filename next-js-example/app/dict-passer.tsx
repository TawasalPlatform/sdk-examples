"use client";

import { useLocalStorage } from "react-use";
import { Dictionary } from "@/lib/i18n";
import { useEffect } from "react";

export const DictPasser = ({ dict }: { dict: Dictionary }) => {
  const [, setDict] = useLocalStorage("dictionary");
  useEffect(() => {
    setDict(dict);
  }, [dict, setDict]);
  return <></>;
};
