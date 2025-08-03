import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-tech-blue/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-24 h-24 bg-electric-purple/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                The AI Platform That Unifies
                <span className="text-gradient"> Operations + Documentation Intelligence</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The AI platform for industrial leaders in Energy, Oil & Gas, and Manufacturing. We connect your operational data with equipment manuals and procedures to predict failures, automate compliance, and optimize workflows.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity group">
                Get My Free ROI Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                View Case Studies
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-tech-blue" />
                <span className="text-sm text-muted-foreground">Real-time Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-electric-purple" />
                <span className="text-sm text-muted-foreground">AI-Powered Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success-green" />
                <span className="text-sm text-muted-foreground">Enterprise Security</span>
              </div>
            </div>
          </div>
          
          <div className="lg:justify-self-end">
            <Card className="p-8 bg-gradient-card border-border shadow-card">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-tech-blue">35%</div>
                    <div className="text-sm text-muted-foreground">Downtime Reduction</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-electric-purple">$2.4M</div>
                    <div className="text-sm text-muted-foreground">Avg. Annual Savings</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-success-green">95%</div>
                    <div className="text-sm text-muted-foreground">Compliance Accuracy</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-warning-amber">8-Week</div>
                    <div className="text-sm text-muted-foreground">Average Deployment</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;