"use client"

import React, { useRef } from 'react';
import { useEffect } from 'react';
import { annotate } from 'rough-notation';

interface AnnotatedHeadingProps {
  ref: React.RefObject<HTMLHeadingElement>;
  text: string;
}

const AnnotatedHeading = React.forwardRef<HTMLHeadingElement, Omit<AnnotatedHeadingProps, 'ref'>>(
    ({ text }, ref) => {
        const blogHeadingRef = useRef<HTMLHeadingElement>(null);
      useEffect(() => {
        if (blogHeadingRef.current) {
          const annotation = annotate(blogHeadingRef.current, {
            type: 'bracket',
            color: '#ED8796',
            strokeWidth: 3,
            padding: 5,
            brackets: ["left", "right"],
            animationDuration: 1500,
          });
          annotation.show();
        }
      }, [ref]);

  return <span ref={blogHeadingRef}>{text}</span>;
});

AnnotatedHeading.displayName = 'AnnotatedHeading';

export default AnnotatedHeading;