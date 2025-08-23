import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Database } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Regional Energy Provider (Texas Gulf Coast)",
      industry: "Energy",
      challenge: "Manual environmental permit compliance reviews taking 2-3 weeks to complete, creating operational bottlenecks and regulatory compliance risks with EPA reporting deadlines.",
      solution: "We deployed our unified platform to connect their real-time operational data to their library of regulatory documents. Our AI agents now continuously monitor operations against compliance rules, automatically analyzing and citing the relevant documentation to slash review times.",
      results: [
        { metric: "60%", description: "Reduction in review cycle time", icon: Clock, color: "tech-blue" },
        { metric: "95%", description: "Accuracy in compliance detection", icon: TrendingUp, color: "success-green" },
        { metric: "24/7", description: "Continuous monitoring capability", icon: Database, color: "electric-purple" }
      ],
      quote: "The platform transformed our regulatory workflow from a manual, error-prone process to an intelligent, automated system that scales with our growth.",
      role: "Head of Regulatory Affairs"
    },
    {
      company: "Midstream Oil & Gas Operator",
      industry: "Oil & Gas",
      challenge: "Processing massive volumes of SCADA and historian data from 12 distributed pipeline facilities while maintaining real-time visibility and operational control.",
      solution: "We implemented our unified intelligence platform to process 475GB of daily SCADA and historian data. The system doesn't just flag anomalies; it instantly cross-references them with digitized OEM manuals and maintenance procedures to provide operations engineers with immediate, actionable diagnostic insights.",
      results: [
        { metric: "475GB", description: "Daily SCADA & historian data", icon: Database, color: "tech-blue" },
        { metric: "<1s", description: "Real-time response latency", icon: Clock, color: "electric-purple" },
        { metric: "30%", description: "Improved operational efficiency", icon: TrendingUp, color: "success-green" }
      ],
      quote: "This platform gives us unprecedented visibility into our operations, enabling data-driven decisions that directly impact our bottom line.",
      role: "CTO, Digital Operations"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Proven Results with
            <span className="text-gradient"> Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped enterprise organizations transform their data operations and achieve measurable business outcomes.
          </p>
        </div>
        
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8 lg:p-12 bg-gradient-card border-border shadow-card">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-3xl font-bold">{study.company}</h3>
                    <Badge variant="outline" className="border-tech-blue text-tech-blue">
                      {study.industry}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-muted-foreground mb-2">Challenge</h4>
                      <p className="leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-muted-foreground mb-2">Solution</h4>
                      <p className="leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-tech-blue pl-6 italic text-lg">
                    "{study.quote}"
                    <footer className="mt-2 text-sm text-muted-foreground">
                      — {study.role}, {study.company}
                    </footer>
                  </blockquote>
                </div>
                
                <div className="space-y-6">
                  <h4 className="font-semibold text-lg">Key Results</h4>
                  <div className="space-y-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                        <div className={`w-10 h-10 rounded-lg bg-${result.color}/20 flex items-center justify-center`}>
                          <result.icon className={`h-5 w-5 text-${result.color}`} />
                        </div>
                        <div>
                          <div className={`text-2xl font-bold text-${result.color}`}>{result.metric}</div>
                          <div className="text-sm text-muted-foreground">{result.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button disabled className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 group">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default CaseStudies;