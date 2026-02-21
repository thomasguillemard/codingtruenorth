import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle, BarChart3 } from "lucide-react";

const mockScoreItems = [
  { label: "Problem clarity", score: "Weak", icon: XCircle, color: "text-destructive" },
  { label: "Success metrics", score: "Missing", icon: XCircle, color: "text-destructive" },
  { label: "User segmentation", score: "Vague", icon: AlertTriangle, color: "text-accent" },
  { label: "Technical feasibility", score: "Strong", icon: CheckCircle2, color: "text-primary" },
];

const PRDReviewSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 mb-6">
              <AlertTriangle size={12} className="text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Free Tool</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
              Does your product idea{" "}
              <span className="text-gradient-warm">actually suck?</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Most PRDs are filled with vague requirements, missing metrics, and wishful thinking.
              Our AI tears yours apart—then tells you exactly how to fix it.
            </p>

            <p className="text-sm text-muted-foreground mb-8">
              Get a brutally honest score on clarity, feasibility, and market fit.{" "}
              <span className="text-foreground font-medium">100% free. No BS.</span>
            </p>

            <Link
              to="/prd-review"
              className="inline-flex h-12 px-8 items-center gap-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-accent"
            >
              Roast My PRD
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Mock scorecard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-destructive/10">
                  <BarChart3 size={20} className="text-destructive" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">PRD Score</p>
                  <p className="text-xs text-muted-foreground">AI-Powered Analysis</p>
                </div>
                <div className="ml-auto">
                  <span className="text-3xl font-black text-destructive">34</span>
                  <span className="text-sm text-muted-foreground font-medium">/100</span>
                </div>
              </div>

              <div className="h-2 rounded-full bg-muted mb-6 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "34%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-full rounded-full bg-gradient-to-r from-destructive to-accent"
                />
              </div>

              <div className="space-y-3">
                {mockScoreItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <div className="flex items-center gap-1.5">
                      <item.icon size={14} className={item.color} />
                      <span className={`text-sm font-semibold ${item.color}`}>{item.score}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center italic">
                "Your PRD has 3 critical gaps. Here's how to fix them…"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PRDReviewSection;
