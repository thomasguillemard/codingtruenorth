import { motion } from "framer-motion";

interface PipelineConnectorProps {
  isInView: boolean;
  delay: number;
  direction?: "horizontal" | "vertical";
}

const PipelineConnector = ({ isInView, delay, direction = "horizontal" }: PipelineConnectorProps) => {
  if (direction === "vertical") {
    return (
      <div className="flex justify-center py-2">
        <svg width="2" height="40" viewBox="0 0 2 40">
          <motion.line
            x1="1" y1="0" x2="1" y2="40"
            stroke="hsl(185 85% 50% / 0.5)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.6, delay }}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex items-center justify-center">
      <svg width="60" height="40" viewBox="0 0 60 40" className="overflow-visible">
        <motion.path
          d="M 0 20 C 20 20, 40 20, 60 20"
          fill="none"
          stroke="hsl(185 85% 50% / 0.4)"
          strokeWidth="2"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8, delay }}
        />
        {/* Arrow head */}
        <motion.polygon
          points="54,15 60,20 54,25"
          fill="hsl(185 85% 50% / 0.5)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.6 }}
        />
        {/* Glowing dot traveling along path */}
        <motion.circle
          r="3"
          fill="hsl(185 85% 50%)"
          initial={{ cx: 0, cy: 20, opacity: 0 }}
          animate={isInView ? { cx: [0, 60], cy: 20, opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: 0.8, delay }}
        />
      </svg>
    </div>
  );
};

export default PipelineConnector;
