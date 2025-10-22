'use client';
import { QRCodeCanvas } from 'qrcode.react';
import { useRef } from 'react';

export default function QrCode({ url, label = "Open Tours" }: { url: string; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const download = () => {
    const canvas = ref.current?.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'travelagency-qr.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  return (
    <div className="flex items-center gap-3">
      <div ref={ref} className="bg-white p-2 rounded-lg border shadow">
        <QRCodeCanvas value={url} size={108} includeMargin />
      </div>
      <div className="flex flex-col gap-2">
        <a href={url} className="text-sm text-[var(--brand)] underline">{label}</a>
        <button onClick={download} className="text-xs px-2 py-1 border rounded-md hover:bg-gray-50">Download PNG</button>
      </div>
    </div>
  );
}
