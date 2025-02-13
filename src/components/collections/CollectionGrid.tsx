import React from "react";
import { motion } from "framer-motion";
import CollectionItem from "./CollectionItem";

interface CollectionGridProps {
  items?: Array<{
    id: string;
    title: string;
    price: string;
    imageUrl: string;
    category: string;
  }>;
}

const CollectionGrid = ({
  items = [
    {
      id: "1",
      title: "Ensemble Agbada Royal",
      price: "899€",
      imageUrl: "https://images.unsplash.com/photo-1549045337-967927d923c0",
      category: "Premium",
      artist: {
        name: "Moussa Diallo",
        bio: "Maître tailleur sénégalais avec 25 ans d'expérience dans la haute couture africaine.",
        instagram: "@moussadiallo_couture",
      },
    },
    {
      id: "2",
      title: "Costume Ankara Moderne",
      price: "1,299€",
      imageUrl: "https://images.unsplash.com/photo-1544734037-f0fe0805b2b5",
      category: "Nouvelle Collection",
      artist: {
        name: "Kwame Mensah",
        bio: "Designer ghanéen fusionnant les motifs traditionnels avec des coupes contemporaines.",
        instagram: "@kwame_fashion",
      },
    },
    {
      id: "3",
      title: "Ensemble Dashiki Prestige",
      price: "799€",
      imageUrl: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd",
      category: "Édition Limitée",
      artist: {
        name: "Aminata Koné",
        bio: "Créatrice malienne spécialisée dans les tissus traditionnels africains.",
        instagram: "@aminata_designs",
      },
    },
    {
      id: "4",
      title: "Boubou Brodé Luxe",
      price: "1,499€",
      imageUrl: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab",
      category: "Sur Mesure",
      artist: {
        name: "Ibrahim Sow",
        bio: "Artisan sénégalais reconnu pour ses broderies complexes et détaillées.",
        instagram: "@ibrahim_couture",
      },
    },
    {
      id: "5",
      title: "Costume Kente Signature",
      price: "2,299€",
      imageUrl: "https://images.unsplash.com/photo-1596939122461-e48c8a8a2d85",
      category: "Collection Exclusive",
      artist: {
        name: "Kofi Addo",
        bio: "Maître artisan ghanéen spécialisé dans le tissage traditionnel Kente.",
        instagram: "@kofi_kente",
      },
    },
    {
      id: "6",
      title: "Ensemble Bazin Prestige",
      price: "1,899€",
      imageUrl: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a",
      category: "Haute Couture",
      artist: {
        name: "Fatou Diop",
        bio: "Créatrice sénégalaise innovante dans le travail du Bazin riche.",
        instagram: "@fatou_bazin",
      },
    },
  ],
}: CollectionGridProps) => {
  return (
    <motion.div
      className="w-full min-h-screen bg-black py-32 px-4 md:px-8 lg:px-12 relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, #111 0%, #000 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-white mb-12 text-center relative"
          style={{
            textShadow: "0 0 20px rgba(255,255,255,0.2)",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Collection Exclusive
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center relative z-10"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
              }}
            >
              <CollectionItem
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                category={item.category}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CollectionGrid;
