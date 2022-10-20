import React from "react";

function GridCard({ img, title, className }) {
  return (
    <div
      className={`${className} min-h-screen h-full relative overflow-hidden flex items-end justify-center pb-16 z-20`}
    >
      <img
        src={img}
        className="w-full h-full object-cover -z-20 absolute top-0 left-0"
        alt=""
      />

      {title && (
        <div className="py-3 px-5 bg-yellow rounded-full text-2xl text-black font-sora">
          {title}
        </div>
      )}
    </div>
  );
}

export default GridCard;
