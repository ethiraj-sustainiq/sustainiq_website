import { Card } from "@/components/ui/card";
import { Brain, Database, Gauge, Lock } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Brain,
      title: "GenAI-Powered Intelligence",
      description: "Multi-agent LLM pipelines that understand context, automate complex workflows, and generate actionable insights from unstructured data.",
      gradient: "from-light-green to-green-accent"
    },
    {
      icon: Gauge,
      title: "Real-Time Decision Making",
      description: "Process massive telemetry streams and IoT data at scale, enabling instant responses to critical operational changes.",
      gradient: "from-green-accent to-light-green"
    },
    {
      icon: Database,
      title: "Enterprise Data Integration",
      description: "Seamlessly connect disparate systems with modern data stacks, time-series forecasting, and advanced analytics.",
      gradient: "from-light-green to-electric-purple"
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Built for regulated industries with enterprise-grade security, audit trails, and compliance frameworks.",
      gradient: "from-warning-amber to-green-accent"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why Enterprise Leaders Choose
            <span className="text-gradient"> Our Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver measurable results through cutting-edge AI, proven at scale across energy, 
            manufacturing, and regulated industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-8 bg-gradient-card rounded-2xl border border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-light-green">10x</div>
              <div className="text-sm text-muted-foreground">Faster Analysis</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-purple">50%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;