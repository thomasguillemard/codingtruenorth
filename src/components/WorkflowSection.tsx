import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, BarChart3, FileText, Rocket } from "lucide-react";
import PipelineConnector from "./prioritization/PipelineConnector";

const steps = [
  {
    icon: Search,
    label: "Continuous Discovery",
    description: "Ingest interviews, support tickets, and analytics in real time. TrueNorth synthesizes raw signals into structured insights.",
    isAccent: false,
  },
  {
    icon: BarChart3,
    label: "AI-Assisted Prioritization",
    description: "Confidence scores weigh user feedback volume against business impact, eliminating gut-feel prioritization.",
    isAccent: false,
  },
  {
    icon: FileText,
    label: "Spec Generation",
    description: "Auto-generate detailed feature outlines, proposed UI changes, and data models—ready for immediate implementation.",
    isAccent: false,
  },
  {
    icon: Rocket,
    label: "Handoff to Agents",
    description: "Export agent-ready specifications directly to Cursor, Claude Code, or your preferred AI coding agent.",
    isAccent: true,
  },
];

const StepCard = ({ step, index, delay, isInView }: { step: typeof steps[0]; index: number; delay: number; isInView: boolean }) => {
  const Icon = step.icon;
  const accentClass = step.isAccent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-xl border p-6 bg-card text-card-foreground flex flex-col items-center text-center ${
        accentClass ? "border-accent/40 shadow-[0_0_20px_hsl(var(--accent)/0.15)]" : "border-border"
      }`}
    >
      <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center ${
        accentClass ? "bg-accent/10" : "bg-primary/10"
      }`}>
        <Icon size={22} className={accentClass ? "text-accent" : "text-primary"} />
      </div>
      <div className={`mb-3 h-7 w-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
        accentClass ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"
      }`}>
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="text-sm font-bold text-foreground mb-2">{step.label}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
    </motion.div>
  );
};

const WorkflowSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section id="workflow" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-4 block">The New PM Workflow</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            From ticket manager to{" "}
            <span className="text-gradient-primary">product strategist</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            TrueNorth replaces fragmented tools with one continuous pipeline from raw customer signal to agent-ready spec.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-0 items-center max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <>
              <StepCard key={step.label} step={step} index={i} delay={i * 0.3} isInView={isInView} />
              {i < steps.length - 1 && (
                <PipelineConnector key={`conn-${i}`} isInView={isInView} delay={i * 0.3 + 0.15} />
              )}
            </>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden space-y-0 max-w-sm mx-auto">
          {steps.map((step, i) => (
            <div key={step.label}>
              <StepCard step={step} index={i} delay={i * 0.3} isInView={isInView} />
              {i < steps.length - 1 && (
                <PipelineConnector isInView={isInView} delay={i * 0.3 + 0.15} direction="vertical" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
