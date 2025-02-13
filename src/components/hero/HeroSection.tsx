import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FabricSimulation from "./FabricSimulation";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
}

const HeroSection = ({
  title = "6699 & TALZ",
  subtitle = "Luxury Redefined",
  videoUrl = "https://player.vimeo.com/external/459389137.hd.mp4?s=865d2c0c1c44df559e4005487b3c48a64b95efe4&profile_id=175&oauth2_token_id=57447761",
}: HeroSectionProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-50"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Fabric Simulation Layer */}
      <div className="absolute inset-0 z-10">
        <FabricSimulation cursorPosition={cursorPosition} />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-serif mb-6"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 10px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-zinc-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.button
              className="px-8 py-4 text-lg border border-white/30 backdrop-blur-sm
                         hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
