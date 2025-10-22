'use client';
import { useState } from 'react';

export default function Carousel({ images=[] }: { images: string[] }) {
  const [i, setI] = useState(0);
  if (images.length===0) return null;
  const prev = () => setI((i-1+images.length)%images.length);
  const next = () => setI((i+1)%images.length);
  return (
    <div className="relative rounded-xl overflow-hidden border bg-white">
      <img src={images[i]} alt="" className="w-full h-[var(--sliderHeight)] object-cover" />
      <button aria-label="Previous" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-md border px-3 py-1.5 text-sm">Prev</button>
      <button aria-label="Next" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-md border px-3 py-1.5 text-sm">Next</button>
    </div>
  );
}
