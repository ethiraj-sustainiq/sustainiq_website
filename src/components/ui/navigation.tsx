import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="#" onClick={() => window.location.reload()}>
              <img src="/sustainiq_logo.svg" alt="SustainIQ AI Logo" className="h-14" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Solutions
            </a>
            <a href="#case-studies" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Case Studies
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Technology
            </a>
            <Link to="/blog" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Blog
            </Link>
            <a href="#contact" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Contact
            </a>
          </div>
          
          <a href="mailto:ethiraj.k@sustainiq.ai?subject=Inquiry about SustainIQ AI Platform&body=Hello, I saw your website and I'm interested in learning more about your AI platform. I'd like to schedule a time to discuss an ROI assessment.">
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Get Free Assessment
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;