
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Send, Phone, Menu, Mail } from "lucide-react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm font-medium hover:text-secondary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-secondary transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-secondary transition-colors">
              Contact
            </a>
            <a href="#about" className="text-sm font-medium hover:text-secondary transition-colors">
              About Us
            </a>
            <a href="https://app.agentswiftly.com.au" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hover:text-secondary">
                Login
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
            </a>
            {showPhoneNumber && (
              <div className="flex items-center text-sm font-medium">
                <Phone className="h-4 w-4 mr-2 text-secondary" />
                <span>To test My Agent Swiftly please call 0483 914 477</span>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? "max-h-[500px] opacity-100 py-4" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 bg-white/95 rounded-lg p-4 shadow-md">
            <a 
              href="#how-it-works" 
              className="text-sm font-medium hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="https://app.agentswiftly.com.au" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="outline" className="w-full hover:text-secondary">
                Login
              </Button>
            </a>
            <a 
              href="#contact"
              className="py-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="secondary" className="w-full flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
            </a>
            {showPhoneNumber && (
              <div className="flex items-center text-sm font-medium py-2">
                <Phone className="h-4 w-4 mr-2 text-secondary flex-shrink-0" />
                <span>To test My Agent Swiftly please call 0483 914 477</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
