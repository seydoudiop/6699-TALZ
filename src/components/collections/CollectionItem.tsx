import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CollectionItemProps {
  title?: string;
  price?: string;
  imageUrl?: string;
  category?: string;
}

const CollectionItem = ({
  title = "Luxury Fashion Item",
  price = "$999",
  imageUrl = "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3",
  category = "New Arrival",
}: CollectionItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-[450px] h-[600px] bg-black"
    >
      <Card className="w-full h-full overflow-hidden group cursor-pointer bg-black border-zinc-800">
        <CardContent className="p-0 relative h-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-[500px] overflow-hidden"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge
                variant="secondary"
                className="bg-black/70 text-white backdrop-blur-sm"
              >
                {category}
              </Badge>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-lg text-white">{price}</span>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CollectionItem;
