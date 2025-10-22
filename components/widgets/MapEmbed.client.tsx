"use client";
import { useState } from "react";

type MapEmbedProps = {
  /** آدرس iframe آمادهٔ نقشه (Google Maps embed یا مشابه) */
  embedSrc: string;
  /** کوئری برای باز کردن در تب جدید و مسیر‌یابی */
  query: string;
  /** عنوان iframe برای اکسسیبلیتی */
  title?: string;
  /** کلاس‌های اضافی ظرف بیرونی */
  className?: string;
};

export default function MapEmbed({
  embedSrc,
  query,
  title = "Map",
  className = "",
}: MapEmbedProps) {
  const [loading, setLoading] = useState(false);

  const openInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const directionsFromHere = () => {
    const fallback = () =>
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}&travelmode=driving`,
        "_blank",
        "noopener,noreferrer"
      );

    if (!navigator.geolocation) return fallback();

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const origin = `${coords.latitude},${coords.longitude}`;
        window.open(
          `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(query)}&travelmode=driving`,
          "_blank",
          "noopener,noreferrer"
        );
        setLoading(false);
      },
      () => {
        fallback();
        setLoading(false);
      },
      { timeout: 8000 }
    );
  };

  return (
    <div className={`relative ${className}`}>
      {/* ظرف ریسپانسیو با نسبت 16:9 تا iframe درست جا بشه */}
      <div className="relative w-full overflow-hidden rounded-lg shadow border border-gray-200">
        <div className="relative aspect-[16/9]">
          <iframe
            src={embedSrc}
            title={title}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
            allowFullScreen
          />
        </div>
      </div>

      <div className="absolute right-2 top-2 flex gap-2">
        <button
          type="button"
          onClick={openInMaps}
          className="px-3 py-1.5 rounded-md bg-white/95 hover:bg-white text-gray-800 shadow border text-sm"
          aria-label="Open in Google Maps">
          Open in Maps
        </button>
        <button
          type="button"
          onClick={directionsFromHere}
          disabled={loading}
          className="px-3 py-1.5 rounded-md bg-green-600 hover:bg-green-700 text-white shadow text-sm disabled:opacity-60"
          aria-live="polite">
          {loading ? "Locating..." : "Directions from here"}
        </button>
      </div>
    </div>
  );
}
