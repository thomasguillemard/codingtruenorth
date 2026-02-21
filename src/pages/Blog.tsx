import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "stop-building-wrong-things-faster",
    title: "Stop Building the Wrong Things Faster",
    excerpt: "AI coding agents have made engineering 10x faster. But speed without direction is just expensive chaos. Here's how the best product teams are adapting.",
    date: "Feb 18, 2026",
    readTime: "6 min",
    tag: "Strategy",
  },
  {
    slug: "death-of-the-ticket-manager",
    title: "The Death of the Ticket Manager PM",
    excerpt: "The PM role is undergoing its biggest transformation since Agile. If you're still writing Jira tickets, you're already obsolete.",
    date: "Feb 12, 2026",
    readTime: "8 min",
    tag: "Thought Leadership",
  },
  {
    slug: "continuous-discovery-at-scale",
    title: "Continuous Discovery at Scale with AI",
    excerpt: "How TrueNorth processes thousands of customer signals daily to surface the insights that actually matter for your roadmap.",
    date: "Feb 5, 2026",
    readTime: "5 min",
    tag: "Product",
  },
  {
    slug: "confidence-scores-explained",
    title: "Confidence Scores: The End of Gut-Feel Prioritization",
    excerpt: "A deep dive into how weighted scoring models can replace intuition-based roadmapping with data-driven conviction.",
    date: "Jan 28, 2026",
    readTime: "7 min",
    tag: "Engineering",
  },
];

const Blog = () => {
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
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors cursor-pointer"
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
                  <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
