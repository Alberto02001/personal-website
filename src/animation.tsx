import React, {
  RefObject,
  useState,
  useEffect,
  FC,
  useRef,
  PropsWithChildren,
  CSSProperties
} from "react";
  
  function useElementOnScreen(ref: RefObject<Element>, rootMargin = "0px") {
    const [isIntersecting, setIsIntersecting] = useState(true);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting)
        },
        { rootMargin }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
    return isIntersecting;
  }
  
  const AnimateIn: FC<
    PropsWithChildren<{ from: CSSProperties; to: CSSProperties } >
  > = ({ from, to, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useElementOnScreen(ref);
    const defaultStyles: CSSProperties = {
      transition: "500ms ease-in-out"
    };

    return (
      <div
        ref={ref}
        style={
          onScreen
            ? {
                ...defaultStyles,
                ...to
              }
            : {
                ...defaultStyles,
                ...from
              }
        }
      >
        {children}
      </div>
    );
  };
  
  const FadeIn: FC<PropsWithChildren> = ({ children }) => (
    <AnimateIn from={{ scale: "0.8", opacity: 0 }} to={{ scale: "1", opacity: 1 }}>
      {children}
    </AnimateIn>
  );
  
  const FadeUp: FC<PropsWithChildren> = ({ children }) => (
    <AnimateIn
      from={{ opacity: 0, translate: "0 2rem" }}
      to={{ opacity: 1, translate: "none" }}
    >
      {children}
    </AnimateIn>
  );
  
export const Animate = {
    FadeIn,
    FadeUp
  };