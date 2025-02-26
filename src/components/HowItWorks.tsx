
import { PhoneOff, MessageSquare, CalendarCheck, Star, Smartphone } from "lucide-react";

export const HowItWorks = () => {
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
      title: "App",
      description: "Keep track of all your interactions with clients via our desktop and mobile app."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center font-semibold mb-16">
          How it Works
        </h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative flex items-start gap-6 mb-16 last:mb-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Dashed line connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-14 w-0.5 h-24 border-l-2 border-dashed border-secondary/30" />
              )}
              
              {/* Icon */}
              <div className="relative z-10 bg-white">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                  <step.icon className="w-5 h-5 text-secondary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
