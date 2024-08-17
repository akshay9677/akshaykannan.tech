"use client";

import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import ImageSwitch from "public/blog/clip-path/image-switch.svg";
import ImageSwitchLight from "public/blog/clip-path/image-switch-dark.svg";
import ImageSwitchBg from "public/blog/clip-path/image-switch-bg.svg";
import { useTheme } from "@/hooks/useTheme";

const ImageWithMovingLine = () => {
  const [linePos, setLinPos] = useState(200);
  // Create a motion value to track the mouse's x position
  const mouseX = useMotionValue(200);
  const { isDark } = useTheme();
  return (
    <div className="my-2 flex flex-col">
      <pre className="border border-border-primary flex rounded-md bg-container-secondary text-xs">
        {`clip-path: inset(0px 0px 0px ${linePos}px)`}
      </pre>
      <div className="flex items-center justify-center border border-border-secondary rounded-lg bg-container-primary">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
          className="flex w-full"
          onMouseMove={(e) => {
            // Update mouseX with the current horizontal mouse position relative to the image container
            const rect = e.currentTarget.getBoundingClientRect();
            setLinPos(Math.round(e.clientX - rect.left));
            mouseX.set(e.clientX - rect.left);
          }}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            const rect = e.currentTarget.getBoundingClientRect();
            setLinPos(Math.round(touch.clientX - rect.left));
            mouseX.set(touch.clientX - rect.left);
          }}
        >
          {/* Image */}
          <div
            style={{ clipPath: `inset(0px 0px 0px ${linePos}px)` }}
            className="w-full my-10 flex items-center justify-center z-40 bg-container-primary"
          >
            {!isDark ? <ImageSwitchLight /> : <ImageSwitch />}
          </div>
          <div className="w-full my-10 absolute top-0 flex items-center justify-center z-20">
            <ImageSwitchBg />
          </div>

          {/* Moving Vertical Line */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "2px", // Adjust line thickness
              backgroundColor: "var(--sh-keyword)", // Adjust line color
              x: mouseX, // Bind the x position to the mouseX motion value
              boxShadow: "",
              zIndex: 999,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithMovingLine;
