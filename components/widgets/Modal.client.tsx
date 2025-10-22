'use client';
import { useEffect } from 'react';
export default function Modal({ open, onClose, title, children }:{ open:boolean; onClose:()=>void; title:string; children:React.ReactNode }) {
  useEffect(()=>{
    const onKey = (e: KeyboardEvent)=>{ if (e.key==='Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return ()=>document.removeEventListener('keydown', onKey);
  },[onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-soft max-w-lg w-full p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose} aria-label="Close" className="px-2 py-1 rounded-md border text-sm">Close</button>
        </div>
        <div className="text-sm text-gray-700">{children}</div>
      </div>
    </div>
  );
}
