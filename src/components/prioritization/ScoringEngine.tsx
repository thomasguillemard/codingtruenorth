import { motion } from "framer-motion";
import { TrendingUp, Target, Wrench } from "lucide-react";

const dimensions = [
  { icon: TrendingUp, label: "Demand", desc: "How many users want it", value: 82 },
  { icon: Target, label: "Strategic Fit", desc: "Alignment to goals", value: 91 },
  { icon: Wrench, label: "Effort", desc: "Implementation cost", value: 64 },
];

interface ScoringEngineProps {
  isInView: boolean;
}

const ScoringEngine = ({ isInView }: ScoringEngineProps) => {
  return (
    <motion.div
      className="rounded-xl border border-border bg-card p-6 relative"
      animate={isInView ? { borderColor: "hsl(185 85% 50% / 0.3)" } : {}}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">2</span>
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Scoring Engine</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-5">Weighted confidence scoring</p>

      {/* Processing indicator */}
      <motion.div
        className="mb-4 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.3 }}
      >
        <motion.div
          className="h-1.5 w-1.5 rounded-full bg-primary"
          animate={isInView ? { opacity: [1, 0.3, 1] } : {}}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <span className="text-[10px] font-mono text-primary uppercase tracking-wider">Processing signals…</span>
      </motion.div>

      <div className="space-y-4">
        {dimensions.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: 2 + i * 0.3, duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <d.icon size={14} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{d.label}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{d.desc}</p>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${d.value}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + i * 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScoringEngine;
