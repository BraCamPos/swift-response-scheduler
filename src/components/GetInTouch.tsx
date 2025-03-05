
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GetInTouch = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("I'd like to know more about using My Agent Swiftly");
    window.location.href = `mailto:bradley@myagentswiftly.com.au?subject=${subject}`;
  };

  const handleTextClick = () => {
    // Open SMS app with the phone number and prefilled text
    const message = encodeURIComponent("I'd like to know more about Agent Swiftly");
    window.location.href = `sms:0483914477?body=${message}`;
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0483914477";
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center font-semibold mb-12">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-secondary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-700">
                    <a href="tel:0483914477" className="hover:text-secondary transition-colors" onClick={handlePhoneClick}>
                      0483 914 477
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-secondary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-700">hello@myagentswiftly.com.au</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-secondary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-700">123 Real Estate Avenue<br />Sydney, NSW 2000</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-4">
              <Button 
                variant="secondary" 
                className="w-full py-6 text-lg"
                onClick={handleEmailClick}
              >
                Email Us Now
              </Button>
              <Button 
                variant="outline" 
                className="w-full py-6 text-lg border-secondary text-secondary hover:bg-secondary hover:text-white"
                onClick={handleTextClick}
              >
                Text Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
