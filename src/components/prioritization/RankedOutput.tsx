import { motion } from "framer-motion";
import { TrendingUp, Target, Wrench } from "lucide-react";

const rankedFeatures = [
  { name: "In-app collaboration", demand: 0.92, fit: 0.96, effort: 0.78, confidence: 0.94 },
  { name: "API rate limiting", demand: 0.85, fit: 0.91, effort: 0.82, confidence: 0.87 },
  { name: "Custom report builder", demand: 0.79, fit: 0.84, effort: 0.69, confidence: 0.82 },
  { name: "Slack bot notifications", demand: 0.68, fit: 0.73, effort: 0.88, confidence: 0.71 },
];

interface RankedOutputProps {
  isInView: boolean;
}

const RankedOutput = ({ isInView }: RankedOutputProps) => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="px-6 py-4 border-b border-border flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">3</span>
        <div>
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Ranked Output</h3>
          <p className="text-xs text-muted-foreground">Ship what matters most</p>
        </div>
      </div>
      <div className="divide-y divide-border">
        {rankedFeatures.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, x: 15 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
            transition={{ delay: 3.5 + i * 0.15, duration: 0.4 }}
            className={`px-5 py-3.5 ${i === 0 ? "bg-primary/5" : ""}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs font-mono text-muted-foreground w-4">{i + 1}</span>
                <span className="text-sm font-medium text-foreground truncate">{f.name}</span>
              </div>
              <motion.span
                className="text-sm font-mono font-bold text-primary ml-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 3.8 + i * 0.15 }}
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
      </div>
    </div>
  );
};

export default RankedOutput;
