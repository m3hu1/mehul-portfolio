'use client';

import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LoveCounterProps {
  slug: string;
  readonly?: boolean;
}

export default function LoveCounter({ slug, readonly = false }: LoveCounterProps) {
  const [isLoved, setIsLoved] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Load initial state from localStorage
    const loved = localStorage.getItem(`loved-${slug}`);
    if (loved) setIsLoved(true);
    
    // Fetch initial count
    fetch(`/api/love/${slug}`)
      .then(res => res.json())
      .then(data => setCount(data.count));
  }, [slug]);

  const toggleLove = async () => {
    if (readonly) return;
    
    const newIsLoved = !isLoved;
    setIsLoved(newIsLoved);
    
    if (newIsLoved) {
      localStorage.setItem(`loved-${slug}`, 'true');
    } else {
      localStorage.removeItem(`loved-${slug}`);
    }

    const res = await fetch(`/api/love/${slug}`, {
      method: 'POST',
      body: JSON.stringify({ action: newIsLoved ? 'increment' : 'decrement' }),
    });
    
    const data = await res.json();
    setCount(data.count);
  };

  const Component = readonly ? 'div' : 'button';
  
  return (
    <Component
      onClick={toggleLove}
      className={`inline-flex items-center gap-1.5 leading-none font-mono ${
        readonly 
          ? 'text-muted-foreground text-xs' 
          : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors text-2xl'
      }`}
    >
      <Heart
        className={`w-[1em] h-[1em] flex-shrink-0 ${
          isLoved && !readonly ? 'fill-current text-red-500' : ''
        }`}
      />
      <span className={"tabular-nums inline-block leading-none translate-y-[0.5px]"}>
        {count}
      </span>
    </Component>
  );
}