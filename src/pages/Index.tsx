
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { Send } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <Send className="h-16 w-16 text-secondary mx-auto mb-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-semibold mb-6 animate-fade-up">
            Never Miss a Client Again
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Instantly respond to calls you can't take and gain key insights through authentic automated conversations.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
