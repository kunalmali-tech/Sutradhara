"use client";

import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { stats } from "@/data";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "Classical Hatha Yoga — Sadhguru Gurukulam Teachers",
  "Classical Music — Naad Yoga & Mantra Chanting",
  "Classical Dance — Bharatanatyam",
  "Martial Arts — Kalaripayattu",
  "Health — Panchagavya, Siddha, Ayurveda and Physiotherapy",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gym-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image grid */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              {/* Silver-grey brand frame */}
              <div
                className="absolute -top-3 -left-3 right-3 bottom-3 border border-[#C0C0C0]/25 pointer-events-none z-10"
                style={{ background: "linear-gradient(135deg, rgba(192,192,192,0.07) 0%, transparent 60%)" }}
              />

              {/* Main image */}
              <div className="relative h-[480px] md:h-[560px] overflow-hidden bg-gym-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/the-sutradhara-mandala.svg"
                  alt="The Sutradhara — the seven living threads woven from one centre"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                {/* Silver-grey gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#C0C0C0]/12 to-transparent" />
              </div>

              {/* Diagonal saffron accent */}
              <div
                className="absolute -top-4 -left-4 w-20 h-20 bg-gym-red opacity-80"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              />

              {/* Year badge */}
              <div className="absolute top-6 left-6 bg-gym-black/80 backdrop-blur-sm border border-gym-border px-4 py-3">
                <div className="font-display text-4xl text-gym-red leading-none">6</div>
                <div className="text-xs text-gym-muted tracking-widest uppercase mt-0.5">Years Teaching</div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right — Text */}
          <div>
            <AnimateOnScroll direction="right">
              <p className="text-gym-red text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Our Story
              </p>
              {/* Silver-grey brand accent line */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-[#C0C0C0]/50 to-transparent" />
                <span className="text-[#C0C0C0]/70 text-[10px] tracking-[0.35em] uppercase font-medium">
                  The Sutradhara — The thread that connects it all
                </span>
                <div className="h-px w-6 bg-[#C0C0C0]/30" />
              </div>

              <p className="text-gym-muted text-base leading-relaxed mb-8">
                Like a master storyteller, it gathers many strands and weaves them into one living journey. Each offering is a moment in the story—of the body, the mind, and the self. Step in, and gently follow the thread inward. Here, everything connects… and the story becomes your own.
              </p>

              {/* Pillars */}
              <div className="relative mb-10 p-5 border border-[#C0C0C0]/15 bg-gradient-to-br from-[#C0C0C0]/5 to-transparent">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#C0C0C0]/50 via-[#C0C0C0]/20 to-transparent" />
                <ul className="space-y-3">
                  {pillars.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-gym-muted">
                      <CheckCircle2 size={16} className="text-gym-red shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-px border border-gym-border">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={stat.label} delay={i * 0.1} direction="up">
                  <div className="bg-gym-card p-6 hover:bg-gym-surface transition-colors duration-300">
                    <div className="font-display text-4xl text-gym-red leading-none">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-gym-muted tracking-widest uppercase mt-2">
                      {stat.label}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
