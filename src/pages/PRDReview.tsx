import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  BarChart3,
  Target,
  Users,
  Lightbulb,
  TrendingUp } from
"lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const analysisAreas = [
{
  icon: Target,
  title: "Problem Definition",
  description:
  "Is the problem real, specific, and worth solving? Or are you building a solution looking for a problem?"
},
{
  icon: Users,
  title: "User Segmentation",
  description: "Do you actually know who your user is? Vague personas = vague products."
},
{
  icon: BarChart3,
  title: "Success Metrics",
  description: "If you can't measure it, you can't prove it worked. Most PRDs skip this entirely."
},
{
  icon: Lightbulb,
  title: "Solution Clarity",
  description: "Is the proposed solution concrete enough to build, or a wish list wrapped in bullet points?"
},
{
  icon: TrendingUp,
  title: "Market Viability",
  description: "Does the market actually want this? We check competitive gaps and positioning."
},
{
  icon: AlertTriangle,
  title: "Risk & Assumptions",
  description: "Every PRD hides assumptions. We surface them so you can validate before you build."
}];


const PRDReviewPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-glow" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center">

            




            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-6">
              Find out why your <br className="hidden sm:block" />
              product idea <span className="text-gradient-warm">sucks</span>
              <br className="hidden sm:block" />
              <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl">(and how to fix it)</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Submit your product concept and get a brutally honest AI-powered analysis that scores your product spec on
              clarity, feasibility, and market fit.{" "}
              <span className="text-foreground font-medium">Completely free. No fluff.</span>
            </p>

            <a
              href="https://waypoint-ad2t.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 px-8 items-center gap-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-accent">

              Get your free product concept review
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <div className="absolute top-1/4 left-8 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-8 w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-float"
          style={{ animationDelay: "3s" }} />

      </section>

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-black mb-4">
              How it <span className="text-gradient-primary">works</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Three steps to a PRD that doesn't make engineers cry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
            {
              step: "01",
              title: "Submit your PRD",
              desc: "Paste your product spec, brief, or even a rough idea. We've seen it all."
            },
            {
              step: "02",
              title: "AI tears it apart",
              desc: "Our engine analyzes clarity, metrics, risks, and market fit in seconds."
            },
            {
              step: "03",
              title: "Get your score & fixes",
              desc: "Receive a detailed scorecard with specific, actionable improvements."
            }].
            map((item, i) =>
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center">

                <span className="text-5xl font-black text-primary/20 block mb-3">{item.step}</span>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* What we analyze */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-black mb-4">
              What we <span className="text-gradient-warm">analyze</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Six dimensions that separate great PRDs from expensive disasters.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {analysisAreas.map((area, i) =>
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/20 transition-colors">

                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-4">
                  <area.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default PRDReviewPage;