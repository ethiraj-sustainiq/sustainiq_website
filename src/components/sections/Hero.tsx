// Enhanced Hero.tsx with better cross-platform consistency
import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { Shield, Zap, TrendingUp } from "lucide-react";
import {
  motion,
  useReducedMotion,
  MotionConfig,
  useMotionValue,
  animate,
} from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero print:overflow-visible print:bg-white">
      {/* Enhanced decorative floaters with better performance */}
      <div className="pointer-events-none absolute -top-10 left-10 h-24 w-24 animate-float rounded-full bg-tech-blue/20 blur-xl print:hidden will-change-transform" />
      <div
        className="pointer-events-none absolute bottom-0 right-10 h-36 w-36 animate-float rounded-full bg-electric-purple/20 blur-xl print:hidden will-change-transform"
        style={{ animationDelay: "1.2s" }}
      />

      {/* Enhanced container with better responsive handling */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 min-h-screen-mobile safe-top">
        
        {/* Enhanced copy block with better typography scaling */}
       <div className="space-y-8 text-center lg:text-left">

     
        {/* END: Stats Card Block */}  
          
          {/* Main headline with enhanced responsive typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            The AI Platform That{" "}
            <span className="text-gradient">
              {/* This span is ONLY visible on screens smaller than lg (mobile/tablet) */}
              <span className="lg:hidden"> Unifies Operations + Documentation Intelligence</span>
              
              {/* This span is HIDDEN until the screen is lg or wider (desktop) */}
              <span className="hidden lg:inline">
                Unifies<br />Operations + Documentation<br />Intelligence
              </span>
            </span>
          </h1>
          {/* Enhanced description with better spacing and readability */}
          <p className="mt-4 sm:mt-6 max-w-[90%] sm:max-w-[65ch] mx-auto text-base sm:text-lg lg:text-xl text-muted-foreground print:text-black leading-relaxed">
               For industrial leaders in Energy, Oil & Gas, and Manufacturing. We connect your operational data with equipment manuals and procedures to predict failures, automate compliance, and optimize workflows.
          </p>


          {/* Enhanced CTAs with better touch targets and responsive design */}
                  <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              className="touch-target w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl bg-brand-green-500 px-8 lg:px-10 text-white font-medium text-base lg:text-lg
                         hover:bg-brand-green-600 active:bg-brand-green-700 transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-600 focus-visible:ring-offset-2"
              href="#contact"
            >
              Get My Free ROI Assessment
            </a>
            <a
              className="touch-target w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl border border-border bg-white px-8 lg:px-10
                         text-slate-900 hover:bg-slate-50 transition-colors duration-200 font-medium text-base lg:text-lg
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
              href="#case-studies"
            >
              See Real Results
            </a>
          </div>

          {/* Enhanced trust indicators with better mobile typography */}
          <p className="pt-3 sm:pt-4 text-xs sm:text-sm text-muted-foreground text-center px-4">
            Trusted by Fortune 500 companies • Enterprise-grade security • 8-week average deployment
          </p>
        </div>
                 {/* START: Stats Card Block */}
        <div className="lg:justify-self-end">
            <div className="rounded-lg border text-card-foreground shadow-sm p-8 bg-gradient-card border-border shadow-card">
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
        </div>
      </div>
    </section>
  );
}

/* Enhanced ProofChip component with better accessibility and mobile design */
function ProofChip({
  icon: Icon,
  valueClass = "",
  prefix = "",
  suffix = "",
  to,
  decimals = 0,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  valueClass?: string;
  prefix?: string;
  suffix?: string;
  to: number;
  decimals?: number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 rounded-xl border border-border bg-background/90 backdrop-blur-sm p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className={`flex-shrink-0 ${valueClass}`}>
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="leading-tight min-w-0 flex-1">
        <div className={`text-lg sm:text-xl lg:text-2xl font-extrabold ${valueClass}`}>
          <CountUp to={to} decimals={decimals} prefix={prefix} suffix={suffix} />
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

/* Enhanced CountUp with better performance and accessibility */
function CountUp({
  to,
  decimals = 0,
  duration = 1.1,
  prefix = "",
  suffix = "",
}: {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVal(to);
      return;
    }

    const controls = animate(mv, to, {
      duration: duration,
      ease: "easeOut",
    });
    
    const unsub = mv.on("change", (v) => setVal(v));
    
    return () => {
      controls.stop();
      unsub();
    };
  }, [to, mv, duration, prefersReducedMotion]);

  const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();
  return <span>{prefix}{formatted}{suffix}</span>;
}