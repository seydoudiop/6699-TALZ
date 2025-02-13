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
      title: "Avant-Garde Jacket",
      price: "$1,299",
      imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
      category: "New Arrival",
    },
    {
      id: "2",
      title: "Designer Pants",
      price: "$899",
      imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
      category: "Featured",
    },
    {
      id: "3",
      title: "Limited Edition Boots",
      price: "$1,499",
      imageUrl: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab",
      category: "Limited",
    },
  ],
}: CollectionGridProps) => {
  return (
    <motion.div
      className="w-full min-h-screen bg-black py-20 px-4 md:px-8 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-white mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Latest Collection
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
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
