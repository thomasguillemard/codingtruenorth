import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Target, Wrench } from "lucide-react";

const allFeatures = [
  { name: "In-app collaboration", base: 0.94 },
  { name: "API rate limiting", base: 0.87 },
  { name: "Custom report builder", base: 0.82 },
  { name: "Slack bot notifications", base: 0.71 },
  { name: "SSO integration", base: 0.89 },
  { name: "Bulk CSV export", base: 0.85 },
  { name: "Mobile responsive views", base: 0.78 },
  { name: "Audit logging", base: 0.76 },
];

function generateFeatureScores(engineScores: number[]) {
  // Generate varied scores influenced by engine state
  const factor = (engineScores[0] + engineScores[1] - engineScores[2]) / 200;
  return allFeatures
    .map((f) => {
      const jitter = (Math.random() - 0.5) * 0.15;
      const confidence = Math.min(0.99, Math.max(0.55, f.base + jitter + factor * 0.1));
      const demand = Math.min(0.99, Math.max(0.5, confidence - 0.02 + (Math.random() - 0.5) * 0.1));
      const fit = Math.min(0.99, Math.max(0.5, confidence + 0.02 + (Math.random() - 0.5) * 0.1));
      const effort = Math.min(0.99, Math.max(0.5, 0.7 + (Math.random() - 0.5) * 0.3));
      return {
        name: f.name,
        demand: +demand.toFixed(2),
        fit: +fit.toFixed(2),
        effort: +effort.toFixed(2),
        confidence: +confidence.toFixed(2),
      };
    })
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 4);
}

interface RankedOutputProps {
  isInView: boolean;
  updateTrigger: number;
  engineScores: number[];
}

const RankedOutput = ({ isInView, updateTrigger, engineScores }: RankedOutputProps) => {
  const [rankedFeatures, setRankedFeatures] = useState(() =>
    generateFeatureScores([82, 91, 64])
  );

  useEffect(() => {
    if (updateTrigger === 0) return;
    // Small delay so it feels like output follows engine
    const timeout = setTimeout(() => {
      setRankedFeatures(generateFeatureScores(engineScores));
    }, 400);
    return () => clearTimeout(timeout);
  }, [updateTrigger, engineScores]);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">3</span>
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Ranked Output</h3>
            <p className="text-xs text-muted-foreground">Ship what matters most</p>
          </div>
        </div>
        <motion.div
          className="flex items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3.5 }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-green-500"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-[10px] font-mono text-muted-foreground uppercase">Auto-updating</span>
        </motion.div>
      </div>
      <div className="divide-y divide-border">
        <AnimatePresence mode="popLayout">
          {rankedFeatures.map((f, i) => (
            <motion.div
              key={f.name}
              layout
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ delay: updateTrigger === 0 ? 3.5 + i * 0.15 : 0.1 * i, duration: 0.4 }}
              className={`px-5 py-3.5 ${i === 0 ? "bg-primary/5" : ""}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs font-mono text-muted-foreground w-4">{i + 1}</span>
                  <span className="text-sm font-medium text-foreground truncate">{f.name}</span>
                </div>
                <motion.span
                  className="text-sm font-mono font-bold text-primary ml-2"
                  key={`${f.name}-${f.confidence}`}
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {f.confidence}
                </motion.span>
              </div>
              <div className="flex items-center gap-3 ml-6">
                <div className="flex items-center gap-1">
                  <TrendingUp size={10} className="text-muted-foreground" />
                  <span className="text-[10px] font-mono text-muted-foreground">{f.demand}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target size={10} className="text-muted-foreground" />
                  <span className="text-[10px] font-mono text-muted-foreground">{f.fit}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wrench size={10} className="text-muted-foreground" />
                  <span className="text-[10px] font-mono text-muted-foreground">{f.effort}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RankedOutput;
