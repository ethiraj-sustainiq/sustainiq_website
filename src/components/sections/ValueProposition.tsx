import { Card } from "@/components/ui/card";
import { Brain, Database, Gauge, Lock } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Brain,
      title: "GenAI-Powered Intelligence",
      description: "Our AI agents don't just analyze data; they read your documents. By combining real-time operations with your maintenance manuals and procedures, we deliver insights that have true operational context.",
      gradient: "from-light-green to-green-accent"
    },
    {
      icon: Gauge,
      title: "Real-Time Decision Making",
      description: "Instantly transform equipment alerts into action. We process your telemetry data in real-time and automatically surface the correct procedure from your documentation, turning a simple alert into a complete work plan.",
      gradient: "from-green-accent to-light-green"
    },
    {
      icon: Database,
      title: "Unified Data & Documents",
      description: "We connect to everything. Our platform integrates not only with your SCADA and historian data but also with your document repositories, creating a single source of truth for both operational and procedural knowledge.",
      gradient: "from-light-green to-electric-purple"
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Achieve effortless compliance. Our platform monitors your operational data against your digitized environmental permits and safety regulations, automatically flagging deviations and generating audit-ready reports.",
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