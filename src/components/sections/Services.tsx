"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { elements } from "@/data";

// Positions for 240px cards in a 1080px-tall container — heptagonal (7-point) mandala
const cardPositions = [
  { top: "12%", left: "50%" },   // top
  { top: "26%", left: "77%" },   // upper-right
  { top: "58%", left: "84%" },   // right
  { top: "83%", left: "65%" },   // lower-right
  { top: "83%", left: "35%" },   // lower-left
  { top: "58%", left: "16%" },   // left
  { top: "26%", left: "23%" },   // upper-left
];

const svgEndpoints = [
  { x2: "50%", y2: "12%" },
  { x2: "77%", y2: "26%" },
  { x2: "84%", y2: "58%" },
  { x2: "65%", y2: "83%" },
  { x2: "35%", y2: "83%" },
  { x2: "16%", y2: "58%" },
  { x2: "23%", y2: "26%" },
];

const circleVariants = (color: string) => ({
  rest:  { scale: 1, borderColor: `${color}35`, boxShadow: "0 0 0px transparent" },
  hover: { scale: 1.07, borderColor: color,
           boxShadow: `0 0 40px ${color}35, 0 0 80px ${color}18` },
});
const glowVariants   = { rest: { opacity: 0 }, hover: { opacity: 1 } };
const threadVariants = { rest: { height: 16, opacity: 0.28 }, hover: { height: 30, opacity: 1 } };
const enterVariants  = { rest: { opacity: 0, y: -5 },         hover: { opacity: 1, y: 0 } };

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-gym-surface clip-diagonal-top clip-diagonal-bottom"
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          title="THE SUTRAS"
          subtitle="Seven living threads woven from one centre — each a unique path, all leading to the same wholeness."
          align="center"
        />

        {/* ── Desktop radial mandala ── */}
        <div className="hidden lg:block relative h-[1080px] mt-4">

          {/* SVG decorative threads */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
          >
            <ellipse cx="50%" cy="50%" rx="35%" ry="38%"
              fill="none" stroke="#C0C0C0"
              strokeWidth="0.6" strokeDasharray="3 9" opacity="0.13" />
            <ellipse cx="50%" cy="50%" rx="10%" ry="11%"
              fill="none" stroke="#C0C0C0"
              strokeWidth="0.6" opacity="0.2" />

            {svgEndpoints.map((ep, i) => (
              <motion.line
                key={i}
                x1="50%" y1="50%" x2={ep.x2} y2={ep.y2}
                stroke="#C0C0C0" strokeWidth="0.9"
                strokeDasharray="1400"
                initial={{ strokeDashoffset: 1400, opacity: 0 }}
                whileInView={{ strokeDashoffset: 0, opacity: 0.22 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.3 + i * 0.12, ease: "easeOut" }}
              />
            ))}

            {svgEndpoints.map((ep, i) => (
              <motion.circle
                key={`dot-${i}`}
                cx={ep.x2} cy={ep.y2} r="4"
                fill={elements[i].color}
                initial={{ opacity: 0, r: 0 }}
                whileInView={{ opacity: 0.5, r: 4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.12 }}
              />
            ))}
          </svg>

          {/* Centre hub */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="w-[170px] h-[170px] rounded-full border border-[#C0C0C0]/25 bg-gym-black flex flex-col items-center justify-center text-center"
              style={{
                boxShadow:
                  "0 0 70px rgba(232,131,26,0.09), 0 0 140px rgba(232,131,26,0.04), inset 0 0 50px rgba(192,192,192,0.03)",
              }}
            >
              <div className="relative w-7 h-7 flex items-center justify-center mb-2.5">
                <div className="absolute w-5 h-5 border-2 border-gym-red rotate-45" />
                <div className="w-1.5 h-1.5 rounded-full bg-gym-red" />
              </div>
              <span className="font-display text-[13px] tracking-[0.22em] text-gym-white leading-tight">
                THE
              </span>
              <span className="font-display text-[13px] tracking-[0.22em] leading-tight">
                SUTRA<span className="text-gym-red">DHARA</span>
              </span>
            </div>
          </motion.div>

          {/* Element cards */}
          {elements.map((element, i) => {
            const pos = cardPositions[i];
            return (
              <motion.div
                key={element.slug}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ top: pos.top, left: pos.left }}
                initial={{ opacity: 0, scale: 0.55 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/elements/${element.slug}`}>
                  <motion.div
                    className="flex flex-col items-center cursor-pointer"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    transition={{ duration: 0.3 }}
                  >
                    {/* ── Circle ── */}
                    <motion.div
                      className="w-[240px] h-[240px] rounded-full flex flex-col items-center justify-center text-center px-6 relative"
                      style={{ border: `2px solid ${element.color}35`, backgroundColor: "#111111" }}
                      variants={circleVariants(element.color)}
                      transition={{ duration: 0.3 }}
                    >
                      {/* inner glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `radial-gradient(circle at center, ${element.color}1a 0%, transparent 68%)`,
                        }}
                        variants={glowVariants}
                        transition={{ duration: 0.3 }}
                      />

                      {/* number */}
                      <div
                        className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-3"
                        style={{
                          backgroundColor: `${element.color}18`,
                          color: element.color,
                          border: `1px solid ${element.color}45`,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* title */}
                      <h3
                        className="relative z-10 font-display text-gym-white leading-none mb-2.5"
                        style={{ fontSize: "22px", letterSpacing: "0.16em" }}
                      >
                        {element.title.split(" ").map((w, wi) => (
                          <span key={wi} className="block">{w}</span>
                        ))}
                      </h3>

                      {/* subtitle */}
                      <p
                        className="relative z-10 leading-snug"
                        style={{
                          fontSize: "11px",
                          color: element.color,
                          opacity: 0.85,
                          letterSpacing: "0.04em",
                          maxWidth: "170px",
                        }}
                      >
                        {element.subtitle}
                      </p>
                    </motion.div>

                    {/* ── "Pull the thread" indicator ── */}
                    <div className="flex flex-col items-center mt-1 pointer-events-none">
                      <motion.div
                        className="w-px"
                        style={{ backgroundColor: element.color }}
                        variants={threadVariants}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="w-[9px] h-[9px] rounded-full mt-0.5"
                        style={{ backgroundColor: element.color }}
                        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.4,
                        }}
                      />
                      <motion.span
                        className="font-semibold mt-2"
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.35em",
                          color: element.color,
                          textTransform: "uppercase",
                        }}
                        variants={enterVariants}
                        transition={{ duration: 0.25 }}
                      >
                        enter
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mt-12">
          {elements.map((element, i) => (
            <AnimateOnScroll key={element.slug} delay={i * 0.07} direction="up">
              <Link href={`/elements/${element.slug}`}>
                <div
                  className="relative border p-5 group cursor-pointer overflow-hidden transition-all duration-300 hover:bg-gym-card"
                  style={{ borderColor: `${element.color}28` }}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5"
                    style={{ backgroundColor: element.color }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${element.color}08 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{
                        backgroundColor: `${element.color}18`,
                        color: element.color,
                        border: `1px solid ${element.color}40`,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl tracking-wider text-gym-white leading-none">
                        {element.title}
                      </h3>
                      <p
                        className="text-[10px] tracking-widest uppercase mt-1 font-medium"
                        style={{ color: element.color }}
                      >
                        {element.subtitle}
                      </p>
                      <p className="text-gym-muted text-sm mt-3 leading-relaxed line-clamp-2">
                        {element.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="relative flex items-center gap-1.5 mt-4 text-[9px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 group-hover:gap-2.5"
                    style={{ color: element.color }}
                  >
                    <span>Follow the thread</span>
                    <ArrowRight size={10} />
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* ── CTA ── */}
        <AnimateOnScroll direction="up" delay={0.3}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gym-border bg-gym-card p-8">
            <div>
              <p className="font-display text-2xl tracking-widest text-gym-white">
                NOT SURE WHERE TO BEGIN?
              </p>
              <p className="text-gym-muted text-sm mt-1">
                Let us help you find the thread that calls to you — for free.
              </p>
            </div>
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="shrink-0 inline-flex items-center gap-2 bg-gym-red text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-gym-red-dark transition-colors duration-200 cursor-pointer"
            >
              Book Free Consultation
              <ArrowRight size={14} />
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
