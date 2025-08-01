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
                Transform Enterprise
                <span className="text-gradient"> Data into Intelligent Action</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Advanced AI & data platforms that accelerate decisions, reduce risk, and unlock value from complex enterprise data. 
                Proven to reduce review cycles by 60% while processing massive telemetry at scale.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity group">
                Schedule Demo
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
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Ready to accelerate your data strategy?</h3>
                  <p className="text-muted-foreground">Join enterprise leaders transforming their operations</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-tech-blue">60%</div>
                    <div className="text-sm text-muted-foreground">Faster Review Cycles</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-electric-purple">475GB</div>
                    <div className="text-sm text-muted-foreground">Daily Processing</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-success-green">24/7</div>
                    <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-warning-amber">Enterprise</div>
                    <div className="text-sm text-muted-foreground">Scale Ready</div>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Get Started Today
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;