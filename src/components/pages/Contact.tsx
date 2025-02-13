import { motion } from "framer-motion";
import MagneticCursor from "../cursor/MagneticCursor";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <MagneticCursor />
      <motion.div
        className="container mx-auto px-4 py-20 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-serif mb-8">Contactez-nous</h1>
        <p className="text-xl text-zinc-300 mb-8">
          Entrez en contact avec notre équipe.
        </p>
        <div className="max-w-md">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-md mb-4"
          />
          <textarea
            placeholder="Votre message"
            rows={4}
            className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-md mb-4"
          />
          <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-zinc-200 transition-colors">
            Envoyer le Message
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
