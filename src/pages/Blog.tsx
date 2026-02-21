import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronDown } from "lucide-react";

const posts = [
  {
    slug: "stop-building-wrong-things-faster",
    title: "Stop building the wrong things faster",
    excerpt: "AI coding agents have made engineering 10x faster. But speed without direction is just expensive chaos. Here's how the best product teams are adapting.",
    date: "Feb 18, 2026",
    readTime: "6 min",
    tag: "Strategy",
    content: `The promise of AI-powered development is intoxicating: ship features in hours instead of weeks. But here's the uncomfortable truth — most product teams are now building the wrong things at unprecedented speed.\n\nWhen engineering velocity was the bottleneck, slow shipping acted as a natural filter. Teams had to be deliberate about what made it into a sprint. Now that constraint is gone, and the floodgates are open. Feature factories are churning out capabilities nobody asked for, driven by the dopamine hit of "look how fast we shipped."\n\nThe best product teams have realized that the new bottleneck isn't building — it's deciding what to build. They're investing heavily in continuous discovery, customer signal aggregation, and data-driven prioritization. The winners in this new era won't be the fastest coders. They'll be the clearest thinkers.`,
  },
  {
    slug: "death-of-the-ticket-manager",
    title: "The death of the ticket manager PM",
    excerpt: "The PM role is undergoing its biggest transformation since Agile. If you're still writing Jira tickets, you're already obsolete.",
    date: "Feb 12, 2026",
    readTime: "8 min",
    tag: "Thought Leadership",
    content: `For the last decade, the product manager's day has been dominated by a single activity: writing tickets. User stories, acceptance criteria, edge cases, definition of done — an endless conveyor belt of structured documentation that engineers would then interpret and implement.\n\nAI coding agents have obliterated this workflow. When an agent can take a high-level product spec and generate working code in minutes, the meticulous ticket-writing PM becomes a bottleneck rather than an enabler. The new PM is a strategist, a customer whisperer, and a prioritization engine.\n\nThe PMs who thrive will be those who can synthesize thousands of customer signals into clear product direction, who can articulate the "why" so compellingly that both humans and AI agents can execute autonomously. The ticket is dead. Long live the product vision.`,
  },
  {
    slug: "continuous-discovery-at-scale",
    title: "Continuous discovery at scale with AI",
    excerpt: "How TrueNorth processes thousands of customer signals daily to surface the insights that actually matter for your roadmap.",
    date: "Feb 5, 2026",
    readTime: "5 min",
    tag: "Product",
    content: `Traditional continuous discovery relies on a PM manually conducting interviews, synthesizing notes, and spotting patterns. It works — but it doesn't scale. Most teams can process maybe 10-20 customer conversations per week before hitting cognitive overload.\n\nTrueNorth approaches this differently. By ingesting signals from support tickets, sales calls, NPS responses, social mentions, and product analytics simultaneously, our AI engine processes thousands of data points daily. It clusters related feedback, identifies emerging themes, and surfaces opportunities ranked by potential impact.\n\nThe result isn't replacing human judgment — it's augmenting it. PMs spend less time hunting for insights and more time validating and acting on them. Discovery becomes a continuous, always-on process rather than a periodic ritual squeezed between sprint ceremonies.`,
  },
  {
    slug: "confidence-scores-explained",
    title: "Confidence scores: the end of gut-feel prioritization",
    excerpt: "A deep dive into how weighted scoring models can replace intuition-based roadmapping with data-driven conviction.",
    date: "Jan 28, 2026",
    readTime: "7 min",
    tag: "Engineering",
    content: `Every PM has been in that meeting. The one where the loudest voice in the room wins the roadmap debate. Where the HiPPO (Highest Paid Person's Opinion) overrides weeks of customer research. Where "I have a feeling about this" trumps data.\n\nConfidence scores change the game entirely. By assigning weighted values to multiple input signals — customer demand volume, revenue impact estimates, strategic alignment, technical feasibility, and competitive urgency — you create a composite score that represents collective intelligence rather than individual intuition.\n\nThe magic isn't in the math. It's in the transparency. When every stakeholder can see exactly why Feature A scored higher than Feature B, roadmap debates transform from political battles into productive discussions about which input weights to adjust. Gut feel doesn't disappear — it becomes one calibrated input among many.`,
  },
];

const Blog = () => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggle = (slug: string) =>
    setExpandedSlug((prev) => (prev === slug ? null : slug));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <h1 className="text-3xl md:text-5xl font-black mb-4">Blog</h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">Thought leadership on the future of product management in the age of AI.</p>

          <div className="grid gap-6">
            {posts.map((post, i) => {
              const isExpanded = expandedSlug === post.slug;
              return (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group rounded-xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors cursor-pointer"
                  onClick={() => toggle(post.slug)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{post.tag}</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="text-xs text-muted-foreground">· {post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border mt-6 pt-6">
                          {post.content.split("\n\n").map((para, j) => (
                            <p key={j} className="text-sm text-muted-foreground/90 leading-relaxed mb-4 last:mb-0">
                              {para}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
