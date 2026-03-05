"use client";

import { cn } from "@/lib/utils";

interface SquigglyLineProps {
  className?: string;
  width?: number;
  amplitude?: number;
  frequency?: number;
  strokeWidth?: number;
}

export default function SquigglyLine({
  className,
  width = 200,
  amplitude = 4,
  frequency = 12,
  strokeWidth = 1.5,
}: SquigglyLineProps) {
  const midY = amplitude + strokeWidth;
  const totalHeight = (amplitude + strokeWidth) * 2;

  // Build a smooth sine-wave path
  const points: string[] = [];
  const steps = 100;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y = midY + amplitude * Math.sin((i / steps) * frequency * Math.PI);
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  const d = points.join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${totalHeight}`}
      fill="none"
      preserveAspectRatio="none"
      className={cn("flex-1 h-3", className)}
    >
      <path
        d={d}
        stroke="hsl(var(--border))"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
