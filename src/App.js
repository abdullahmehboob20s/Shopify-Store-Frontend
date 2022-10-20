import FeaturesBanner from "layouts/FeaturesBanner";
import GalleryGrid from "layouts/GalleryGrid";
import Navbar from "layouts/Navbar";
import React from "react";
import Hero from "./layouts/Hero";

function App() {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <FeaturesBanner />
      <GalleryGrid />
    </div>
  );
}

export default App;
