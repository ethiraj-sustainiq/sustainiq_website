import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, TrendingUp, Search, Shield } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Cpu,
      title: "Real-Time IoT Analytics",
      description: "Process massive telemetry streams from industrial equipment, enabling predictive maintenance and operational optimization.",
      benefits: ["475GB+ daily processing", "Sub-second response times", "Predictive alerts"],
      industries: ["Energy", "Manufacturing", "Utilities"],
      color: "tech-blue"
    },
    {
      icon: TrendingUp,
      title: "Time-Series Forecasting",
      description: "Advanced ML models that predict equipment failures, demand patterns, and operational bottlenecks before they impact business.",
      benefits: ["95% accuracy rates", "30-day forecasts", "Automated insights"],
      industries: ["Oil & Gas", "Power Generation", "Supply Chain"],
      color: "electric-purple"
    },
    {
      icon: Search,
      title: "Enterprise Search & Chat",
      description: "RAG-powered systems that instantly surface critical information from vast document repositories and knowledge bases.",
      benefits: ["Natural language queries", "Multi-source integration", "Context-aware results"],
      industries: ["Regulatory", "Legal", "Compliance"],
      color: "success-green"
    },
    {
      icon: Shield,
      title: "Regulatory Intelligence",
      description: "Multi-agent LLM pipelines that monitor regulatory changes, assess compliance impact, and automate report generation.",
      benefits: ["60% faster reviews", "Automated compliance", "Risk assessment"],
      industries: ["Financial Services", "Healthcare", "Energy"],
      color: "warning-amber"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Proven Use Cases Across
            <span className="text-gradient"> Critical Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From real-time telemetry processing to regulatory intelligence, our platforms solve complex challenges 
            that matter most to enterprise operations.
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