import { motion } from "framer-motion";
import { Zap, Users, Target, TrendingUp } from "lucide-react";

const features = [
  { icon: Users, label: "Feedback Volume", value: "2,847", sub: "signals analyzed" },
  { icon: Target, label: "Business Impact", value: "94%", sub: "alignment score" },
  { icon: TrendingUp, label: "Confidence", value: "0.91", sub: "weighted score" },
  { icon: Zap, label: "Time Saved", value: "12hrs", sub: "per sprint cycle" },
];

const mockFeatures = [
  { name: "In-app collaboration", confidence: 0.94, impact: "High", votes: 312 },
  { name: "API rate limiting dashboard", confidence: 0.87, impact: "High", votes: 245 },
  { name: "Custom report builder", confidence: 0.82, impact: "Medium", votes: 198 },
  { name: "Slack bot notifications", confidence: 0.71, impact: "Medium", votes: 156 },
  { name: "Dark mode support", confidence: 0.58, impact: "Low", votes: 89 },
];

const PrioritizationSection = () => {
  return (
    <section id="prioritization" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-4 block">Prioritization Engine</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Data-driven{" "}
            <span className="text-gradient-primary">confidence scores</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stop debating what to build. TrueNorth weighs user feedback volume against business impact to rank every feature with a confidence score.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <f.icon size={18} />
                </div>
                <div className="text-2xl font-black text-foreground">{f.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{f.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mock ranking table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-border">
              <h3 className="font-semibold text-sm text-foreground">Feature Rankings</h3>
            </div>
            <div className="divide-y divide-border">
              {mockFeatures.map((f, i) => (
                <div key={f.name} className="px-6 py-3.5 flex items-center gap-4">
                  <span className="text-xs font-mono text-muted-foreground w-5">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{f.name}</div>
                    <div className="text-xs text-muted-foreground">{f.votes} signals · {f.impact} impact</div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="h-2 w-20 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${f.confidence * 100}%` }}
                      />
                    </div>
                    <div className="text-xs font-mono text-primary mt-1 text-right">{f.confidence}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrioritizationSection;
