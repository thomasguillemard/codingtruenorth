import { motion } from "framer-motion";
import {
  MessageSquare, Users, BarChart3, Phone,
  TrendingUp, Target, Wrench,
  ArrowRight, ChevronRight,
} from "lucide-react";

const sources = [
  { icon: MessageSquare, label: "Support tickets", count: "1,204" },
  { icon: Users, label: "User interviews", count: "86" },
  { icon: BarChart3, label: "Analytics events", count: "34K" },
  { icon: Phone, label: "Sales calls", count: "312" },
];

const dimensions = [
  { icon: TrendingUp, label: "Demand", desc: "How many users want it", value: 82 },
  { icon: Target, label: "Strategic fit", desc: "Alignment to business goals", value: 91 },
  { icon: Wrench, label: "Effort estimate", desc: "Implementation complexity", value: 64 },
];

const rankedFeatures = [
  { name: "In-app collaboration", demand: 0.92, fit: 0.96, effort: 0.78, confidence: 0.94 },
  { name: "API rate limiting dashboard", demand: 0.85, fit: 0.91, effort: 0.82, confidence: 0.87 },
  { name: "Custom report builder", demand: 0.79, fit: 0.84, effort: 0.69, confidence: 0.82 },
  { name: "Slack bot notifications", demand: 0.68, fit: 0.73, effort: 0.88, confidence: 0.71 },
];

const PrioritizationSection = () => {
  return (
    <section id="prioritization" className="relative py-24 md:py-32">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-4 block">
            Prioritization Engine
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            From raw signals to{" "}
            <span className="text-gradient-primary">ranked priorities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            TrueNorth ingests feedback from every channel, weighs it against your business objectives, and outputs a confidence-ranked backlog — no spreadsheets, no debates.
          </p>
        </motion.div>

        {/* Three columns */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-4 items-start">
          {/* Column 1 — Signals In */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">1</span>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Signals In</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-5">Every voice, one funnel</p>
            <div className="space-y-3">
              {sources.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-2.5"
                >
                  <s.icon size={16} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground flex-1">{s.label}</span>
                  <span className="text-xs font-mono text-muted-foreground">{s.count}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 2 — Scoring Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-xl border border-border bg-card p-6 relative"
          >
            {/* Connecting arrows (desktop only) */}
            <div className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 text-muted-foreground">
              <ChevronRight size={20} />
            </div>
            <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 text-muted-foreground">
              <ChevronRight size={20} />
            </div>

            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">2</span>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Scoring Engine</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-5">Weighted confidence scoring</p>
            <div className="space-y-4">
              {dimensions.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <d.icon size={14} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{d.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{d.desc}</p>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 3 — Ranked Output */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-xl border border-border bg-card overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-border flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">3</span>
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Ranked Output</h3>
                <p className="text-xs text-muted-foreground">Your prioritized backlog</p>
              </div>
            </div>
            <div className="divide-y divide-border">
              {rankedFeatures.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="px-5 py-3.5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-mono text-muted-foreground w-4">{i + 1}</span>
                      <span className="text-sm font-medium text-foreground truncate">{f.name}</span>
                    </div>
                    <span className="text-sm font-mono font-bold text-primary ml-2">{f.confidence}</span>
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
          </motion.div>
        </div>

        {/* Value statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto"
        >
          Teams using TrueNorth cut prioritization debates by <span className="text-foreground font-semibold">80%</span> and ship the right features <span className="text-foreground font-semibold">3× faster</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default PrioritizationSection;
