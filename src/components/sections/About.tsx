"use client";

import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { stats } from "@/data";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "Authentic classical yoga lineages",
  "Certified & deeply experienced teachers",
  "A peaceful, beautifully curated practice space",
  "A welcoming community of dedicated students",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gym-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image grid */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[480px] md:h-[560px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/image9.jpg"
                  alt="Sutradhara Yoga Studio"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gym-red/8" />
              </div>

              {/* Accent secondary image — bottom right */}
              <div
                className="absolute -bottom-8 -right-8 w-52 h-40 overflow-hidden border-4 border-gym-black hidden md:block"
                style={{
                  backgroundImage: "url('/images/image3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#1a1a1a",
                }}
              />

              {/* Diagonal saffron accent */}
              <div
                className="absolute -top-4 -left-4 w-20 h-20 bg-gym-red opacity-80"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              />

              {/* Year badge */}
              <div className="absolute top-6 left-6 bg-gym-black/80 backdrop-blur-sm border border-gym-border px-4 py-3">
                <div className="font-display text-4xl text-gym-red leading-none">5</div>
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
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none tracking-wide text-gym-white mb-6">
                WHERE BODY
                <br />
                MEETS{" "}
                <span className="text-gym-red">SPIRIT</span>
              </h2>
              <p className="text-gym-muted text-base leading-relaxed mb-5">
                Sutradhara was born from a simple belief — that yoga is not just
                exercise, but a complete path of transformation. Our studio is a
                space where ancient wisdom is taught with authenticity, and
                every student is met with care and intention.
              </p>
              <p className="text-gym-muted text-base leading-relaxed mb-8">
                From curious beginners to dedicated practitioners, our teachers
                hold space for every level — guided by one truth:{" "}
                <em className="text-gym-white not-italic font-medium">
                  the practice meets you exactly where you are.
                </em>
              </p>

              {/* Pillars */}
              <ul className="space-y-3 mb-10">
                {pillars.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-gym-muted">
                    <CheckCircle2 size={16} className="text-gym-red shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
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
