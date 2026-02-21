import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      const { error } = await supabase
        .from("early_access_signups")
        .insert({ email: email.trim().toLowerCase() });
      if (error && error.code !== "23505") throw error;
      setSubmitted(true);
    } catch (err) {
      console.error("Signup error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Stop building the{" "}
            <span className="text-gradient-warm">wrong things faster</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">Join the waitlist for early access. Be among the first PMs to transform from ticket manager to product strategist and gain access to our free PRD review analysis.

          </p>

          {!submitted ?
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-6 py-3 text-primary font-medium">

              ✓ You're on the list. We'll be in touch soon.
            </motion.div>
          }

          <p className="text-xs text-muted-foreground mt-6">
            Want a live demo instead?{" "}
            <a href="#" className="text-primary hover:underline">Book a call with our team →</a>
          </p>
        </motion.div>
      </div>
    </section>);

};

export default CTASection;