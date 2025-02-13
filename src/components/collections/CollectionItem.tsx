import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import ArtistInfo from "./ArtistInfo";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ArtistType {
  name: string;
  bio: string;
  instagram: string;
}

interface CollectionItemProps {
  title?: string;
  price?: string;
  imageUrl?: string;
  category?: string;
  artist?: ArtistType;
}

const CollectionItem = ({
  title = "Pièce de Luxe",
  price = "999€",
  imageUrl = "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3",
  category = "Nouvelle Arrivée",
  artist = {
    name: "Artiste Inconnu",
    bio: "Information non disponible",
    instagram: "@6699talz",
  },
}: CollectionItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-[450px] h-[600px] bg-black hover:z-10 relative"
    >
      <Card className="w-full h-full overflow-hidden group cursor-pointer bg-black border-zinc-800 relative">
        <CardContent className="p-0 relative h-full">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="relative w-full h-[500px] overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <motion.img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              style={{
                willChange: "transform",
              }}
            />
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
              }}
            />
            <div className="absolute top-4 left-4 z-10">
              <Badge
                variant="secondary"
                className="bg-white/10 text-white backdrop-blur-sm border-white/20 transition-colors duration-300 group-hover:bg-white/20"
              >
                {category}
              </Badge>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-lg text-white/90">{price}</span>
              <div className="flex gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Découvrir
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-zinc-900/95 text-white border-zinc-800 max-w-4xl backdrop-blur-xl">
                    <div className="grid md:grid-cols-2 gap-8 p-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={imageUrl}
                          alt={title}
                          className="w-full aspect-[3/4] object-cover rounded-lg"
                        />
                      </motion.div>
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div>
                          <h2 className="text-3xl font-serif mb-2">{title}</h2>
                          <p className="text-2xl text-white/90">{price}</p>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl font-serif">Description</h3>
                          <p className="text-zinc-300 leading-relaxed">
                            Cette pièce unique incarne l'essence même de la
                            collection 6699 & TALZ. Fabriquée à la main avec les
                            meilleurs matériaux, elle représente le parfait
                            équilibre entre tradition artisanale et innovation
                            contemporaine.
                          </p>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl font-serif">Détails</h3>
                          <ul className="text-zinc-300 space-y-2">
                            <li>• Matériaux premium sélectionnés</li>
                            <li>• Fabrication artisanale africaine</li>
                            <li>• Édition limitée</li>
                            <li>• Certificat d'authenticité inclus</li>
                          </ul>
                        </div>
                        <div className="flex justify-between items-center pt-6">
                          <ArtistInfo
                            name={artist.name}
                            bio={artist.bio}
                            instagram={artist.instagram}
                          />
                          <Button className="bg-white text-black hover:bg-zinc-200 transition-all duration-300">
                            Réserver
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CollectionItem;
