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
    </div>
  );
}

export default App;
