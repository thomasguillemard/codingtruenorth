import { motion } from "framer-motion";
import { Search, BarChart3, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    label: "Continuous Discovery",
    description: "Ingest interviews, support tickets, and analytics in real time. TrueNorth synthesizes raw signals into structured insights.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BarChart3,
    label: "AI-Assisted Prioritization",
    description: "Confidence scores weigh user feedback volume against business impact, eliminating gut-feel prioritization.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FileText,
    label: "Spec Generation",
    description: "Auto-generate detailed feature outlines, proposed UI changes, and data models—ready for immediate implementation.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Rocket,
    label: "Handoff to Agents",
    description: "Export agent-ready specifications directly to Cursor, Claude Code, or your preferred AI coding agent.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="relative py-24 md:py-32">
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
            TrueNorth replaces fragmented tools with one continuous pipeline—from raw customer signal to agent-ready spec.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex gap-6 items-start"
              >
                {/* Node */}
                <div className={`relative z-10 flex-shrink-0 h-16 w-16 rounded-xl ${step.bgColor} flex items-center justify-center`}>
                  <step.icon size={24} className={step.color} />
                </div>

                {/* Content */}
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                    <h3 className="text-lg font-bold text-foreground">{step.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
