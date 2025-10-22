'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type Nav = { label: string; href: string }[];

export default function Header({ nav }: { nav: Nav }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto w-full max-w-[1200px] px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/og-image.png" alt="TravelAgency Elixflare Logo" className="h-8 w-8 object-contain" />
          <span className="font-semibold">TravelAgency</span>
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
          onClick={() => setOpen(v => !v)}>
          Menu
        </button>
      </div>

      <div className={`md:hidden border-t bg-white ${open ? "block" : "hidden"}`}>
        <div className="mx-auto w-full max-w-[1200px] px-4 py-3 flex flex-col">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="py-2 text-gray-700" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
