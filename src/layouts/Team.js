import TeamCard from "components/TeamCard";
import React from "react";

function Team() {
  return (
    <div className="py-32">
      <div className="container">
        <div className="max-w-[1018px] w-full mx-auto z-10 relative">
          <img
            src="images/quote.png"
            className="absolute bottom-[50%] right-[70%] -z-20 opacity-20 w-[30%] rotate-180 pointer-events-none select-none"
            alt=""
          />
          <img
            src="images/quote.png"
            className="absolute top-[50%] left-[70%] -z-20 opacity-20 w-[30%] pointer-events-none select-none"
            alt=""
          />

          <TeamCard />
        </div>
      </div>
    </div>
  );
}

export default Team;
