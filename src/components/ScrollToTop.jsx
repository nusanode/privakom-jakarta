import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 lg:bottom-10 lg:left-10 z-50 
      bg-primary text-dark p-4 lg:p-5 rounded-full
      shadow-lg shadow-primary/30
      hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-2 active:scale-90
      transition-all duration-300"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6 lg:w-7 lg:h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5" 
        viewBox="0 0 24 24"
      >
  
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;