import React from "react";

function MSG({ msg, user = false }) {
  return (
    <div
      className={`p-12 rounded-full relative z-20 w-fit max-w-[1128.5px] ${
        user ? "bg-[#C6C6C6] ml-auto" : "bg-yellow"
      }`}
    >
      {/* <div className="w-[140px] h-[70px] absolute bottom-0 left-[-70px] bg-yellow -z-[20]">
        <div className="absolute top-0 left-0 w-1/2 h-full rounded-br-full bg-dark-black"></div>
      </div> */}

      <h1 className="font-sora font-medium text-dark-black text-5xl">{msg}</h1>
    </div>
  );
}

export default MSG;
