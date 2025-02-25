
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
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
            Automate your real estate communications with instant responses, smart workflows, and guaranteed five-star reviews.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
