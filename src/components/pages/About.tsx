import { motion } from "framer-motion";
import MagneticCursor from "../cursor/MagneticCursor";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <MagneticCursor />
      <motion.div
        className="container mx-auto px-4 py-20 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-serif mb-12">À Propos de 6699 & TALZ</h1>

        <div className="space-y-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl text-zinc-300 leading-relaxed">
              Chaque pièce signée 6699 & TALZ est une œuvre d'art, conçue avec
              une maîtrise technique irréprochable et une attention méticuleuse
              aux détails. Nos créations allient coupes avant-gardistes,
              matières d'exception et finitions haut de gamme, offrant un
              vestiaire où l'élégance rencontre l'audace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-serif text-white">
              ⚡ Une Mode Qui Ose, Une Attitude Qui Marque
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Chez 6699 & TALZ, la mode est un langage, une signature, une
              identité. Inspirée par la force et l'ambition des nouvelles
              générations, la marque habille celles et ceux qui refusent de
              passer inaperçus. Chaque collection raconte une histoire, où
              tradition et modernité coexistent pour créer une esthétique
              puissante et intemporelle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-serif text-white">
              🚀 Un Engagement Vers l'Excellence & L'Innovation
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Nous repoussons sans cesse les limites de la mode en explorant de
              nouvelles textures, des techniques de coupe révolutionnaires et
              des designs inspirés de l'art et de la culture urbaine. Plus qu'un
              simple label, 6699 & TALZ est un mouvement, une révolution
              vestimentaire portée par une vision novatrice et un désir
              inébranlable d'excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-2xl font-serif text-white">
              🔥 6699 & TALZ – Pour ceux qui transforment leur style en une
              déclaration de puissance et d'élégance. 🔥
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
