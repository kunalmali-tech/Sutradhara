"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { mediaUrl } from "@/lib/media";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gym-black"
          style={{
            backgroundImage: `url('${mediaUrl("/images/image1.jpg")}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gym-black via-gym-black/85 to-gym-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-transparent to-gym-black/70" />

        {/* Diagonal accent stripe */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-10"
          style={{
            background: "linear-gradient(135deg, transparent 40%, #E8831A 40%)",
          }}
        />

        {/* Subtle mandala-like radial glow */}
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] opacity-5 rounded-full"
          style={{
            background:
              "radial-gradient(circle, #E8831A 0%, #D4A853 30%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Noise grain */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-6 pt-28 pb-16"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-gym-red" />
          <span className="text-gym-red text-xs font-semibold tracking-[0.3em] uppercase">
            Sutradhara — The thread that connects it all · VimanNagar, Pune
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-none text-gym-white"
          >
            <span className="block text-[clamp(72px,12vw,180px)] tracking-wider">
              WISDOM.
            </span>
            <span
              className="block text-[clamp(72px,12vw,180px)] tracking-wider"
              style={{ WebkitTextStroke: "2px #E8831A", color: "transparent" }}
            >
              WELLNESS.
            </span>
            <span className="block text-[clamp(72px,12vw,180px)] tracking-wider">
              WHOLENESS<span className="text-gym-red">.</span>
            </span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-gym-muted text-base md:text-lg max-w-md leading-relaxed"
        >
          A sacred space where ancient wisdom meets modern life. Discover
          stillness, strength, and transformation — one breath at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <Button size="lg" onClick={scrollToContact}>
            Begin Your Practice
            <ChevronRight size={16} />
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToServices}>
            Explore The Thread
          </Button>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          onClick={scrollToAbout}
          className="flex items-center gap-2 mt-16 text-gym-muted text-xs tracking-[0.2em] uppercase hover:text-gym-red transition-colors cursor-pointer group"
        >
          <ArrowDown
            size={14}
            className="group-hover:translate-y-1 transition-transform duration-300"
          />
          Scroll to discover
        </motion.button>
      </motion.div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="relative z-10 border-t border-gym-border bg-gym-black/60 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gym-border">
            {[
              { value: "5+", label: "Years Teaching" },
              { value: "300+", label: "Students" },
              { value: "5+", label: "Facilitators" },
              { value: "20+", label: "Classes / Week" },
            ].map((stat) => (
              <div key={stat.label} className="py-5 px-6 text-center">
                <div className="font-display text-3xl text-gym-red tracking-wider">
                  {stat.value}
                </div>
                <div className="text-xs text-gym-muted tracking-[0.15em] uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
