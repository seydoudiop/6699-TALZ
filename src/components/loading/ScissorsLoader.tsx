import { motion } from "framer-motion";

const ScissorsLoader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Scissors Animation */}
        <motion.div
          className="relative"
          animate={{
            rotate: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Scissors SVG */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M6 9C6 9 9 6 11 6C13 6 14 7 14 8C14 9 13 10 11 10C9 10 6 7 6 7"
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M6 15C6 15 9 18 11 18C13 18 14 17 14 16C14 15 13 14 11 14C9 14 6 17 6 17"
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle cx="6" cy="8" r="2" />
            <motion.circle cx="6" cy="16" r="2" />
          </svg>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="mt-8 text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h2 className="text-2xl font-serif mb-2">6699 & TALZ</h2>
          <p className="text-sm uppercase tracking-widest">
            Maison de Couture Africaine
          </p>
        </motion.div>

        {/* Thread Animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[200px] h-[1px] bg-white/30 -translate-x-1/2 -translate-y-1/2 -z-10"
          animate={{
            scaleX: [1, 0.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default ScissorsLoader;
