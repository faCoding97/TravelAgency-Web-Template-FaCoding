'use client';
import { useState } from 'react';
export default function Toast({ message }: { message: string }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div role="status" className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-lg shadow z-50">
      <div className="flex items-center gap-3">
        <span>{message}</span>
        <button onClick={()=>setOpen(false)} className="text-xs underline">Dismiss</button>
      </div>
    </div>
  );
}
