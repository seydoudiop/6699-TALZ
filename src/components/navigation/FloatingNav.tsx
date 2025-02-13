import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const translateY = useTransform(scrollY, [0, 100], [-20, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "6699 & TALZ" },
    { path: "/collections", label: "Collections" },
    { path: "/about", label: "À Propos" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Fixed Brand at Top */}
      <motion.div
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link
          to="/"
          className="text-white text-2xl font-serif tracking-widest hover:opacity-80 transition-opacity"
        >
          6699 & TALZ
        </Link>
      </motion.div>

      {/* Side Navigation */}
      <motion.nav
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-end gap-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {navItems.slice(1).map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className="group flex items-center gap-4"
          >
            <span className="text-white/50 text-sm uppercase tracking-widest group-hover:text-white transition-colors">
              {item.label}
            </span>
            <motion.div
              className="w-10 h-[1px] bg-white/30 group-hover:bg-white/80 transition-colors"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: location.pathname === item.path ? 1 : 0.5 }}
              whileHover={{ scaleX: 1 }}
            />
          </Link>
        ))}
      </motion.nav>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-white/20 z-50"
        style={{
          scaleX: useTransform(
            scrollY,
            [0, document.documentElement.scrollHeight - window.innerHeight],
            [0, 1],
          ),
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
};

export default FloatingNav;
