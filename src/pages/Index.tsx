
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { GetInTouch } from "@/components/GetInTouch";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { Phone } from "lucide-react";

const Index = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleTryNowClick = () => {
    setShowPhoneNumber(true);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0483914477";
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block animate-fade-in h-16 w-auto">
                <img 
                  src="/lovable-uploads/fc5266ae-530a-4a5d-9d57-40147841d3e7.png" 
                  alt="My Agent Swiftly Logo" 
                  className="h-full w-auto object-contain mx-auto md:mx-0 mb-4"
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-playfair font-semibold mb-4 animate-fade-up">
                Never Miss a Client Again
              </h1>
              <p className="text-lg text-gray-600 mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
                Instantly respond to calls you can't take and gain key insights through authentic automated conversations.
              </p>
              <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
                {!showPhoneNumber ? (
                  <Button 
                    variant="secondary" 
                    className="text-base"
                    onClick={handleTryNowClick}
                  >
                    Try Now
                  </Button>
                ) : (
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone className="h-5 w-5 md:h-5 md:w-5 mr-2 text-secondary md:flex-shrink-0 sm:h-10 sm:w-10" />
                    <span className="text-lg">
                      To test My Agent Swiftly please call <a 
                        href="tel:0483914477" 
                        className="text-lg hover:text-secondary transition-colors underline"
                        onClick={handlePhoneClick}
                      >
                        0483 914 477
                      </a>
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="hidden md:block animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                <img 
                  src="/lovable-uploads/439262b0-e6a5-4808-802c-974d217a86ea.png" 
                  alt="Professional real estate agent woman in a light grey suit holding a folder and talking on phone" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <HowItWorks />
      <Pricing />
      <GetInTouch />

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center font-semibold mb-12">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="md:w-1/4">
                <div className="w-34 h-34 md:w-[70%] md:h-auto aspect-square mx-auto rounded-full overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/19c22431-2830-4911-9071-90dc60fdbb91.png"
                    alt="Professional profile photo in black and white"
                    className="w-full h-full object-cover object-top scale-x-[-1]"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600 text-center md:text-left">
                  My Agent Swiftly is the brainchild of Bradley Camgoz Posselt, a passionate innovator in real estate technology. With years of experience in both real estate and technology sectors, we recognized the critical need for a solution that would help agents maintain meaningful connections with their clients, even during their busiest moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
