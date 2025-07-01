"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "none",
        mixBlendMode: "difference",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "invert(1)",
        WebkitBackdropFilter: "invert(1)",
      }}
    />
  );
} 