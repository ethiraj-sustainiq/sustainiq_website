
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      title: "Co-Founder & CEO",
      avatar: "/placeholder.svg",
    },
    {
      name: "Jane Smith",
      title: "Co-Founder & CTO",
      avatar: "/placeholder.svg",
    },
  ];

  const credentials = [
    "20+ Years in Energy Operations & Digital Transformation",
    "Deep Expertise in SCADA & Historian Systems",
    "Certified Cloud & Data Architects",
    "Proven Success in Energy & Manufacturing",
    "Industrial AI & Document Intelligence Systems",
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Houston-Based
              <span className="text-gradient"> Industrial AI Experts</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We founded SustainIQ AI in the heart of Texas' industrial corridor after spending a combined 20 years implementing enterprise data systems for the energy sector. 
              </p>
              <p>
                We saw firsthand that the biggest challenge wasn't a lack of data, but the critical gap between that data and the documented procedures needed to act on it. So, we built the platform we knew the industry needed—one that unifies operations and documentation to deliver not just alerts, but complete, actionable intelligence.
              </p>
            </div>
          </div>
          
          <div>
            <Card className="p-8 bg-gradient-card border-border shadow-card">
              <div className="space-y-6">
                <div className="flex justify-center space-x-8">
                  {/* {teamMembers.map((member) => (
                    <div key={member.name} className="text-center">
                      <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.title}</p>
                    </div>
                  ))} */}
                </div>
                <ul className="space-y-3 pt-4">
                  {credentials.map((credential, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success-green mr-3" />
                      <span className="text-sm">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
