// components/CodingAnimation.tsx
"use client";

import React from "react";
import Lottie from "lottie-react";
import codingAnimation from "@/components/animations/coding.json";

const CodingAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie
        animationData={codingAnimation}
        loop
        autoplay
        className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
      />
    </div>
  );
};

export default CodingAnimation;
