
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
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block animate-fade-in">
                <Send className="h-16 w-16 text-secondary mx-auto md:mx-0 mb-6" />
              </div>
              <h1 className="text-4xl md:text-6xl font-playfair font-semibold mb-6 animate-fade-up">
                Never Miss a Client Again
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                Instantly respond to calls you can't take and gain key insights through authentic automated conversations.
              </p>
              <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src="/placeholder.svg" 
                  alt="Real estate agent on phone" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <HowItWorks />
      <Pricing />

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center font-semibold mb-12">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-8">
              {/* Placeholder for profile image */}
            </div>
            <h3 className="text-2xl font-semibold mb-4">Bradley Camgoz Posselt</h3>
            <p className="text-gray-600 mb-6">
              As a passionate innovator in real estate technology, Bradley Camgoz Posselt founded Agent Swiftly with a vision to revolutionize how real estate agents communicate with their clients. With years of experience in both real estate and technology sectors, Bradley recognized the critical need for a solution that would help agents maintain meaningful connections with their clients, even during their busiest moments.
            </p>
            <p className="text-gray-600">
              Under his leadership, Agent Swiftly has grown to become a trusted partner for real estate professionals across Australia, helping them leverage cutting-edge AI technology to provide exceptional service while maintaining the personal touch that is so crucial in the real estate industry.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
