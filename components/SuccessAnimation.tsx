"use client";
import Lottie from "lottie-react";

import { useTheme } from "next-themes";

import animationData from "@/public/animations/ssuccess_3-light.json";
import { useEffect, useState } from "react";

export const SuccessAnimation = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <div className={isDark ? "filter brightness-0 invert" : ""}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="w-12 h-12"
      />
    </div>
  );
};
