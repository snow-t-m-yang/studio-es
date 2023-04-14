import { useEffect, useState, RefObject } from "react";

export const useReachedViewPortTop = (ref: RefObject<HTMLElement>) => {
  const [isReached, setIsReached] = useState(false);

  const isReachedOnTop = () => {
    if (ref.current !== null) {
      const rect = ref.current.getBoundingClientRect();

      return rect.top === 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const Reached = isReachedOnTop();

      if (Reached !== isReached) {
        setIsReached(Reached);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return isReached;
};
