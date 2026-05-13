import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import VideoBackground from "@/components/ui/VideoBackground";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { elements } from "@/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return elements.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const element = elements.find((e) => e.slug === slug);
  if (!element) return {};
  return {
    title: `${element.title} — TheSutraDhara`,
    description: element.description,
  };
}

export default async function ElementPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const element = elements.find((e) => e.slug === slug);
  if (!element) notFound();

  const idx = elements.findIndex((e) => e.slug === slug);
  const next = elements[(idx + 1) % elements.length];
  const prev = elements[(idx - 1 + elements.length) % elements.length];

  return (
    <>
      <Header />
      <main className="bg-gym-black min-h-screen">

        {/* ── HERO — full-bleed real photo ── */}
        <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
          {/* Photo background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={element.heroImage}
            alt={element.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: element.heroImagePosition ?? "center" }}
          />

          {/* Layered overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/55 to-gym-black/10" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 30% 60%, ${element.color}22 0%, transparent 65%)`,
            }}
          />

          {/* Top-left back link */}
          <div className="absolute top-28 left-0 right-0 z-10 container mx-auto px-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-gym-white/70 text-xs tracking-[0.2em] uppercase hover:text-gym-white transition-colors duration-200"
            >
              <ArrowLeft size={12} />
              All Elements
            </Link>
          </div>

          {/* Hero text — bottom */}
          <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: element.color }} />
              <span
                className="text-[10px] font-semibold tracking-[0.35em] uppercase"
                style={{ color: element.color }}
              >
                TheSutraDhara — Element {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            <h1
              className="font-display leading-none tracking-widest text-gym-white"
              style={{ fontSize: "clamp(56px,11vw,150px)" }}
            >
              {element.title.split(" ").map((word, i, arr) => (
                <span
                  key={i}
                  className="block"
                  style={i === arr.length - 1 ? { color: element.color } : {}}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="mt-5 text-gym-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
              {element.subtitle}
            </p>
          </div>
        </section>

        {/* ── DESCRIPTION ── */}
        <section className="py-20 bg-gym-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8" style={{ backgroundColor: element.color }} />
                  <span
                    className="text-[10px] tracking-[0.3em] uppercase font-medium"
                    style={{ color: element.color }}
                  >
                    About This Path
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C0C0C0]/20 to-transparent" />
                </div>

                <p
                  className="text-2xl md:text-3xl leading-relaxed font-light mb-8"
                  style={{ color: "rgba(245,240,232,0.92)" }}
                >
                  {element.description}
                </p>
                <p className="text-gym-muted text-base leading-relaxed">
                  {element.longDescription}
                </p>
              </div>

              {/* Single tall portrait image — object-contain ensures no subject is cut */}
              <div className="relative bg-gym-black" style={{ aspectRatio: "3/4" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={element.images[0]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain"
                />
                {/* Bottom colour bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: element.color }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── PHOTO GALLERY — aspect-ratio grid handles vertical phone photos ── */}
        {element.images.length >= 2 && (
          <section className="bg-gym-black py-3">
            <div className="container mx-auto px-6">
              <div
                className="h-px mb-3"
                style={{ background: `linear-gradient(to right, ${element.color}50, transparent)` }}
              />
              {/* 3-column portrait grid — object-contain shows full image, black bg hides bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {element.images.slice(1, 4).map((img, i) => (
                  <div
                    key={i}
                    className="relative bg-gym-black"
                    style={{ aspectRatio: "3/4" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                    {/* Hover colour tint */}
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `linear-gradient(to top, ${element.color}30 0%, transparent 50%)` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── VIDEO ── */}
        {element.video && (
          <section className="relative h-[500px] md:h-[620px] overflow-hidden">
            <VideoBackground
              src={element.video}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark gradient overlay so surrounding sections flow into it */}
            <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/40 to-gym-black/20" />
            {/* Colour tint from element accent */}
            <div
              className="absolute inset-0"
              style={{ background: `radial-gradient(ellipse at center, ${element.color}18 0%, transparent 65%)` }}
            />
            {/* Small label bottom-left */}
            <div className="absolute bottom-10 left-0 right-0 container mx-auto px-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8" style={{ backgroundColor: element.color }} />
                <span
                  className="text-[10px] tracking-[0.35em] uppercase font-semibold"
                  style={{ color: element.color }}
                >
                  In Practice
                </span>
              </div>
            </div>
          </section>
        )}

        {/* ── OFFERINGS + FOR WHOM ── */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#111111" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(to right, transparent, ${element.color}40, transparent)` }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(to right, transparent, ${element.color}20, transparent)` }}
          />

          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Offerings */}
              <div>
                <p
                  className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-3"
                  style={{ color: element.color }}
                >
                  What You'll Explore
                </p>
                <h2 className="font-display text-4xl md:text-5xl tracking-wide text-gym-white leading-none mb-10">
                  YOUR PATH<br />
                  <span style={{ color: element.color }}>AWAITS</span>
                </h2>
                <ul className="space-y-4">
                  {element.offerings.map((o, i) => (
                    <li key={i} className="flex items-start gap-4 text-gym-muted text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: element.color }} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Whom */}
              <div>
                <p
                  className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-3"
                  style={{ color: element.color }}
                >
                  Who This Is For
                </p>
                <h2 className="font-display text-4xl md:text-5xl tracking-wide text-gym-white leading-none mb-8">
                  IS THIS<br />
                  <span style={{ color: element.color }}>YOUR THREAD?</span>
                </h2>

                <div
                  className="relative p-6 border"
                  style={{ borderColor: `${element.color}20`, background: `linear-gradient(135deg, ${element.color}07 0%, transparent 70%)` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, ${element.color}50, transparent)` }} />
                  <div className="absolute top-0 left-0 bottom-0 w-0.5" style={{ backgroundColor: element.color }} />
                  <p className="text-gym-muted text-base leading-relaxed pl-2">{element.forWhom}</p>
                </div>

                {/* Supporting image — object-contain so full subject always visible */}
                {element.images[2] && (
                  <div className="mt-6 relative bg-gym-black" style={{ aspectRatio: "3/4" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={element.images[2]}
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-gym-black relative overflow-hidden">
          {/* background hero image faded */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={element.heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-contain opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/80 to-gym-black/60" />

          <div className="relative z-10 container mx-auto px-6 text-center">
            <p
              className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-4"
              style={{ color: element.color }}
            >
              Begin Your Practice
            </p>
            <h2
              className="font-display tracking-widest text-gym-white leading-none mb-6"
              style={{ fontSize: "clamp(40px,7vw,96px)" }}
            >
              FOLLOW<br />
              <span style={{ color: element.color }}>THE THREAD</span>
            </h2>
            <p className="text-gym-muted max-w-md mx-auto mb-10 leading-relaxed">
              Take the first step. Our team will guide you to the practice that calls to you — for free.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 text-white text-xs font-semibold tracking-[0.25em] uppercase px-10 py-4 transition-opacity hover:opacity-90"
              style={{ backgroundColor: element.color }}
            >
              Book a Free Consultation
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── PREV / NEXT ── */}
        <section className="border-t border-gym-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 divide-x divide-gym-border">
              <Link
                href={`/elements/${prev.slug}`}
                className="group py-8 pr-8 flex flex-col gap-2 hover:bg-gym-card transition-colors duration-200 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, ${prev.color}08, transparent)` }}
                />
                <span className="text-[9px] tracking-[0.3em] uppercase text-gym-muted flex items-center gap-2">
                  <ArrowLeft size={9} /> Previous
                </span>
                <span className="font-display text-xl tracking-widest text-gym-white group-hover:text-gym-red transition-colors duration-200">
                  {prev.title}
                </span>
                <span className="text-[10px]" style={{ color: prev.color }}>{prev.subtitle}</span>
              </Link>
              <Link
                href={`/elements/${next.slug}`}
                className="group py-8 pl-8 flex flex-col gap-2 items-end text-right hover:bg-gym-card transition-colors duration-200 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to left, ${next.color}08, transparent)` }}
                />
                <span className="text-[9px] tracking-[0.3em] uppercase text-gym-muted flex items-center gap-2">
                  Next <ArrowRight size={9} />
                </span>
                <span className="font-display text-xl tracking-widest text-gym-white group-hover:text-gym-red transition-colors duration-200">
                  {next.title}
                </span>
                <span className="text-[10px]" style={{ color: next.color }}>{next.subtitle}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
