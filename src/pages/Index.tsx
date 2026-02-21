import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WorkflowSection from "@/components/WorkflowSection";
import PrioritizationSection from "@/components/PrioritizationSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemSection />
      <WorkflowSection />
      <PrioritizationSection />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
