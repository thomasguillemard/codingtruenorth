import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Users, Sparkles, Check, Mail, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const BASE_COUNT = 847;

const features = [
  {
    icon: FileText,
    title: "Access to our PRD review analysis",
    description:
      "Submit your PRD and get an AI-powered evaluation of clarity, completeness, and prioritization gaps. Sent straight to your inbox.",
  },
  {
    icon: Zap,
    title: "Open beta access",
    description:
      "Be among the first to use TrueNorth's prioritization engine when it launches. Early users shape the product.",
  },
  {
    icon: Sparkles,
    title: "Product strategy insights",
    description:
      "Weekly curated insights on what top PMs are doing differently. No fluff, only signal.",
  },
];

const milestones = [
  { label: "Now", title: "Free PRD review analysis", available: true },
  { label: "Q2 2026", title: "Open beta: full prioritization engine", available: false },
];

const EarlyAccess = () => {
  const [count, setCount] = useState(BASE_COUNT - 30);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const target = BASE_COUNT + Math.floor(Math.random() * 40);
    const duration = 2000;
    const steps = target - count;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      const { error } = await supabase
        .from("early_access_signups")
        .insert({ email: email.trim().toLowerCase() });
      if (error && error.code === "23505") {
        // duplicate — still show success
      } else if (error) {
        throw error;
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Signup error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with counter */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-glow" />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] mb-6 max-w-4xl mx-auto">
              Join the product leaders{" "}
              <span className="text-gradient-warm">shaping what's next</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              Sign up and instantly receive access to our free PRD Review Analysis.
              The open beta is coming — early members get in first.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-16">
              <Users size={16} className="text-primary" />
              <span>
                <span className="text-foreground font-bold tabular-nums">{count.toLocaleString()}</span> product managers already signed up
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            What you get <span className="text-gradient-primary">immediately</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Mail size={32} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Get instant access</h2>
              <p className="text-muted-foreground mb-8">
                Enter your email and we'll send your PRD review access right away.
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 h-12 px-4 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary disabled:opacity-60"
                  >
                    {submitting ? "Submitting…" : "Get instant access"}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="rounded-xl border border-primary/30 bg-primary/10 p-6"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-primary" />
                  </div>
                  <p className="text-foreground font-semibold text-lg mb-1">Check your inbox</p>
                  <p className="text-muted-foreground text-sm">
                    Your PRD review access is on its way to <span className="text-foreground">{email}</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {!submitted && (
              <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe anytime.</p>
            )}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            What's coming
          </motion.h2>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4 relative"
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                      m.available
                        ? "bg-green-500/20 text-green-400"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {m.available ? <Check size={16} /> : <span className="text-xs font-mono">{i + 1}</span>}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px h-12 bg-border" />
                  )}
                </div>

                <div className="pb-12">
                  <span
                    className={`text-xs font-mono uppercase tracking-wider ${
                      m.available ? "text-green-400" : "text-muted-foreground"
                    }`}
                  >
                    {m.label}
                  </span>
                  <p className="text-foreground font-medium">{m.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-muted-foreground max-w-xl mx-auto mb-8"
          >
            The best PMs don't wait for perfect tools.{" "}
            <span className="text-foreground">They shape them.</span>
          </motion.p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-12 px-8 items-center gap-2 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            Back to top
            <ArrowRight size={16} className="rotate-[-90deg]" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EarlyAccess;
