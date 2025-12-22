import { useEffect } from "react";
import { useLocation } from "wouter";

const ScrollToTop = () => {
  // Get the current location pathname
  const [pathname] = useLocation();

  // This effect runs every time the pathname changes
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }, [pathname]);

  // This component renders nothing
  return null;
};

export default ScrollToTop;