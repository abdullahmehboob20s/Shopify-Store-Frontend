import Button from "components/Button";
import React from "react";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-[200] h-20 flex items-center">
      <div className="container flex items-center justify-between relative">
        <h1 className="text-[40px] font-bold text-white font-JetBrainsMono">
          100°
        </h1>

        <div className="flex items-center space-x-12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20">
          <a href="/" className="text-base text-white">
            HOME
          </a>
          <a href="/" className="text-base text-white">
            WORK
          </a>
          <a href="/" className="text-base text-white">
            ABOUT
          </a>
          <a href="/" className="text-base text-white">
            CONTACT
          </a>
        </div>

        <Button label="Enquire" />
      </div>
    </div>
  );
}

export default Navbar;
