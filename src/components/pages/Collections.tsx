import CollectionGrid from "../collections/CollectionGrid";
import MagneticCursor from "../cursor/MagneticCursor";

const Collections = () => {
  return (
    <div className="min-h-screen bg-black">
      <MagneticCursor />
      <CollectionGrid />
    </div>
  );
};

export default Collections;
