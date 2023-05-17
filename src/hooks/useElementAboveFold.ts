import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type Options = {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number;
};

const useElementAboveFold = (
  options: Options = { root: null, rootMargin: "0px", threshold: 1 }
) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = useDebouncedCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    },
    200
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return { containerRef, isVisible };
};

export default useElementAboveFold;
