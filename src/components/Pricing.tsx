
import { Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "MySwiftly",
      monthlyPrice: "$147",
      yearlyPrice: "$118",
      period: "/agent",
      features: [
        "Automated missed call responses",
        "Automated text exchanges",
        "Customised SMS wording at setup",
        "Integrated scheduling with your calendar",
        "Qualified review request workflow",
        "All communication logged in app",
      ],
    },
    {
      name: "MySwiftly Plus",
      monthlyPrice: "$227",
      yearlyPrice: "$181",
      period: "/agent",
      features: [
        "Everything in MySwiftly, plus",
        "Detailed SMS responses including links to listings and inspection times",
        "Weekly SMS wording updates",
      ],
    },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleChange = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center font-semibold mb-8">
          Simple, Transparent Pricing
        </h2>
        
        <div className="flex items-center justify-center mb-10">
          <span className={`mr-3 ${!isYearly ? 'font-semibold text-secondary' : 'text-gray-600'}`}>Monthly</span>
          <Switch 
            checked={isYearly} 
            onCheckedChange={handleToggleChange} 
            className="data-[state=checked]:bg-secondary"
          />
          <span className={`ml-3 ${isYearly ? 'font-semibold text-secondary' : 'text-gray-600'}`}>Yearly</span>
          {isYearly && (
            <span className="ml-2 bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full">
              Save more
            </span>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}<sup>*</sup>
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period} {isYearly ? '/year' : '/month'}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={20} className="text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <p className="text-xs text-gray-500 italic mb-4">
                  *min. three months excluding network charges{isYearly ? ', billed annually' : ''}
                </p>
                <a 
                  href="#contact" 
                  className="block"
                  onClick={(e) => handleAnchorClick(e, "contact")}
                >
                  <Button 
                    variant="secondary" 
                    className="w-full"
                  >
                    Enquire Now
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
