"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronRight } from "lucide-react";
import { IconInstagram } from "@/components/ui/SocialIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { trainers } from "@/data";

const placeholderColors = [
  "from-amber-950 to-stone-900",
  "from-teal-950 to-stone-900",
  "from-emerald-950 to-stone-900",
  "from-stone-900 to-amber-950",
];

export default function Trainers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = trainers[activeIndex];

  return (
    <section id="trainers" className="py-24 md:py-32 bg-gym-surface">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Meet The Team"
          title="OUR TEACHERS"
          subtitle="Certified yoga instructors dedicated to guiding your practice with wisdom, authenticity, and care."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Trainer list (left) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {trainers.map((trainer, i) => (
              <AnimateOnScroll key={trainer.name} delay={i * 0.1} direction="left">
                <button
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left p-5 border transition-all duration-300 cursor-pointer group ${
                    activeIndex === i
                      ? "border-gym-red bg-gym-card"
                      : "border-gym-border bg-gym-card/50 hover:border-gym-red/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className={`relative w-14 h-14 overflow-hidden shrink-0 bg-gradient-to-br ${placeholderColors[i]}`}
                      style={{
                        backgroundImage: `url('${trainer.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                      }}
                    >
                      {activeIndex === i && (
                        <div className="absolute inset-0 ring-2 ring-gym-red ring-inset" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-xl tracking-wider text-gym-white group-hover:text-gym-red transition-colors duration-200">
                        {trainer.name}
                      </div>
                      <div className="text-xs text-gym-muted tracking-wider uppercase mt-0.5">
                        {trainer.specialty}
                      </div>
                    </div>
                    <ChevronRight
                      size={16}
                      className={`shrink-0 transition-all duration-300 ${
                        activeIndex === i ? "text-gym-red translate-x-1" : "text-gym-muted"
                      }`}
                    />
                  </div>
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Active trainer detail (right) */}
          <AnimateOnScroll direction="right" className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <div className="relative bg-gym-card border border-gym-border overflow-hidden h-full">
                  {/* Top image */}
                  <div
                    className={`relative h-64 md:h-80 bg-gradient-to-br ${placeholderColors[activeIndex]}`}
                    style={{
                      backgroundImage: `url('${active.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center 20%",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gym-card to-transparent" />

                    {/* Specialty badge */}
                    <div className="absolute top-5 right-5 bg-gym-red px-3 py-1.5 text-xs font-semibold tracking-widest uppercase text-white">
                      {active.specialty}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-4xl tracking-wider text-gym-white">
                          {active.name}
                        </h3>
                        <p className="text-gym-muted text-sm mt-1">{active.instagram}</p>
                      </div>
                      <a
                        href="#"
                        className="w-10 h-10 border border-gym-border flex items-center justify-center text-gym-muted hover:border-gym-red hover:text-gym-red transition-colors duration-200"
                      >
                        <IconInstagram size={16} />
                      </a>
                    </div>

                    <p className="text-gym-muted text-sm leading-relaxed mb-6">
                      {active.bio}
                    </p>

                    {/* Certifications */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gym-white mb-3">
                        <Award size={13} className="text-gym-red" />
                        Certifications & Training
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {active.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="text-xs font-mono bg-gym-surface border border-gym-border text-gym-muted px-3 py-1"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </AnimateOnScroll>
        </div>

        {/* CTA */}
        <AnimateOnScroll direction="up" delay={0.2} className="mt-12 text-center">
          <p className="text-gym-muted text-sm mb-4">
            Ready to begin your practice with a dedicated teacher?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-gym-red text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-gym-red-dark transition-colors duration-200 cursor-pointer"
          >
            Book Your First Class
            <ChevronRight size={14} />
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
