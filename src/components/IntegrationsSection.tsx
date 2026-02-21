import { motion } from "framer-motion";

const integrations = [
  { name: "Figma", description: "Import designs & specs", icon: "🎨" },
  { name: "Jira", description: "Sync backlogs & sprints", icon: "📋" },
  { name: "GitHub", description: "Track repos & PRs", icon: "🐙" },
  { name: "Cursor", description: "Hand off specs to agents", icon: "⚡" },
  { name: "Notion", description: "Sync docs & wikis", icon: "📝" },
  { name: "Claude", description: "AI-powered spec review", icon: "🤖" },
  { name: "Slack", description: "Real-time notifications", icon: "💬" },
  { name: "Intercom", description: "Ingest support tickets", icon: "🎧" },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-4 block">
            Integrations
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Plugs into your <span className="text-gradient-primary">existing stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            TrueNorth connects to the tools your team already uses without painful migration required.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {integrations.map((int, i) => (
            <motion.div
              key={int.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 text-center hover:border-primary/30 transition-colors group"
            >
              <div className="text-2xl mb-3">{int.icon}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{int.name}</div>
              <div className="text-xs text-muted-foreground">{int.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
