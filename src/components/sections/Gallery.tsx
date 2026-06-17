"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { mediaUrl } from "@/lib/media";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  wide?: boolean;
  position?: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: mediaUrl("/images/image1.jpg"),
    alt: "Group Meditation Class",
    category: "Studio",
    wide: true,
    position: "center 30%",
  },
  {
    src: mediaUrl("/images/image4.jpg"),
    alt: "Paschimottanasana — Seated Forward Bend",
    category: "Asanas",
    position: "center top",
  },
  {
    src: mediaUrl("/images/image3.jpg"),
    alt: "Sacred Space — Lotus Diya",
    category: "Studio",
    position: "center",
  },
  {
    src: mediaUrl("/images/image9.jpg"),
    alt: "Hatha Yoga Practice Session",
    category: "Asanas",
    wide: true,
    position: "center 20%",
  },
  {
    src: mediaUrl("/images/image6.jpg"),
    alt: "Morning Meditation",
    category: "Practice",
    position: "center top",
  },
  {
    src: mediaUrl("/images/image2.jpg"),
    alt: "Trikonasana at Adiyogi",
    category: "Asanas",
    position: "center top",
  },
  {
    src: mediaUrl("/images/image7.jpg"),
    alt: "AUM — The Sound of Creation",
    category: "Practice",
    position: "center top",
  },
  {
    src: mediaUrl("/images/image12.jpg"),
    alt: "Group Hatha Yoga Session",
    category: "Studio",
    wide: true,
    position: "center 25%",
  },
  {
    src: mediaUrl("/images/image11.jpg"),
    alt: "Evening Practice Session",
    category: "Studio",
    position: "center top",
  },
  {
    src: mediaUrl("/images/image5.jpg"),
    alt: "The Sacred Space",
    category: "Studio",
    position: "center top",
  },
  {
    src: mediaUrl("/images/image8.jpg"),
    alt: "Students at Sutradhara",
    category: "Practice",
    position: "center top",
  },
  {
    src: mediaUrl("/images/image10.jpg"),
    alt: "Harkirat — Isha Hatha Yoga",
    category: "Practice",
    position: "center top",
  },
];

const categories = ["All", "Studio", "Asanas", "Practice"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gym-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow="The Studio"
            title="OUR SACRED SPACE"
            subtitle="Step inside the studio where transformations unfold, breath by breath."
            className="mb-0"
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gym-red border-gym-red text-white"
                    : "border-gym-border text-gym-muted hover:border-gym-red hover:text-gym-red"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px] [grid-auto-flow:dense]"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
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
