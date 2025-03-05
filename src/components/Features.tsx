
import { MessageSquare, CalendarCheck, Star, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Instant SMS Responses",
      description: "Never miss an opportunity with instant SMS replies when you're unavailable, tailored to sound just like you.",
    },
    {
      icon: Settings,
      title: "One Step Ahead",
      description: "Gain valuable context from automated interactions to enhance your initial client conversations with meaningful background information.",
    },
    {
      icon: CalendarCheck,
      title: "Schedule On The Go",
      description: "Automatically send scheduling links to streamline appointment booking and increase your productivity.",
    },
    {
      icon: Star,
      title: "Review Management",
      description: "Build your reputation with our guaranteed five-star reviews from genuine clients.",
    },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center font-semibold mb-12">
          Stay One Step Ahead With Automated Exchanges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Get In Touch Button */}
        <div className="flex justify-center mt-12 animate-fade-up" style={{ animationDelay: "500ms" }}>
          <a 
            href="#contact" 
            className="inline-block"
            onClick={(e) => handleAnchorClick(e, "contact")}
          >
            <Button 
              variant="secondary" 
              className="text-base px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
