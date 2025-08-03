import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, TrendingUp, Search, Shield } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Cpu,
      title: "Predictive Maintenance",
      description: "We go beyond simple alerts. Our platform analyzes real-time telemetry from your equipment and instantly cross-references it with your OEM manuals and maintenance history to provide a complete diagnostic, including the likely root cause and the correct repair procedure.",
      benefits: ["Reduce unplanned downtime by up to 35%", "Accelerate root-cause analysis from days to minutes", "Equip technicians with procedural guidance"],
      industries: ["Energy", "Manufacturing", "Utilities"],
      color: "tech-blue"
    },
    {
      icon: TrendingUp,
      title: "Demand & Failure Forecasting",
      description: "Our forecasting models learn from both your historical time-series data and your documented operational limits. This unified approach allows us to more accurately predict future equipment failures, energy demand, and potential supply chain bottlenecks.",
      benefits: ["Improve forecast accuracy with contextual data", "Optimize maintenance schedules and inventory", "Prevent operational disruptions before they occur"],
      industries: ["Oil & Gas", "Power Generation"],
      color: "electric-purple"
    },
    {
      icon: Search,
      title: "Intelligent Document Retrieval",
      description: "This is more than just search. When an operational event occurs, your team can ask plain-language questions and get instant answers sourced directly from your manuals, contracts, and compliance documents, with citations included.",
      benefits: ["Find critical procedures and specs in seconds", "Verify vendor SLAs against real-time performance", "Reduce reliance on institutional knowledge"],
      industries: [],
      color: "success-green"
    },
    {
      icon: Shield,
      title: "Automated Compliance",
      description: "Achieve continuous, audit-ready compliance. Our platform monitors your real-time operational data, like emissions, and compares it against your digitized environmental permits and safety regulations to automatically flag and document any deviation.",
      benefits: ["Cut compliance reporting time by over 90%", "Prevent violations with real-time alerts", "Simplify audit prep with automated data trails"],
      industries: ["Energy"],
      color: "warning-amber"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Solutions for
            <span className="text-gradient"> Industrial Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solutions are built on a single, unified platform that combines your real-time operational data with your enterprise documentation to deliver true, end-to-end intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-xl bg-${useCase.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className={`h-7 w-7 text-${useCase.color}`} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">Key Benefits</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-${useCase.color}`}></div>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;