import GridCard from "components/GridCard";
import React from "react";

function GalleryGrid() {
  return (
    <div className="grid grid-cols-[1fr_.8fr]">
      <GridCard
        img="images/medicins.png"
        title="Prince Neptune - Shopify Plus Development"
      />
      <GridCard
        img="images/fever-men.png"
        title="Prince Neptune - Shopify Development"
      />
      <GridCard
        img="images/nigi.png"
        title="Prince Neptune - Shopify Plus Development"
        className="col-span-2"
      />
    </div>
  );
}

export default GalleryGrid;
