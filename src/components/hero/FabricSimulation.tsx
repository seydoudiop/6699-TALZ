import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface FabricSimulationProps {
  cursorPosition?: { x: number; y: number };
  intensity?: number;
  color?: string;
}

const FabricSimulation = ({
  cursorPosition = { x: 0, y: 0 },
  intensity = 0.5,
  color = "rgba(255, 255, 255, 0.1)",
}: FabricSimulationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [localCursor, setLocalCursor] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setLocalCursor({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const rippleVariants = {
    initial: {
      scale: 0,
      opacity: 0.8,
    },
    animate: {
      scale: 4,
      opacity: 0,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Fabric mesh simulation */}
      <div className="absolute inset-0 backdrop-blur-sm">
        <motion.div
          className="absolute w-full h-full"
          animate={{
            transform: `rotateX(${(localCursor.y / window.innerHeight) * 10}deg) 
                       rotateY(${(localCursor.x / window.innerWidth) * 10}deg)`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          {/* Grid pattern to simulate fabric texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
        </motion.div>
      </div>

      {/* Interactive ripple effect */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 100,
          height: 100,
          backgroundColor: color,
          left: localCursor.x - 50,
          top: localCursor.y - 50,
        }}
        initial="initial"
        animate="animate"
        variants={rippleVariants}
        key={`${localCursor.x}-${localCursor.y}`}
      />

      {/* Ambient animation layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 60%, rgba(255,255,255,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default FabricSimulation;
