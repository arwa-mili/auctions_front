import { useEffect, useState } from "react";

export const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (globalThis.scrollY > 144) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    globalThis.addEventListener("scroll", handleScroll);

    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isSticky;
};
