import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, FileText, Rocket, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [signupCount, setSignupCount] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCount = async () => {
      const { count } = await supabase.
      from("early_access_signups").
      select("*", { count: "exact", head: true });
      if (count !== null) setSignupCount(count);
    };
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.
      from("early_access_signups").
      insert({ email: email.trim().toLowerCase() });
      if (error && error.code !== "23505") throw error;
      setSubmitted(true);
      setSignupCount((prev) => prev !== null ? prev + 1 : prev);
    } catch (err) {
      console.error("Signup error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const roadmapItems = [
  { phase: "Now", label: "Early Access & PRD Review", icon: FileText, active: true },
  { phase: "Q2 2026", label: "Open Beta Launch", icon: Rocket, active: false },
  { phase: "Q3 2026", label: "Full Platform Release", icon: CalendarDays, active: false }];


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-glow" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center">

            {/* Live counter */}
            {signupCount !== null


















            }

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-6">
              Get{" "}
              <span className="text-gradient-warm">Early Access</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Join the waitlist and be among the first PMs to transform from ticket manager to product strategist. Plus, get instant access to our{" "}
              <span className="text-foreground font-medium">free PRD Review Analysis</span>.
            </p>

            {/* Signup form */}
            {!submitted ?
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-16">
                <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 h-12 px-4 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />

                <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary disabled:opacity-60">

                  {submitting ? "Submitting…" : "Get Access"}
                  {!submitting && <ArrowRight size={16} />}
                </button>
              </form> :

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-6 py-3 text-primary font-medium mb-16">

                ✓ You're on the list. We'll be in touch soon.
              </motion.div>
            }
          </motion.div>

          {/* PRD Review Analysis hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-xl mx-auto mb-20">

            <div className="rounded-xl border border-border bg-card p-6 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <FileText size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free PRD Review Analysis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Sign up for early access and get an AI-powered analysis of your PRD—highlighting gaps, vague requirements, and missing success metrics before your team writes a single line of code.
              </p>
              <a
                href="https://waypoint-ad2t.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                Try the MVP now
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="max-w-2xl mx-auto">

            <h2 className="text-2xl font-bold text-center mb-10">Roadmap</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0">
              {roadmapItems.map((item, i) =>
              <div key={item.phase} className="flex items-center gap-4 sm:flex-col sm:gap-3 sm:text-center flex-1">
                  <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  item.active ?
                  "border-primary bg-primary/10 text-primary" :
                  "border-border bg-card text-muted-foreground"}`
                  }>

                    <item.icon size={20} />
                  </div>
                  <div>
                    <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                    item.active ? "text-primary" : "text-muted-foreground"}`
                    }>

                      {item.phase}
                    </span>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </div>
                  {i < roadmapItems.length - 1 &&
                <div className="hidden sm:block flex-1 h-px bg-border mx-4" />
                }
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Decorative */}
        <div className="absolute top-1/4 left-8 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-8 w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </section>

      <Footer />
    </div>);

};

export default EarlyAccess;