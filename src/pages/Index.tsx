
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
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block animate-fade-in">
                <Send className="h-12 w-12 text-secondary mx-auto md:mx-0 mb-4" />
              </div>
              <h1 className="text-3xl md:text-5xl font-playfair font-semibold mb-4 animate-fade-up">
                Never Miss a Client Again
              </h1>
              <p className="text-lg text-gray-600 mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
                Instantly respond to calls you can't take and gain key insights through authentic automated conversations.
              </p>
              <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                <img 
                  src="/lovable-uploads/9e49fe0a-69b6-4e9f-8918-223404f9884f.png" 
                  alt="Professional real estate agent in a grey suit talking on phone while holding a folder" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
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
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="md:w-1/4">
                <div className="w-48 h-48 md:w-full md:h-auto aspect-square mx-auto rounded-full overflow-hidden shadow-md">
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
                <p className="text-gray-600 mb-6 text-center md:text-left">
                  My Agent Swiftly is the brainchild of Bradley Camgoz Posselt, a passionate innovator in real estate technology. With years of experience in both real estate and technology sectors, we recognized the critical need for a solution that would help agents maintain meaningful connections with their clients, even during their busiest moments.
                </p>
                <p className="text-gray-600 text-center md:text-left">
                  My Agent Swiftly has grown to become a trusted partner for real estate professionals across Australia, helping them leverage cutting-edge AI technology to provide exceptional service while maintaining the personal touch that is so crucial in the real estate industry.
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
