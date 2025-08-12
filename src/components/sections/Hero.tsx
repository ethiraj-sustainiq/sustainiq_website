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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 items-center gap-8 py-12 sm:py-16 lg:py-20 min-h-screen-mobile safe-top">
        
        {/* Enhanced copy block with better typography scaling */}
        <div className="space-y-6 sm:space-y-8 lg:col-span-1 lg:max-w-4xl lg:mx-auto text-center">
          
          {/* Main headline with enhanced responsive typography */}
          <h1 className="max-w-[90%] sm:max-w-[85%] mx-auto text-display-2 font-heading font-extrabold tracking-tight leading-[1.05] text-balance">
            Turn Industrial Data Into{" "}
            <span className="text-gradient">Instant, Actionable</span> Intelligence
          </h1>

          {/* Enhanced description with better spacing and readability */}
          <p className="mt-4 sm:mt-6 max-w-[90%] sm:max-w-[65ch] mx-auto text-base sm:text-lg lg:text-xl text-muted-foreground print:text-black leading-relaxed">
            SustainIQ AI connects your real-time equipment data with manuals, procedures, and compliance documents — so you can predict failures, prevent downtime, and stay audit-ready automatically.
          </p>

          {/* Enhanced proof points grid with better mobile handling */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mt-6 sm:mt-8">
            <ProofChip
              icon={TrendingUp}
              label="Downtime Reduction"
              valueClass="text-tech-blue"
              suffix="%"
              to={35}
            />
            <ProofChip
              icon={Shield}
              label="Compliance Accuracy"
              valueClass="text-success-green"
              suffix="%"
              to={95}
            />
            <ProofChip
              icon={Zap}
              label="Avg. Annual Savings"
              valueClass="text-electric-purple"
              prefix="$"
              suffix="M"
              to={2.4}
              decimals={1}
            />
          </div>

          {/* Enhanced CTAs with better touch targets and responsive design */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 print:hidden px-4">
            <a
              className="touch-target w-full sm:w-auto inline-flex h-12 sm:h-14 items-center justify-center rounded-xl bg-brand-green-500 px-6 sm:px-8 text-white font-medium text-sm sm:text-base
                         hover:bg-brand-green-600 active:bg-brand-green-700 transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-600 focus-visible:ring-offset-2"
              href="#contact"
            >
              Get My Free ROI Assessment
            </a>
            <a
              className="touch-target w-full sm:w-auto inline-flex h-12 sm:h-14 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 sm:px-8
                         text-slate-900 hover:bg-slate-50 transition-colors duration-200 font-medium text-sm sm:text-base
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