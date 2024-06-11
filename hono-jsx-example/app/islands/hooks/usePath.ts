"use client";
import { useEffect, useState } from "hono/jsx";

const usePath = (initPath?: string) => {
  if (typeof window === "undefined") {
    return [`/${initPath}`, () => {}];
  }
  const initialPath = `/${window.location.pathname.substring(1)}`;
  const [path, setPath] = useState(initialPath);

  const changePath = (path: string) => {
    window.history.pushState(null, "", path.toString());
  };

  useEffect(() => {
    window.onpopstate = () => {
      setPath(`/${window.location.pathname.substring(1)}`);
    };
    return () => {
      window.onhashchange = null;
    };
  }, []);

  return [path, changePath];
};

export default usePath;
