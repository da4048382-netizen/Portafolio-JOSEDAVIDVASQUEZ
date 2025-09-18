"use client";
import Lottie from "lottie-react";
import codingAvatarAnimation from "@/components/Animations/coding-avatar.json";

export default function CodingAvatar() {
  return (
    <div className="flex justify-center items-center">
      <Lottie 
        animationData={codingAvatarAnimation} 
        loop={true} 
        className="w-[280px] h-[280px] md:w-[350px] md:h-[350px]"
      />
    </div>
  );
}
