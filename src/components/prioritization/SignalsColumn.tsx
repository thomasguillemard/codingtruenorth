import { motion } from "framer-motion";
import { MessageSquare, Users, BarChart3, Phone } from "lucide-react";

const signals = [
  { icon: MessageSquare, label: "JIRA-1042: Users can't export CSV", tag: "Jira" },
  { icon: Users, label: "Dark mode requests (47 threads)", tag: "Support" },
  { icon: BarChart3, label: "Dashboard bounce rate +18%", tag: "Analytics" },
  { icon: Phone, label: "Enterprise client needs SSO", tag: "Sales" },
];

interface SignalsColumnProps {
  isInView: boolean;
}

const SignalsColumn = ({ isInView }: SignalsColumnProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6 relative">
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">1</span>
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Raw Signals</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-5">Every voice, one funnel</p>
      <div className="space-y-3">
        {signals.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2.5 border border-border/50"
          >
            <s.icon size={14} className="text-primary shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-xs font-mono text-primary/70">{s.tag}</span>
              <p className="text-sm text-foreground truncate">{s.label}</p>
            </div>
            {/* Pulsing dot */}
            <motion.span
              className="h-2 w-2 rounded-full bg-primary shrink-0"
              animate={isInView ? { opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SignalsColumn;
