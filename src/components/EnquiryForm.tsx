
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface EnquiryFormProps {
  triggerText?: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  buttonClassName?: string;
}

export function EnquiryForm({
  triggerText = "Enquire Now",
  buttonVariant = "secondary",
  buttonClassName = "",
}: EnquiryFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [useCase, setUseCase] = useState("agency");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your backend
      console.log("Sending email with data:", { 
        firstName, 
        lastName, 
        company, 
        email, 
        phone, 
        useCase,
        recipients: ["bradley@agentswiftly.com.au", "bradley@myagentswiftly.com.au"]
      });
      
      // Simulate an API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Enquiry submitted successfully!",
        description: "Thank you for your interest. We'll get back to you shortly.",
      });
      
      // Reset form and close dialog
      setFirstName("");
      setLastName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setUseCase("agency");
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className={buttonClassName}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-center">
            Contact Agent Swiftly
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name*</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name*</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your last name"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Your company name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number*</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Are You Looking to Use Agent Swiftly For:*</Label>
            <RadioGroup 
              value={useCase} 
              onValueChange={setUseCase}
              className="flex flex-col space-y-2 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="agency" id="agency" />
                <Label htmlFor="agency" className="cursor-pointer">Your agency</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="self" id="self" />
                <Label htmlFor="self" className="cursor-pointer">Just yourself</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-secondary hover:bg-secondary/90 mt-6"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Enquiry
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
