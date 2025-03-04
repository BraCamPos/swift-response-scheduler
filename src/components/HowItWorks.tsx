
import { PhoneOff, MessageSquare, CalendarCheck, Star, Smartphone, Send } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: PhoneOff,
      title: "Missed Call - Text Back",
      description: "Tied up or on a call when a client rings? Provide them with an immediate response introducing yourself and asking what they're enquiring about."
    },
    {
      icon: MessageSquare,
      title: "Automated Conversations",
      description: "Is the caller a potential client or a tyre kicker? Gain insight into their needs through a set of carefully written automated replies and go into your first conversation armed with knowledge that could seal the deal."
    },
    {
      icon: CalendarCheck,
      title: "Schedule Appointments",
      description: "Give the caller the opportunity to schedule a conversation with you at a time that suits."
    },
    {
      icon: Star,
      title: "Review Requests",
      description: "After wrapping up a sale send texts to clients inviting them to review on a site of your choice. Automatically vet client's before inviting them to review to ensure 5-star reviews every time"
    },
    {
      icon: Smartphone,
      title: "App",
      description: "Keep track of all your interactions with clients via our desktop and mobile app."
    }
  ];

  // Array of different path patterns for each step
  const flightPaths = [
    // First path (0 to 1)
    `M 225 130 
     C 325 40, 400 160, 475 80 
     C 525 20, 550 120, 600 100 
     C 650 80, 700 180, 775 240`,
    // Second path (1 to 2)
    `M 775 130 
     C 675 50, 625 200, 550 150 
     C 475 100, 425 180, 350 120 
     C 275 60, 250 160, 225 240`,
    // Third path (2 to 3)
    `M 225 130 
     C 300 80, 350 220, 450 140 
     C 550 60, 600 180, 650 120 
     C 700 60, 750 180, 775 240`,
    // Fourth path (3 to 4)
    `M 775 130 
     C 700 70, 650 200, 550 130 
     C 450 60, 400 200, 300 130 
     C 250 90, 225 170, 225 240`
  ];

  // Array of different airplane positions for each path
  const planePositions = [
    { x: 480, y: 100, rotate: 45 },
    { x: 525, y: 150, rotate: 225 },
    { x: 450, y: 140, rotate: 45 },
    { x: 400, y: 120, rotate: 225 }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center font-semibold mb-16">
          How It Works
        </h2>
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative mb-36 last:mb-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-[45%]">
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 bg-white">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10">
                        <step.icon className="w-5 h-5 text-secondary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>

                <div className="w-[10%]" />

                <div className="w-[45%]" />
              </div>

              {index < steps.length - 1 && (
                <div className="absolute z-0" style={{
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: '240px'
                }}>
                  {/* Paper airplane flight path - curved with loops, unique for each step */}
                  <svg 
                    className="absolute w-full h-full"
                    style={{
                      top: '0',
                      left: '0',
                    }}
                    viewBox="0 0 1000 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Curved path with loops - different for each step */}
                    <path 
                      d={index % 2 === 0 ? flightPaths[index] : flightPaths[index]} 
                      stroke="#0066cc"
                      strokeOpacity="0.3"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      fill="none"
                    />

                    {/* Paper airplane icon - positioned along the path */}
                    <g 
                      transform={`translate(${planePositions[index].x}, ${planePositions[index].y}) rotate(${planePositions[index].rotate})`}
                    >
                      <foreignObject width="30" height="30" x="-15" y="-15">
                        <div className="bg-white p-1 rounded-full">
                          <Send className="w-6 h-6 text-secondary" />
                        </div>
                      </foreignObject>
                    </g>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
