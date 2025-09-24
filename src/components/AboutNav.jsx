import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const AboutNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-2 bg-background/80 bg-opacity-20 backdrop-blur-sm shadow-4xl border border-black/10 rounded-2xl"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Left: Name */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="/"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Hassan Shahid </span>
          </span>
        </a>

        <a
          href="/"
          className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg"
        >
          Home
        </a>
      </div>
      
    </nav>
  );
};