import React from "react";
import Marquee from "react-fast-marquee";

function FeaturesBanner() {
  return (
    <div className="bg-yellow h-[126px]">
      <Marquee
        gradient={false}
        className="flex items-center h-full"
        speed={50}
        direction="right"
      >
        <div className="mx-4 flex-1">
          <h1 className="font-sora text-dark-black font-semibold text-5xl">
            Shopify.
          </h1>
        </div>
        <div className="mx-4 flex-1">
          <h1 className="font-sora text-dark-black font-semibold text-5xl">
            Klaviyo.
          </h1>
        </div>
        <div className="mx-4 flex-1">
          <h1 className="font-sora text-dark-black font-semibold text-5xl">
            Design.{" "}
          </h1>
        </div>
        <div className="mx-4 flex-1">
          <h1 className="font-sora text-dark-black font-semibold text-5xl">
            Development.
          </h1>
        </div>
        <div className="mx-4 flex-1">
          <h1 className="font-sora text-dark-black font-semibold text-5xl">
            Headless.
          </h1>
        </div>
      </Marquee>
    </div>
  );
}

export default FeaturesBanner;
