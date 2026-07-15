"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { threads } from "@/data";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  wide?: boolean;
  position?: string;
}

// One representative photo per thread, in the same order as the homepage mandala.
const dharaItems: GalleryItem[] = threads.map((el, i) => ({
  src: el.heroImage,
  alt: `${el.title} — ${el.subtitle}`,
  category: el.title,
  position: el.heroImagePosition ?? "center",
  wide: i === 3,
}));

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
    wide: true,
    position: "center 30%",
  },
  {
    src: "/images/gallery/morning-meditation.jpg",
    alt: "Morning Meditation",
    category: "Studio",
    position: "center top",
  },
  {
    src: "/images/gallery/the-sacred-space.jpg",
    alt: "The Sacred Space",
    category: "Studio",
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
    src: "/images/gallery/life-at-sutradhara-1.jpg",
    alt: "Life at Sutradhara",
    category: "Studio",
    position: "center top",
  },
  {
    src: "/images/gallery/life-at-sutradhara-2.jpg",
    alt: "Life at Sutradhara",
    category: "Studio",
    wide: true,
    position: "center top",
  },
];

// Interleave a Dhara photo with a studio photo, repeating — keeps the grid visually varied.
const galleryItems: GalleryItem[] = [];
for (let i = 0; i < Math.max(dharaItems.length, studioItems.length); i++) {
  if (dharaItems[i]) galleryItems.push(dharaItems[i]);
  if (studioItems[i]) galleryItems.push(studioItems[i]);
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

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

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px] [grid-auto-flow:dense]"
        >
          <AnimatePresence>
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`group relative overflow-hidden cursor-pointer${item.wide ? " col-span-2" : ""}`}
                onClick={() => setLightbox(item)}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${item.src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: item.position ?? "center top",
                    backgroundColor: "#162019",
                  }}
                />
                <div className="absolute inset-0 bg-gym-black/30 group-hover:bg-gym-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={28} className="text-white mb-2 drop-shadow-lg" />
                  <span className="text-white text-xs font-semibold tracking-widest uppercase drop-shadow-lg text-center px-3">
                    {item.alt}
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-gym-red px-2 py-0.5 text-[10px] font-semibold tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
              <p className="text-center text-gym-muted text-sm mt-4 tracking-widest uppercase">
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
