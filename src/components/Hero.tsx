import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="container relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-medium text-primary">Now accepting early access requests</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] mb-6">
            Coding is instant.{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-warm">Building the wrong thing</span>{" "}
            <br className="hidden sm:block" />
            is fatal.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            TrueNorth is the AI-native product management platform that answers the hardest question in modern software:{" "}
            <span className="text-foreground font-medium">"What do we build next, and why?"</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex h-12 px-8 items-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary"
            >
              Get Early Access
              <ArrowRight size={16} />
            </a>
            <a
              href="#workflow"
              className="inline-flex h-12 px-8 items-center gap-2 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              See How It Works
            </a>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-8 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-8 w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>
    </section>
  );
};

export default Hero;
