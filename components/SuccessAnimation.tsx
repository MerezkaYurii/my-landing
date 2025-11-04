"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";

import darkSuccess from "@/public/animations/success_3-dark.json";
import lightSuccess from "@/public/animations/success_3-indigo.json";
import { useEffect, useRef } from "react";

export const SuccessAnimation = () => {
  const lightRef = useRef<LottieRefCurrentProps | null>(null);
  const darkRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (lightRef.current) lightRef.current.setSpeed(0.5);
    if (darkRef.current) darkRef.current.setSpeed(0.5);
  }, []);

  return (
    <div className="relative w-12 h-12">
      {/* Светлая тема */}
      <div className="dark:hidden">
        <Lottie
          lottieRef={lightRef}
          animationData={lightSuccess}
          loop
          autoplay
          className="w-12 h-12"
        />
      </div>

      {/* Тёмная тема */}
      <div className="hidden dark:block">
        <Lottie
          lottieRef={darkRef}
          animationData={darkSuccess}
          loop
          autoplay
          className="w-12 h-12"
        />
      </div>
    </div>
  );
};
