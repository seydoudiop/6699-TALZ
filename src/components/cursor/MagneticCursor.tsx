import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticCursorProps {
  strength?: number;
  size?: number;
  color?: string;
  blend?: string;
}

const MagneticCursor = ({
  strength = 0.5,
  size = 20,
  color = "#ffffff",
  blend = "difference",
}: MagneticCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [target, setTarget] = useState<DOMRect | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const target = e.target as HTMLElement;

      // Check if the element is magnetic (has data-magnetic attribute)
      const isMagnetic = target.hasAttribute("data-magnetic");

      if (isMagnetic && !isHovering) {
        const rect = target.getBoundingClientRect();
        setTarget(rect);
        setIsHovering(true);
      } else if (!isMagnetic && isHovering) {
        setTarget(null);
        setIsHovering(false);
      }

      // Calculate cursor position
      if (isHovering && target) {
        const centerX = target.left + target.width / 2;
        const centerY = target.top + target.height / 2;
        const distance = Math.sqrt(
          Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2),
        );
        const maxDistance = Math.max(target.width, target.height);
        const magnetStrength =
          Math.max(0, 1 - distance / maxDistance) * strength;

        const x = clientX + (centerX - clientX) * magnetStrength;
        const y = clientY + (centerY - clientY) * magnetStrength;

        setPosition({ x, y });
      } else {
        setPosition({ x: clientX, y: clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering, strength]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed pointer-events-none z-50"
      animate={{
        x: position.x - size / 2,
        y: position.y - size / 2,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      <motion.div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          mixBlendMode: blend as any,
          filter: "blur(0.5px)",
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${color}`,
          mixBlendMode: blend as any,
        }}
        animate={{
          scale: isHovering ? 1.4 : 1.2,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      />
    </motion.div>
  );
};

export default MagneticCursor;
