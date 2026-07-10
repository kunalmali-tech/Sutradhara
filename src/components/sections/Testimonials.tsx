"use client";

import { useState } from "react";
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

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 md:py-32 bg-gym-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Student Stories"
          title="REAL TRANSFORMATIONS"
          align="center"
          subtitle="Don't take our word for it — hear from the community that breathes, bends, and becomes together."
        />

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="up">
            <div className="relative bg-gym-card border border-gym-border p-10 md:p-14">
              {/* Giant quote icon */}
              <Quote
                size={80}
                className="absolute top-6 right-8 text-gym-red/10 rotate-180"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="#E8831A" className="text-gym-red" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gym-white text-xl md:text-2xl font-light leading-relaxed mb-8 relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarColors[current % avatarColors.length]} overflow-hidden shrink-0 flex items-center justify-center`}
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
                      <div className="text-gym-red text-sm font-medium">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-gym-border">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`transition-all duration-300 cursor-pointer ${
                        i === current
                          ? "w-8 h-1.5 bg-gym-red"
                          : "w-4 h-1.5 bg-gym-muted/40 hover:bg-gym-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 border border-gym-border flex items-center justify-center text-gym-muted hover:border-gym-red hover:text-gym-red transition-colors duration-200 cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 border border-gym-border flex items-center justify-center text-gym-muted hover:border-gym-red hover:text-gym-red transition-colors duration-200 cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Thumb strip */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((tm, i) => (
              <button
                key={tm.name}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 cursor-pointer ${
                  i === current ? "opacity-100 scale-105" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} overflow-hidden flex items-center justify-center`}
                  style={
                    tm.image
                      ? {
                          backgroundImage: `url('${tm.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : {}
                  }
                >
                  {!tm.image && (
                    <span className="font-display text-xl text-white/60">
                      {tm.name.charAt(0)}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
