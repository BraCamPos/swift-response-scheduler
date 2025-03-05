
import { useState } from "react";
import { PhoneOff, MessageSquare, CalendarCheck, Star, Smartphone, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleTryNowClick = () => {
    setShowPhoneNumber(true);
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

  // Custom spacing for mobile connectors to prevent text overlap
  const getMobileConnectorStyles = (index: number) => {
    // Different spacing for each step based on its content length and required even spacing
    switch (index) {
      case 0: // First step to second
        return {
          containerHeight: 280, // Increased height
          lineTopPosition: 180, // Start line lower
          lineHeight: 80, // Longer line
          arrowPosition: 220, // Position plane in middle of line
          bottomLinePosition: 260, // Lower bottom connection
          bottomLineHeight: 20 // Shorter bottom line
        };
      case 1: // Second step to third - longest content
        return {
          containerHeight: 300, // Increased height
          lineTopPosition: 200, // Start line lower
          lineHeight: 80, // Longer line
          arrowPosition: 240, // Position plane in middle of line
          bottomLinePosition: 280, // Lower bottom connection
          bottomLineHeight: 20 // Shorter bottom line
        };
      case 2: // Third step to fourth - ADJUSTED FOR BETTER SPACING
        return {
          containerHeight: 290, // Increased height
          lineTopPosition: 200, // Start line much lower
          lineHeight: 70, // Medium line
          arrowPosition: 235, // Position plane in middle of line
          bottomLinePosition: 270, // Lower bottom connection
          bottomLineHeight: 20 // Shorter bottom line
        };
      case 3: // Fourth step to fifth
        return {
          containerHeight: 280, // Increased height
          lineTopPosition: 190, // Start line lower
          lineHeight: 70, // Medium line
          arrowPosition: 225, // Position plane in middle of line
          bottomLinePosition: 260, // Lower bottom connection 
          bottomLineHeight: 20 // Shorter bottom line
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
              {/* Desktop layout */}
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

              {/* Mobile layout */}
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

              {/* Connection lines - Desktop version */}
              {index < steps.length - 1 && (
                <div className="absolute z-0 hidden md:block" style={{
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: '240px'
                }}>
                  {/* Vertical line down from current paragraph */}
                  <div 
                    className="absolute border-l-2 border-dashed border-secondary/30"
                    style={{
                      height: '70px',
                      left: index % 2 === 0 ? '22.5%' : '77.5%',
                      top: '130px'
                    }}
                  />
                  {/* Horizontal line */}
                  <div 
                    className="absolute border-t-2 border-dashed border-secondary/30"
                    style={{
                      width: '55%',
                      top: '200px',
                      left: index % 2 === 0 ? '22.5%' : '22.5%'
                    }}
                  />
                  {/* Send icon */}
                  <div 
                    className="absolute z-10 bg-white p-1"
                    style={{
                      left: '48%',
                      top: '192px',
                      transform: `rotate(${index % 2 === 0 ? '45' : '225'}deg)`
                    }}
                  >
                    <Send className="w-6 h-6 text-secondary" />
                  </div>
                  {/* Vertical line to next paragraph */}
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

              {/* Connection lines - Mobile version with improved CUSTOMIZED SPACING */}
              {index < steps.length - 1 && (
                <div className="absolute z-0 md:hidden" style={{
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: getMobileConnectorStyles(index).containerHeight // Customized height
                }}>
                  {/* Center-aligned vertical line connecting steps */}
                  <div className="absolute left-1/2 -translate-x-1/2">
                    {/* Vertical line down from current paragraph - with custom positioning */}
                    <div 
                      className="absolute border-l-2 border-dashed border-secondary/30"
                      style={{
                        height: getMobileConnectorStyles(index).lineHeight,
                        top: getMobileConnectorStyles(index).lineTopPosition // Custom top position
                      }}
                    />
                    {/* Arrow icon - with custom positioning */}
                    <div 
                      className="absolute z-10 bg-white p-1"
                      style={{
                        left: '-12px',
                        top: getMobileConnectorStyles(index).arrowPosition // Custom arrow position
                      }}
                    >
                      <Send className="w-5 h-5 text-secondary rotate-90" />
                    </div>
                    {/* Vertical line to next paragraph - with custom positioning */}
                    <div 
                      className="absolute border-l-2 border-dashed border-secondary/30"
                      style={{
                        height: getMobileConnectorStyles(index).bottomLineHeight,
                        top: getMobileConnectorStyles(index).bottomLinePosition // Custom bottom position
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Try Now Button (now shows phone number when clicked) */}
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
              <span className="text-lg">To test My Agent Swiftly please call 0483 914 477</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
