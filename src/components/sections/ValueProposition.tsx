import { Card } from "@/components/ui/card";
import { Brain, Database, Gauge, Lock } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Brain,
      title: "Operational Intelligence Platform",
      description: "Our platform doesn't just analyze data; it connects your SCADA systems with OEM manuals and maintenance procedures. By combining real-time telemetry with equipment documentation, we deliver insights with true operational context.",
      gradient: "from-light-green to-green-accent"
    },
    {
      icon: Gauge,
      title: "From Alert to Work Order in Minutes",
      description: "Transform equipment alarms into actionable work plans. We process your historian and SCADA data in real-time, automatically surfacing the correct maintenance procedure from your documentation library.",
      gradient: "from-green-accent to-light-green"
    },
    {
      icon: Database,
      title: "Operations Data + Maintenance Procedures",
      description: "We connect to your existing infrastructure. Our platform integrates with Wonderware, GE, Honeywell SCADA systems and your document repositories, creating a single source of truth for operational and procedural knowledge.",
      gradient: "from-light-green to-electric-purple"
    },
    {
      icon: Lock,
      title: "Environmental Permit Compliance",
      description: "Achieve continuous compliance monitoring. Our platform monitors your emissions and operational data against EPA permits and safety regulations, automatically flagging deviations and generating audit-ready reports for regulatory agencies.",
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
      </div>
    </section>
  );
};

export default ValueProposition;