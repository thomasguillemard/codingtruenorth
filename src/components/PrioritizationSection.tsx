import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import SignalsColumn from "./prioritization/SignalsColumn";
import ScoringEngine from "./prioritization/ScoringEngine";
import RankedOutput from "./prioritization/RankedOutput";
import PipelineConnector from "./prioritization/PipelineConnector";

const PrioritizationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [processingTrigger, setProcessingTrigger] = useState(0);
  const [outputTrigger, setOutputTrigger] = useState(0);
  const [engineScores, setEngineScores] = useState([82, 91, 64]);

  const handleSignalChange = useCallback(() => {
    setProcessingTrigger((t) => t + 1);
  }, []);

  const handleProcessingComplete = useCallback((scores: number[]) => {
    setEngineScores(scores);
    setOutputTrigger((t) => t + 1);
  }, []);

  return (
    <section id="prioritization" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-4 block">
            Prioritization Engine
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            From raw signals to <span className="text-gradient-primary">ranked priorities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            TrueNorth ingests feedback from every channel, weighs it against your business objectives + customer
            profiles, and outputs a confidence-ranked backlog. No more prioritization spreadsheets, no more debates.
          </p>
        </motion.div>

        {/* Desktop: horizontal pipeline */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 items-start">
          <SignalsColumn isInView={isInView} onSignalChange={handleSignalChange} />
          <PipelineConnector isInView={isInView} delay={1.0} />
          <ScoringEngine
            isInView={isInView}
            processingTrigger={processingTrigger}
            onProcessingComplete={handleProcessingComplete}
          />
          <PipelineConnector isInView={isInView} delay={3.2} />
          <RankedOutput isInView={isInView} updateTrigger={outputTrigger} engineScores={engineScores} />
        </div>

        {/* Mobile: vertical pipeline */}
        <div className="lg:hidden space-y-0">
          <SignalsColumn isInView={isInView} onSignalChange={handleSignalChange} />
          <PipelineConnector isInView={isInView} delay={1.0} direction="vertical" />
          <ScoringEngine
            isInView={isInView}
            processingTrigger={processingTrigger}
            onProcessingComplete={handleProcessingComplete}
          />
          <PipelineConnector isInView={isInView} delay={3.2} direction="vertical" />
          <RankedOutput isInView={isInView} updateTrigger={outputTrigger} engineScores={engineScores} />
        </div>

        {/* Value statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 4.5, duration: 0.6 }}
          className="flex items-center justify-center gap-12 mt-16 whitespace-nowrap"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Prioritization debates cut by</span>
            <span className="text-2xl font-black text-primary">80%</span>
          </div>
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Ship the right features</span>
            <span className="text-2xl font-black text-primary">3× faster</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrioritizationSection;
