import React from "react";

function Button({ label }) {
  return (
    <button className="border-1px border-yellow py-10px px-5 rounded-full uppercase text-base text-yellow">
      {label}
    </button>
  );
}

export default Button;
