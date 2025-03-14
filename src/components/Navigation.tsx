
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Phone, Menu } from "lucide-react";

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

  const handlePhoneClick = () => {
    window.location.href = "tel:0483914477";
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
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
          <a href="/" className="flex items-center">
            <div className="h-10 w-auto mt-2">
              <img 
                src="/lovable-uploads/8d667915-cd2f-4559-af7b-c06937805ab1.png" 
                alt="My Agent Swiftly Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              className="text-sm font-medium font-playfair hover:text-secondary transition-colors"
              onClick={(e) => handleAnchorClick(e, "how-it-works")}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium font-playfair hover:text-secondary transition-colors"
              onClick={(e) => handleAnchorClick(e, "pricing")}
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium font-playfair hover:text-secondary transition-colors"
              onClick={(e) => handleAnchorClick(e, "about")}
            >
              About Us
            </a>
            <a href="https://app.myagentswiftly.com.au/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hover:text-secondary font-playfair">
                Login
              </Button>
            </a>
            {!showPhoneNumber ? (
              <a 
                href="#contact" 
                className="inline-block"
                onClick={(e) => handleAnchorClick(e, "contact")}
              >
                <Button variant="secondary" className="font-playfair">
                  Get In Touch
                </Button>
              </a>
            ) : (
              <div className="flex items-center text-sm font-medium font-playfair">
                <Phone className="h-4 w-4 mr-2 text-secondary flex-shrink-0" />
                <span>
                  To test My Agent Swiftly please call <a 
                    href="tel:0483914477" 
                    className="hover:text-secondary transition-colors underline font-playfair"
                    onClick={handlePhoneClick}
                  >
                    0483 914 477
                  </a>
                </span>
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
              className="font-playfair"
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
              className="text-sm font-medium font-playfair hover:text-secondary transition-colors py-2"
              onClick={(e) => handleAnchorClick(e, "how-it-works")}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium font-playfair hover:text-secondary transition-colors py-2"
              onClick={(e) => handleAnchorClick(e, "pricing")}
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium font-playfair hover:text-secondary transition-colors py-2"
              onClick={(e) => handleAnchorClick(e, "about")}
            >
              About Us
            </a>
            <a 
              href="https://app.myagentswiftly.com.au/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-2"
            >
              <Button variant="outline" className="w-full hover:text-secondary font-playfair">
                Login
              </Button>
            </a>
            <div className="py-2">
              {!showPhoneNumber ? (
                <a 
                  href="#contact" 
                  className="block"
                  onClick={(e) => handleAnchorClick(e, "contact")}
                >
                  <Button variant="secondary" className="w-full font-playfair">
                    Get In Touch
                  </Button>
                </a>
              ) : (
                <div className="flex items-center text-sm font-medium font-playfair">
                  <Phone className="h-8 w-8 mr-2 text-secondary flex-shrink-0" />
                  <span className="font-playfair">
                    To test My Agent Swiftly please call <a 
                      href="tel:0483914477" 
                      className="hover:text-secondary transition-colors underline font-playfair"
                      onClick={handlePhoneClick}
                    >
                      0483 914 477
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
