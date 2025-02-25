
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  const testimonials = [
    {
      quote: "Agent Swiftly has transformed how I handle client communications. My response rate has improved dramatically.",
      author: "Sarah Johnson",
      role: "Real Estate Agent",
    },
    {
      quote: "The automated workflows save me hours every week. It's like having a personal assistant 24/7.",
      author: "Michael Chen",
      role: "Property Manager",
    },
    {
      quote: "Since using Agent Swiftly, my review scores have never been better. It's a game-changer.",
      author: "Emily Rodriguez",
      role: "Real Estate Broker",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center font-semibold mb-12">
          What Our Clients Say
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex space-x-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <blockquote className="text-xl mb-6">{testimonial.quote}</blockquote>
                    <cite className="not-italic">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
