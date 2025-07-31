import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Brain, Database, Cloud, Lock, Zap } from "lucide-react";

const Technology = () => {
  const techStack = [
    {
      category: "AI & Machine Learning",
      icon: Brain,
      technologies: ["Large Language Models", "Multi-Agent Systems", "Time-Series Forecasting", "Computer Vision", "RAG Pipelines"],
      color: "tech-blue"
    },
    {
      category: "Data Engineering",
      icon: Database,
      technologies: ["Real-Time Streaming", "Data Lakes", "ETL Pipelines", "Time-Series DBs", "Vector Databases"],
      color: "electric-purple"
    },
    {
      category: "Cloud Infrastructure",
      icon: Cloud,
      technologies: ["Kubernetes", "Microservices", "Auto-Scaling", "Multi-Cloud", "Edge Computing"],
      color: "success-green"
    },
    {
      category: "Security & Compliance",
      icon: Lock,
      technologies: ["Zero Trust", "Encryption", "Audit Trails", "RBAC", "SOC 2 Type II"],
      color: "warning-amber"
    }
  ];

  const architectureFeatures = [
    {
      title: "Retrieval-Augmented Generation",
      description: "Advanced RAG implementations that combine your enterprise data with large language models for contextually accurate responses.",
      icon: Layers
    },
    {
      title: "Real-Time Processing",
      description: "Stream processing architectures capable of handling massive telemetry volumes with sub-second latency requirements.",
      icon: Zap
    },
    {
      title: "Modern Data Stack",
      description: "Cloud-native data platforms built for scale, flexibility, and enterprise security requirements.",
      icon: Database
    }
  ];

  return (
    <section id="technology" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Built on
            <span className="text-gradient"> Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platforms leverage the latest advances in AI, data engineering, and cloud infrastructure 
            to deliver enterprise-grade solutions that scale.
          </p>
        </div>
        
        {/* Technology Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techStack.map((stack, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-${stack.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stack.icon className={`h-6 w-6 text-${stack.color}`} />
                </div>
                <h3 className="font-semibold text-lg">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Architecture Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Reference Architectures</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {architectureFeatures.map((feature, index) => (
              <Card key={index} className="p-8 bg-gradient-card border-border shadow-card text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-tech-blue/20 flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-tech-blue" />
                  </div>
                  <h4 className="text-xl font-semibold">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Enterprise Features */}
        <Card className="p-8 bg-gradient-card border-border shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Enterprise-Ready Features</h3>
            <p className="text-muted-foreground">Built for mission-critical applications in regulated industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-success-green">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-tech-blue">SOC 2</div>
              <div className="text-sm text-muted-foreground">Type II Certified</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-electric-purple">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-warning-amber">Global</div>
              <div className="text-sm text-muted-foreground">Multi-Region</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Technology;