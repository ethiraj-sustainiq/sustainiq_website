import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-tech-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-electric-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-card border-border shadow-glow">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  See the Financial Impact of
                  <span className="text-gradient"> Unified Intelligence</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Schedule a complimentary assessment and we will provide a custom ROI projection for your specific industrial assets.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 group">
                  Get My Free ROI Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                  Ask Our Experts a Question
                </Button>
              </div>
              
              <div className="text-center pt-6">
                <p className="text-sm text-muted-foreground">
                  Trusted by Fortune 500 companies • Enterprise-grade security • No long-term contracts
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;