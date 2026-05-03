import { useEffect, useRef } from "react";

export default function useSnapScroll(sectionCount) {
  const refs = useRef([]);
  const currentIndex = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      // Move down
      if (e.deltaY > 0) {
        currentIndex.current = Math.min(
          currentIndex.current + 1,
          sectionCount - 1
        );
      }

      // Move up
      else {
        currentIndex.current = Math.max(
          currentIndex.current - 1,
          0
        );
      }

      const target = refs.current[currentIndex.current];

      target?.scrollIntoView({
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 800); // scroll lock delay
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [sectionCount]);

  return refs;
}