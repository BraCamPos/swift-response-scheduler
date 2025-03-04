
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Send, Phone } from "lucide-react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTryNowClick = () => {
    setShowPhoneNumber(true);
  };

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
            <Send className="h-8 w-8 text-secondary" />
            <span className="font-playfair text-xl font-semibold">My Agent Swiftly</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm font-medium hover:text-secondary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-secondary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm font-medium hover:text-secondary transition-colors">
              About Us
            </a>
            <a href="https://app.agentswiftly.com.au" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hover:text-secondary">
                Login
              </Button>
            </a>
            {!showPhoneNumber ? (
              <Button 
                variant="default" 
                className="bg-secondary hover:bg-secondary/90"
                onClick={handleTryNowClick}
              >
                Try Now
              </Button>
            ) : (
              <div className="flex items-center text-sm font-medium">
                <Phone className="h-4 w-4 mr-2 text-secondary" />
                <span>To test My Agent Swiftly please call 0483 914 477</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
