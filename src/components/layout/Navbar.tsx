import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/collections", label: "Collections" },
    { path: "/about", label: "À Propos" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md border-b border-white/10" />

        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-white text-3xl font-serif tracking-wider hover:text-white/80 transition-colors"
            >
              6699 & TALZ
            </Link>

            <div className="hidden md:flex gap-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative"
                  data-magnetic
                >
                  <span
                    className={`text-sm uppercase tracking-widest ${location.pathname === item.path ? "text-white" : "text-white/70"} group-hover:text-white transition-colors`}
                  >
                    {item.label}
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-px bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: location.pathname === item.path ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-px bg-white"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <motion.div
                  className="w-full h-px bg-white"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 0,
                  }}
                />
                <motion.div
                  className="w-full h-px bg-white"
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                />
                <motion.div
                  className="w-full h-px bg-white"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -8 : 0,
                  }}
                />
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
