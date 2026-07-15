"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { threads } from "@/data";

type ItemSize = "normal" | "wide" | "tall" | "big";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  size?: ItemSize;
  position?: string;
}

// One representative photo per thread, in the same order as the homepage mandala.
const dharaItems: GalleryItem[] = threads.map((el, i) => ({
  src: el.heroImage,
  alt: `${el.title} — ${el.subtitle}`,
  category: el.title,
  position: el.heroImagePosition ?? "center",
  size: i === 0 ? "tall" : i === 3 ? "wide" : "normal",
}));

// Opening tile — always shown first in the grid.
const featuredItem: GalleryItem = {
  src: "/images/gallery/life-at-sutradhara-1.jpg",
  alt: "Life at Sutradhara",
  category: "Studio",
  size: "wide",
  position: "center top",
};

// Supplementary studio/life photos not tied to a specific thread.
const studioItems: GalleryItem[] = [
  {
    src: "/images/gallery/sacred-space-lotus-diya.jpg",
    alt: "Sacred Space — Lotus Diya",
    category: "Studio",
    position: "center",
  },
  {
    src: "/images/gallery/group-meditation-class.jpg",
    alt: "Group Meditation Class",
    category: "Studio",
    size: "wide",
    position: "center 30%",
  },
  {
    src: "/images/gallery/morning-meditation.jpg",
    alt: "Morning Meditation",
    category: "Studio",
    size: "tall",
    position: "center top",
  },
  {
    src: "/images/gallery/the-sacred-space.jpg",
    alt: "The Sacred Space",
    category: "Studio",
    size: "big",
    position: "center top",
  },
  {
    src: "/images/gallery/trikonasana-at-adiyogi.jpg",
    alt: "Trikonasana at Adiyogi",
    category: "Studio",
    position: "center top",
  },
  {
    src: "/images/gallery/harkirat-isha-hatha-yoga.jpg",
    alt: "Harkirat — Isha Hatha Yoga",
    category: "Studio",
    position: "center top",
  },
  {
    src: "/images/gallery/life-at-sutradhara-2.jpg",
    alt: "Life at Sutradhara",
    category: "Studio",
    size: "wide",
    position: "center top",
  },
];

// Interleave a Dhara photo with a studio photo, repeating — keeps the grid visually varied.
// The featured item always leads.
const galleryItems: GalleryItem[] = [featuredItem];
for (let i = 0; i < Math.max(dharaItems.length, studioItems.length); i++) {
  if (dharaItems[i]) galleryItems.push(dharaItems[i]);
  if (studioItems[i]) galleryItems.push(studioItems[i]);
}

const sizeClasses: Record<ItemSize, string> = {
  normal: "",
  wide: "sm:col-span-2",
  tall: "row-span-2",
  big: "sm:col-span-2 row-span-2",
};

// Below `lg`, only this many tiles show by default — rest reveals on demand.
// The full grid always renders on desktop; this only ever truncates on mobile/tablet.
const PREVIEW_COUNT = 8;

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const hiddenCount = galleryItems.length - PREVIEW_COUNT;

  const showPrev = useCallback(
    () =>
      setActiveIndex((i) => (i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, showPrev, showNext]);

  const lightboxItem = activeIndex !== null ? galleryItems[activeIndex] : null;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gym-black">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <SectionHeading
            eyebrow="The Studio"
            title="OUR SACRED SPACE"
            subtitle="Step inside the studio where transformations unfold, breath by breath."
            className="mb-0"
          />
        </div>

        {/* Bento-style grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[210px] lg:auto-rows-[230px] [grid-auto-flow:dense]"
        >
          <AnimatePresence>
            {galleryItems.map((item, i) => {
              const size = item.size ?? "normal";
              // Only ever hides tiles below `lg` — desktop always shows the full grid.
              const collapsedOnMobile = i >= PREVIEW_COUNT && !expanded;
              return (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ring-1 ring-white/5 shadow-lg shadow-black/30 transition-[box-shadow,ring] duration-300 hover:ring-gym-red/50 hover:shadow-gym-red/10 ${sizeClasses[size]} ${collapsedOnMobile ? "hidden lg:block" : ""}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${item.src}')`,
                      backgroundSize: "cover",
                      backgroundPosition: item.position ?? "center top",
                      backgroundColor: "#162019",
                    }}
                  />

                  {/* Permanent bottom vignette for legibility, deepens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Category tag — always visible */}
                  <div className="absolute top-3 left-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[9px] font-semibold tracking-[0.15em] uppercase text-white/90">
                    {item.category}
                  </div>

                  {/* Zoom affordance */}
                  <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gym-red text-white opacity-0 -translate-y-1 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn size={15} />
                  </div>

                  {/* Title — slides up on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-[11px] sm:text-xs font-semibold tracking-wide leading-snug drop-shadow-lg line-clamp-2">
                      {item.alt}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Expand / collapse — mobile/tablet only; desktop already shows the full grid */}
        {hiddenCount > 0 && (
          <div className="flex justify-center mt-10 lg:hidden">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="group flex items-center gap-2 rounded-full border border-gym-border px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-gym-muted hover:border-gym-red hover:text-gym-red transition-colors duration-200 cursor-pointer"
            >
              {expanded ? "Show Less" : `View Full Gallery (+${hiddenCount})`}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveIndex(null)}
          >
            <button
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => setActiveIndex(null)}
              aria-label="Close preview"
            >
              <X size={22} />
            </button>

            {/* Arrows — hidden on mobile (swipe the image instead), where they'd overlap the photo */}
            <button
              className="hidden sm:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={lightboxItem.src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) showNext();
                else if (info.offset.x > 60) showPrev();
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="w-full max-h-[75vh] object-contain rounded-lg shadow-2xl shadow-black/60 pointer-events-none"
              />
              <div className="flex items-center justify-center gap-3 mt-5">
                <span className="text-gym-red text-[10px] font-semibold tracking-[0.2em] uppercase">
                  {lightboxItem.category}
                </span>
                <span className="h-1 w-1 rounded-full bg-gym-muted/60" />
                <p className="text-gym-muted text-xs tracking-wide">{lightboxItem.alt}</p>
                <span className="h-1 w-1 rounded-full bg-gym-muted/60" />
                <span className="text-gym-muted/70 text-[11px] tabular-nums">
                  {activeIndex! + 1} / {galleryItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
