import React from "react";

function SideBySideSection({ reverse = false, desc, img }) {
  return (
    <div className="grid grid-cols-2 gap-12">
      {reverse && (
        <div>
          <img src={img} className="w-full" alt="" />
        </div>
      )}

      <div className="flex items-end">
        <p
          className="font-medium font-sora text-5xl"
          style={{ lineHeight: 1.3 }}
        >
          {desc}
        </p>
      </div>
      {!reverse && (
        <div>
          <img src={img} className="w-full" alt="" />
        </div>
      )}
    </div>
  );
}

export default SideBySideSection;
