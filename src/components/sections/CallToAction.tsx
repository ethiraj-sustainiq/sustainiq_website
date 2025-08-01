import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, MessageSquare, Phone } from "lucide-react";

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
                  Ready to Transform Your
                  <span className="text-gradient"> Data Operations?</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join industry leaders who are already accelerating decisions, reducing risk, 
                  and unlocking value from their complex enterprise data.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 py-8">
                <div className="flex items-center space-x-3 justify-center">
                  <div className="w-10 h-10 rounded-lg bg-tech-blue/20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-tech-blue" />
                  </div>
                  <span className="text-sm">30-minute consultation</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <div className="w-10 h-10 rounded-lg bg-electric-purple/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-electric-purple" />
                  </div>
                  <span className="text-sm">Custom solution design</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <div className="w-10 h-10 rounded-lg bg-success-green/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-success-green" />
                  </div>
                  <span className="text-sm">Live platform demo</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    placeholder="Enter your business email"
                    className="flex-1 bg-background border-border"
                  />
                  <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 group whitespace-nowrap">
                    Book Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                    Schedule Call
                  </Button>
                  <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                    Download Whitepaper
                  </Button>
                  <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                    View Pricing
                  </Button>
                </div>
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