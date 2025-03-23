"use client";
import { cn } from "@/lib/utils"; // Replace with your `cn` or `clsx` utility

export interface AuroraProps {
  colorStops?: [string, string, string];
  speed?: number;
}

// Define the noise SVG as a variable
const NOISE_SVG = encodeURIComponent(
  `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="3"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.4"/></svg>`
);

export default function AuroraBackground({
  colorStops = ["#D8FDFF", "#7cff67", "#f5e5ce"],
  speed = 2,
}: AuroraProps) {
  return (
    <div>
      {/* Gradient Element */}
      <div
        className={cn(
          `animated-background min-h-screen h-full bg-gradient-to-tl from-[#f8f6f3] via-[#e6e3e0] to-[#fbf2e6]`
        )}
        style={{
          animationDuration: `${20 / speed}s`,
        }}
      />
    </div>
  );
}
