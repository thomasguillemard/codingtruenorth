import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target, Wrench } from "lucide-react";

const baseDimensions = [
  { icon: TrendingUp, label: "Demand", desc: "How many users want it" },
  { icon: Target, label: "Strategic Fit", desc: "Alignment to goals" },
  { icon: Wrench, label: "Effort", desc: "Implementation cost" },
];

interface ScoringEngineProps {
  isInView: boolean;
  processingTrigger: number;
  onProcessingComplete?: (scores: number[]) => void;
}

const ScoringEngine = ({ isInView, processingTrigger, onProcessingComplete }: ScoringEngineProps) => {
  const [values, setValues] = useState([82, 91, 64]);
  const [isProcessing, setIsProcessing] = useState(false);

  const generateNewScores = useCallback(() => {
    return [
      50 + Math.floor(Math.random() * 45),
      55 + Math.floor(Math.random() * 40),
      40 + Math.floor(Math.random() * 50),
    ];
  }, []);

  useEffect(() => {
    if (processingTrigger === 0) return;

    // Show processing state
    setIsProcessing(true);

    const processTimeout = setTimeout(() => {
      const newScores = generateNewScores();
      setValues(newScores);
      setIsProcessing(false);
      onProcessingComplete?.(newScores);
    }, 1200);

    return () => clearTimeout(processTimeout);
  }, [processingTrigger, generateNewScores, onProcessingComplete]);

  return (
    <motion.div
      className="rounded-xl border border-border bg-card p-6 relative"
      animate={
        isProcessing
          ? { borderColor: "hsl(185 85% 50% / 0.6)" }
          : isInView
            ? { borderColor: "hsl(185 85% 50% / 0.3)" }
            : {}
      }
      transition={{ duration: 0.5 }}
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
          animate={isProcessing ? { opacity: [1, 0.2, 1], scale: [1, 1.5, 1] } : { opacity: [1, 0.3, 1] }}
          transition={{ duration: isProcessing ? 0.4 : 0.8, repeat: Infinity }}
        />
        <motion.span
          className="text-[10px] font-mono uppercase tracking-wider"
          animate={{ color: isProcessing ? "hsl(185 85% 60%)" : "hsl(185 85% 50% / 0.7)" }}
        >
          {isProcessing ? "Recalculating…" : "Processing signals…"}
        </motion.span>
      </motion.div>

      <div className="space-y-4">
        {baseDimensions.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: 2 + i * 0.3, duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <d.icon size={14} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{d.label}</span>
              </div>
              <motion.span
                className="text-xs font-mono text-primary"
                key={`${d.label}-${values[i]}`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {values[i]}%
              </motion.span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{d.desc}</p>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-primary"
                animate={{ width: `${values[i]}%` }}
                transition={{ duration: isProcessing ? 0.6 : 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScoringEngine;
