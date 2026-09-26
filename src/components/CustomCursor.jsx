"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.dataset?.cursor === "pointer"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full mix-blend-multiply"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 16),
          y: mousePosition.y - (isHovered ? 28 : 16),
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
          backgroundColor: isHovered ? "rgba(184, 166, 201, 0.45)" : "rgba(101, 71, 127, 0.2)",
          borderColor: isHovered ? "rgba(75, 46, 99, 0.6)" : "rgba(182, 154, 104, 0.5)",
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 300,
          mass: 0.5,
        }}
        style={{
          borderWidth: "1.5px",
          borderStyle: "solid",
        }}
      />

      {/* Tiny inner precision dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 w-2 h-2 rounded-full bg-[#4B2E63]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 450,
        }}
      />
    </>
  );
}
