"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageOff, X, ZoomIn } from "lucide-react";

interface Props {
  images: string[];
  imagePositions?: string[];
  color: string;
  label: string;
  max?: number;
}

export default function ImageGallery({ images, imagePositions, color, label, max = 6 }: Props) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const shown = images.slice(0, max);
  const placeholderCount = max - shown.length;
  const gridCols =
    max <= 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={`grid ${gridCols} gap-3`}>
        {shown.map((img, i) => {
          const alt = `${label} photo ${i + 1}`;
          return (
            <button
              key={img}
              type="button"
              onClick={() => setLightbox({ src: img, alt })}
              className="group relative bg-gym-black cursor-pointer overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: imagePositions?.[i] ?? "center" }}
              />
              {/* Hover colour tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `linear-gradient(to top, ${color}30 0%, transparent 50%)` }}
              />
              {/* Zoom cue */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <ZoomIn size={24} className="text-white drop-shadow-lg" />
              </div>
            </button>
          );
        })}

        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div
            key={`placeholder-${i}`}
            className="relative flex flex-col items-center justify-center gap-2 border border-dashed"
            style={{ aspectRatio: "3/4", borderColor: `${color}35`, backgroundColor: `${color}08` }}
          >
            <ImageOff size={22} style={{ color: `${color}80` }} />
            <span
              className="text-[10px] tracking-[0.15em] uppercase text-center px-4"
              style={{ color: `${color}80` }}
            >
              More photos coming soon
            </span>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors cursor-pointer"
              onClick={() => setLightbox(null)}
              aria-label="Close preview"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
