import About from "layouts/About";
import FeaturesBanner from "layouts/FeaturesBanner";
import GalleryGrid from "layouts/GalleryGrid";
import Navbar from "layouts/Navbar";
import Quotes from "layouts/Quotes";
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
      <Quotes />
      <About />
    </div>
  );
}

export default App;
