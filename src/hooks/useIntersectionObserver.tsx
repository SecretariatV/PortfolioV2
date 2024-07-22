import { useEffect, useRef } from "react";

const useIntersectionObserver = (
  setCurrentSection: (section: string) => void,
  action: boolean,
  setAction: (data: boolean) => void,
  currentTab: string
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (action && location.hash.slice(1).split("-")[0] === currentTab) {
      setAction(false);
      return;
    }

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.2,
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    const sections = document.querySelectorAll<HTMLElement>("section");

    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setCurrentSection]);
};

export default useIntersectionObserver;
