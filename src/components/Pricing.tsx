
import { Check } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  const plans = [
    {
      name: "Swiftly",
      price: "$127",
      period: "/agent/month",
      features: [
        "Automated missed call responses",
        "Automated text exchanges",
        "Customised SMS wording at setup",
        "Three text updates per month",
        "Integrated scheduling with your calendar",
        "Qualified review request workflow",
        "All communication logged in app",
      ],
    },
    {
      name: "Swiftly Plus",
      price: "$187",
      period: "/agent/month",
      features: [
        "Everything in Swiftly, plus",
        "Detailed SMS responses including links to listings and inspection times",
        "Weekly SMS wording updates",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center font-semibold mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{plan.price}<sup>*</sup></span>
                <span className="text-gray-600 ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={20} className="text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 italic mb-4">*min. three months</p>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
