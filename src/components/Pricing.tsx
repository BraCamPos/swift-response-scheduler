
import { Check } from "lucide-react";
import { ContactFormDialog } from "./ContactFormDialog";

export const Pricing = () => {
  const plans = [
    {
      name: "MySwiftly",
      price: "$127",
      period: "/agent /month",
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
      price: "$187",
      period: "/agent /month",
      features: [
        "Everything in MySwiftly, plus",
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
              className="relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
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
              </div>
              <div className="mt-auto">
                <p className="text-sm text-gray-500 italic mb-4">*min. three months excluding SMS charges</p>
                <ContactFormDialog 
                  triggerText="Enquire Now" 
                  buttonClassName="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
