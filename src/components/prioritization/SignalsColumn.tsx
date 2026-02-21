import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Users, BarChart3, Phone, Bug, Lightbulb, Globe, Mail } from "lucide-react";

const allSignals = [
  { icon: MessageSquare, label: "JIRA-1042: Users can't export CSV", tag: "Jira" },
  { icon: Users, label: "Dark mode requests (47 threads)", tag: "Support" },
  { icon: BarChart3, label: "Dashboard bounce rate +18%", tag: "Analytics" },
  { icon: Phone, label: "Enterprise client needs SSO", tag: "Sales" },
  { icon: Bug, label: "JIRA-2187: Timeout on large imports", tag: "Jira" },
  { icon: Lightbulb, label: "Mobile app request (132 votes)", tag: "Feedback" },
  { icon: Globe, label: "API latency spike in EU region", tag: "Analytics" },
  { icon: Mail, label: "Prospect requires SAML integration", tag: "Sales" },
  { icon: Users, label: "Onboarding drop-off at step 3", tag: "Support" },
  { icon: BarChart3, label: "Search usage up 240% this month", tag: "Analytics" },
  { icon: MessageSquare, label: "JIRA-3301: Webhook retry failures", tag: "Jira" },
  { icon: Phone, label: "Deal blocked: needs audit logging", tag: "Sales" },
];

interface SignalsColumnProps {
  isInView: boolean;
  onSignalChange?: () => void;
}

const SignalsColumn = ({ isInView, onSignalChange }: SignalsColumnProps) => {
  const [visibleSignals, setVisibleSignals] = useState(allSignals.slice(0, 4));
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // After initial animation completes, start cycling signals
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleSignals((prev) => {
          // Pick a random slot to replace
          const slotIndex = Math.floor(Math.random() * 4);
          // Pick a signal not currently visible
          const currentLabels = new Set(prev.map((s) => s.label));
          const available = allSignals.filter((s) => !currentLabels.has(s.label));
          if (available.length === 0) return prev;
          const newSignal = available[Math.floor(Math.random() * available.length)];
          const next = [...prev];
          next[slotIndex] = newSignal;
          return next;
        });
        setCycleKey((k) => k + 1);
        onSignalChange?.();
      }, 3500);

      return () => clearInterval(interval);
    }, 2500); // Wait for initial animation to finish

    return () => clearTimeout(startDelay);
  }, [isInView, onSignalChange]);

  return (
    <div className="rounded-xl border border-border bg-card p-6 relative">
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">1</span>
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Raw Signals</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-5">Every voice, one funnel</p>
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {visibleSignals.map((s, i) => (
            <motion.div
              key={s.label}
              layout
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30, scale: 0.9 }}
              transition={{ duration: 0.4, delay: cycleKey === 0 ? i * 0.15 : 0 }}
              className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2.5 border border-border/50"
            >
              <s.icon size={14} className="text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono text-primary/70">{s.tag}</span>
                <p className="text-sm text-foreground truncate">{s.label}</p>
              </div>
              <motion.span
                className="h-2 w-2 rounded-full bg-primary shrink-0"
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Live indicator */}
      <motion.div
        className="absolute top-4 right-4 flex items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-green-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-[10px] font-mono text-muted-foreground uppercase">Live</span>
      </motion.div>
    </div>
  );
};

export default SignalsColumn;
