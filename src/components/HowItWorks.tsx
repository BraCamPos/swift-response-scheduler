import { useState } from "react";
import { PhoneOff, MessageSquare, CalendarCheck, Star, Smartphone, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleTryNowClick = () => {
    setShowPhoneNumber(true);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0483914477";
  };

  const steps = [
    {
      icon: PhoneOff,
      title: "Missed Call - Text Back",
      description: "Tied up or on a call when a client rings? Provide them with an immediate response introducing yourself and asking what they're enquiring about."
    },
    {
      icon: MessageSquare,
      title: "Automated Conversations",
      description: "Is the caller a potential client or a tyre kicker? Gain insight into their needs through a set of carefully written automated replies and go into your first conversation armed with knowledge that could seal the deal."
    },
    {
      icon: CalendarCheck,
      title: "Schedule Appointments",
      description: "Give the caller the opportunity to schedule a conversation with you at a time that suits."
    },
    {
      icon: Star,
      title: "Review Requests",
      description: "After wrapping up a sale send texts to clients inviting them to review on a site of your choice. Automatically vet client's before inviting them to review to ensure 5-star reviews every time"
    },
    {
      icon: Smartphone,
      title: "User-Friendly App",
      description: "Keep track of all your interactions with clients via our desktop and mobile app."
    }
  ];

  const getMobileConnectorStyles = (index: number) => {
    switch (index) {
      case 0: // First step to second
        return {
          containerHeight: 280,
          lineTopPosition: 180,
          lineHeight: 80,
          arrowPosition: 220,
          bottomLinePosition: 260,
          bottomLineHeight: 20
        };
      case 1: // Second step to third - longest content
        return {
          containerHeight: 300,
          lineTopPosition: 200,
          lineHeight: 80,
          arrowPosition: 240,
          bottomLinePosition: 280,
          bottomLineHeight: 20
        };
      case 2: // Third step to fourth - ADJUSTED DASHED LINE UPWARD
        return {
          containerHeight: 240,
          lineTopPosition: 140,
          lineHeight: 70,
          arrowPosition: 175,
          bottomLinePosition: 200,
          bottomLineHeight: 40
        };
      case 3: // Fourth step to fifth
        return {
          containerHeight: 280,
          lineTopPosition: 190,
          lineHeight: 70,
          arrowPosition: 225,
          bottomLinePosition: 260,
          bottomLineHeight: 20
        };
      default:
        return {
          containerHeight: 280,
          lineTopPosition: 180,
          lineHeight: 70,
          arrowPosition: 215,
          bottomLinePosition: 250,
          bottomLineHeight: 20
        };
    }
  };

  const getDesktopLogoRotation = (index: number) => {
    switch (index) {
      case 0: // First logo - 90 degrees right
        return "rotate(90deg)";
      case 1: // Second logo - 90 degrees left
        return "rotate(-90deg)";
      case 2: // Third logo - 90 degrees right
        return "rotate(90deg)";
      case 3: // Fourth logo - 90 degrees right
        return "rotate(90deg)";
      default:
        return "rotate(0deg)";
    }
  };

  const getMobileLogoRotation = (index: number) => {
    // Update all mobile logos to rotate 180 degrees (point downward)
    return "rotate(180deg)";
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center font-semibold mb-16">
          How It Works
        </h2>
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative mb-36 last:mb-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`hidden md:flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-[45%]">
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 bg-white">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                        <step.icon className="w-5 h-5 text-secondary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>

                <div className="w-[10%]" />

                <div className="w-[45%]" />
              </div>

              <div className="md:hidden">
                <div className="flex items-start gap-4">
                  <div className="relative z-10 bg-white">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                      <step.icon className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute z-0 hidden md:block" style={{
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: '240px'
                }}>
                  <div 
                    className="absolute border-l-2 border-dashed border-secondary/30"
                    style={{
                      height: '70px',
                      left: index % 2 === 0 ? '22.5%' : '77.5%',
                      top: '130px'
                    }}
                  />
                  <div 
                    className="absolute border-t-2 border-dashed border-secondary/30"
                    style={{
                      width: '55%',
                      top: '200px',
                      left: index % 2 === 0 ? '22.5%' : '22.5%'
                    }}
                  />
                  <div 
                    className="absolute z-10 bg-white p-1"
                    style={{
                      left: '48%',
                      top: '187px',
                    }}
                  >
                    <img 
                      src="/lovable-uploads/3277a88e-601f-4ceb-9b1e-b878acac5f52.png"
                      alt="My Agent Swiftly Logo" 
                      className="w-6 h-6 text-secondary"
                      style={{ transform: getDesktopLogoRotation(index) }}
                    />
                  </div>
                  <div 
                    className="absolute border-l-2 border-dashed border-secondary/30"
                    style={{
                      height: '40px',
                      left: index % 2 === 0 ? '77.5%' : '22.5%',
                      top: '200px'
                    }}
                  />
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="absolute z-0 md:hidden" style={{
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: getMobileConnectorStyles(index).containerHeight
                }}>
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <div 
                      className="absolute border-l-2 border-dashed border-secondary/30"
                      style={{
                        height: getMobileConnectorStyles(index).lineHeight,
                        top: getMobileConnectorStyles(index).lineTopPosition
                      }}
                    />
                    <div 
                      className="absolute z-10 bg-white p-1"
                      style={{
                        left: '-12px',
                        top: getMobileConnectorStyles(index).arrowPosition - 5
                      }}
                    >
                      <img 
                        src="/lovable-uploads/3277a88e-601f-4ceb-9b1e-b878acac5f52.png"
                        alt="My Agent Swiftly Logo" 
                        className="w-5 h-5 text-secondary"
                        style={{ transform: getMobileLogoRotation(index) }}
                      />
                    </div>
                    <div 
                      className="absolute border-l-2 border-dashed border-secondary/30"
                      style={{
                        height: getMobileConnectorStyles(index).bottomLineHeight,
                        top: getMobileConnectorStyles(index).bottomLinePosition
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16 animate-fade-up" style={{ animationDelay: "500ms" }}>
          {!showPhoneNumber ? (
            <Button 
              variant="secondary"
              className="text-base px-8 py-3 text-lg"
              onClick={handleTryNowClick}
            >
              Try Now
            </Button>
          ) : (
            <div className="flex items-center text-center">
              <Phone className="h-5 w-5 mr-2 text-secondary" />
              <a 
                href="tel:0483914477" 
                className="text-lg hover:text-secondary transition-colors"
                onClick={handlePhoneClick}
              >
                To test My Agent Swiftly please call 0483 914 477
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
