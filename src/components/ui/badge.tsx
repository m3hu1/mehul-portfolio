"use client"

import * as React from "react";
import { useRef, useEffect } from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { annotate } from 'rough-notation';

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        new: "border-transparent bg-primary text-primary-foreground shadow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const annotationRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (variant === "new" && badgeRef.current) {
      annotationRef.current = annotate(badgeRef.current, {
        type: 'box',
        color: '#3C82F6',
        strokeWidth: 2,
        padding: 1,
      });
      annotationRef.current.show();
    }
  };

  const handleMouseLeave = () => {
    if (annotationRef.current) {
      annotationRef.current.hide();
    }
  };

  useEffect(() => {
    return () => {
      if (annotationRef.current) {
        annotationRef.current.hide();
      }
    };
  }, []);

  return (
    <div
      ref={badgeRef}
      className={cn(badgeVariants({ variant }), className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
}

export { Badge, badgeVariants };