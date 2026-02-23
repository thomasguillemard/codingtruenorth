import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Feature factories ship fast and wrong",
    description:
      "Teams with AI coding agents ship 10x faster, but without strategic alignment, they're just building the wrong things at scale.",
  },
  {
    icon: Clock,
    title: "PMs drown in tickets, not insights",
    description:
      "Product managers spend 80% of their time managing backlogs and writing specs instead of understanding what customers actually need.",
  },
  {
    icon: AlertTriangle,
    title: "Gut instinct doesn't scale",
    description:
      "When every feature costs nearly nothing to build, the cost of building the wrong feature becomes the only thing that matters.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            The bottleneck has <span className="text-gradient-primary">shifted</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            In the AI agent era, code practically writes itself. The new competitive advantage is knowing exactly what
            to build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-xl border border-border bg-card p-8 hover:border-primary/30 transition-colors"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <problem.icon size={22} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
