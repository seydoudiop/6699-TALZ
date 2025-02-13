import React from "react";
import HeroSection from "./hero/HeroSection";
import CollectionGrid from "./collections/CollectionGrid";
import MagneticCursor from "./cursor/MagneticCursor";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Custom cursor */}
      <MagneticCursor />

      {/* Hero Section */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* Collection Grid Section */}
      <section className="relative">
        <CollectionGrid
          items={[
            {
              id: "1",
              title: "Avant-Garde Jacket",
              price: "$1,299",
              imageUrl:
                "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
              category: "New Arrival",
            },
            {
              id: "2",
              title: "Designer Pants",
              price: "$899",
              imageUrl:
                "https://images.unsplash.com/photo-1509631179647-0177331693ae",
              category: "Featured",
            },
            {
              id: "3",
              title: "Limited Edition Boots",
              price: "$1,499",
              imageUrl:
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab",
              category: "Limited",
            },
            {
              id: "4",
              title: "Signature Collection Dress",
              price: "$2,199",
              imageUrl:
                "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
              category: "Signature",
            },
            {
              id: "5",
              title: "Designer Accessories",
              price: "$599",
              imageUrl:
                "https://images.unsplash.com/photo-1611923134239-b9be5816e23f",
              category: "Accessories",
            },
            {
              id: "6",
              title: "Luxury Handbag",
              price: "$3,499",
              imageUrl:
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
              category: "Premium",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default Home;
