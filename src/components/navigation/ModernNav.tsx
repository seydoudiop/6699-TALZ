import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ModernNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  const location = useLocation();

  const navItems = [
    { path: "/collections", label: "Collections" },
    { path: "/about", label: "À Propos" },
    { path: "/contact", label: "Contact" },
  ];

  // Background opacity based on scroll
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
          <motion.div
            className="absolute inset-0 backdrop-blur-md"
            style={{
              backgroundColor: `rgba(0, 0, 0, ${bgOpacity.get()})`,
            }}
          />

          <div className="container mx-auto relative">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="relative group">
                <motion.span
                  className="text-2xl font-serif text-white tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  6699 & TALZ
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-px bg-white/50"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-12">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative group"
                  >
                    <motion.span
                      className="text-sm uppercase tracking-widest text-white/70 group-hover:text-white transition-colors"
                      whileHover={{ y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {item.label}
                    </motion.span>
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-px bg-white/50"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: location.pathname === item.path ? 1 : 0,
                      }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
                whileTap={{ scale: 0.9 }}
              >
                <span className="w-5 h-0.5 bg-white mb-1" />
                <span className="w-5 h-0.5 bg-white" />
              </motion.button>
            </div>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-white/20"
            style={{
              scaleX: useTransform(
                scrollY,
                [0, document.documentElement.scrollHeight - window.innerHeight],
                [0, 1],
              ),
              transformOrigin: "left",
            }}
          />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default ModernNav;
