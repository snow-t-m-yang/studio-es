import { useState, useEffect } from "react";

export const useIsScrolling = (testMode: boolean) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (testMode) {
      let timer: string | number | NodeJS.Timeout | undefined;
      const handleScroll = () => {
        setIsScrolling(true);
        console.log("✅isScrolling test mode on ");
        clearTimeout(timer);
        timer = setTimeout(() => setIsScrolling(false), 5000);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      const handleScroll = () => {
        setIsScrolling(true);
        console.log("🛑isScrolling test mode off ");
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [testMode]);

  return isScrolling;
};
