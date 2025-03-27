
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
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

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-8 p-3 rounded-full bg-blog-neon text-black shadow-neon transition-all duration-500 z-30 transform hover:rotate-180 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
      <div className="absolute inset-0 rounded-full bg-blog-neon animate-pulse-glow opacity-80"></div>
    </button>
  );
};

export default ScrollToTop;
