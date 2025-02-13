import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram } from "lucide-react";

interface ArtistInfoProps {
  name?: string;
  bio?: string;
  email?: string;
  phone?: string;
  instagram?: string;
  imageUrl?: string;
}

const ArtistInfo = ({
  name = "Jean-Paul Gaultier",
  bio = "Créateur de mode visionnaire avec plus de 20 ans d'expérience dans la haute couture.",
  email = "contact@6699talz.com",
  phone = "+33 1 23 45 67 89",
  instagram = "@6699talz",
  imageUrl = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&h=300",
}: ArtistInfoProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-white hover:bg-white/10">
          Contact Créateur
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 text-white border-zinc-800 max-w-2xl">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-serif">{name}</h3>
            <p className="text-zinc-300">{bio}</p>

            <div className="space-y-3 pt-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                {email}
              </a>

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                {phone}
              </a>

              <a
                href={`https://instagram.com/${instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <Instagram size={18} />
                {instagram}
              </a>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtistInfo;
