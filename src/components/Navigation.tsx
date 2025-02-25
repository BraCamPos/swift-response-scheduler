
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { PlanePaper } from "lucide-react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <PlanePaper className="h-8 w-8 text-secondary" />
            <span className="font-playfair text-xl font-semibold">Agent Swiftly</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-secondary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-secondary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-secondary transition-colors">
              Testimonials
            </a>
            <Button variant="default" className="bg-secondary hover:bg-secondary/90">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
