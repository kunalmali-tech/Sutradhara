"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { testimonials } from "@/data";

const avatarColors = [
  "from-amber-900 to-amber-950",
  "from-stone-800 to-stone-900",
  "from-emerald-900 to-emerald-950",
  "from-amber-800 to-stone-900",
  "from-teal-900 to-stone-950",
];

const AUTOPLAY_MS = 7000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const t = testimonials[current];
  const source = t.role.includes("★") ? t.role.replace(/★+/g, "").trim() : null;
  const roleLine = source ?? t.role;

  return (
    <section className="py-24 md:py-32 bg-gym-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Student Stories"
          eyebrowClassName="text-base md:text-lg"
          title="REAL TRANSFORMATIONS"
          align="center"
          subtitle="Don't take our word for it — hear from the community that breathes, bends, and becomes together."
        />

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="up">
            <div
              className="relative rounded-3xl border border-gym-border bg-gradient-to-b from-gym-card to-gym-card/70 p-8 sm:p-10 md:p-14 overflow-hidden shadow-2xl shadow-black/40"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Ambient glow accents */}
              <div className="pointer-events-none absolute -top-28 -right-20 h-72 w-72 rounded-full bg-gym-red/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-gym-orange/[0.06] blur-3xl" />

              {/* Giant quote icon */}
              <Quote
                size={100}
                strokeWidth={1.5}
                className="pointer-events-none absolute top-6 right-6 md:top-8 md:right-10 text-gym-red/[0.08] rotate-180"
              />

              <motion.div layout transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-10 touch-pan-y"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) next();
                      else if (info.offset.x > 60) prev();
                    }}
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} size={16} fill="#E8831A" className="text-gym-red" />
                        ))}
                      </div>
                      <span className="text-gym-muted text-xs font-medium tracking-wide">
                        {t.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gym-white text-xl md:text-2xl font-light leading-relaxed mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarColors[current % avatarColors.length]} ring-2 ring-gym-red/25 overflow-hidden shrink-0 flex items-center justify-center`}
                        style={
                          t.image
                            ? {
                                backgroundImage: `url('${t.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }
                            : {}
                        }
                      >
                        {!t.image && (
                          <span className="font-display text-2xl text-white/60">
                            {t.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gym-white">{t.name}</div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {source && (
                            <span className="text-[9px] font-semibold tracking-[0.15em] uppercase rounded-full bg-gym-red/10 text-gym-red px-2 py-0.5">
                              {source}
                            </span>
                          )}
                          {!source && (
                            <span className="text-gym-red text-sm font-medium">{roleLine}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Navigation */}
              <div className="relative z-10 flex items-center justify-center sm:justify-between mt-10 pt-8 border-t border-gym-border">
                {/* Dots */}
                <div className="flex flex-wrap justify-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === current
                          ? "w-8 bg-gym-red"
                          : "w-4 bg-gym-muted/40 hover:bg-gym-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrows — hidden on mobile, dots + swipe carry navigation there */}
                <div className="hidden sm:flex gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full border border-gym-border flex items-center justify-center text-gym-muted hover:border-gym-red hover:text-gym-red hover:bg-gym-red/10 transition-colors duration-200 cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full border border-gym-border flex items-center justify-center text-gym-muted hover:border-gym-red hover:text-gym-red hover:bg-gym-red/10 transition-colors duration-200 cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
