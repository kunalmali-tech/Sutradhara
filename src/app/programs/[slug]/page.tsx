import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { programs } from "@/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: `${program.title} — TheSutraDhara`,
    description: program.description,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const idx = programs.findIndex((p) => p.slug === slug);
  const next = programs[(idx + 1) % programs.length];
  const prev = programs[(idx - 1 + programs.length) % programs.length];

  return (
    <>
      <Header />
      <main className="bg-gym-black min-h-screen">

        {/* ── HERO — full-bleed real photo ── */}
        <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
          {/* Photo background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={program.heroImage}
            alt={program.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Layered overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/55 to-gym-black/10" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 30% 60%, ${program.color}22 0%, transparent 65%)`,
            }}
          />

          {/* Top-left back link */}
          <div className="absolute top-28 left-0 right-0 z-10 container mx-auto px-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-gym-white/70 text-xs tracking-[0.2em] uppercase hover:text-gym-white transition-colors duration-200"
            >
              <ArrowLeft size={12} />
              All Programs
            </Link>
          </div>

          {/* Hero text — bottom */}
          <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: program.color }} />
              <span
                className="text-[10px] font-semibold tracking-[0.35em] uppercase"
                style={{ color: program.color }}
              >
                TheSutraDhara — Program {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            <h1
              className="font-display leading-none tracking-widest text-gym-white"
              style={{ fontSize: "clamp(56px,11vw,150px)" }}
            >
              {program.title.split(" ").map((word, i, arr) => (
                <span
                  key={i}
                  className="block"
                  style={i === arr.length - 1 ? { color: program.color } : {}}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="mt-5 text-gym-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
              {program.subtitle}
            </p>
          </div>
        </section>

        {/* ── DESCRIPTION ── */}
        <section className="py-20 bg-gym-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8" style={{ backgroundColor: program.color }} />
                  <span
                    className="text-[10px] tracking-[0.3em] uppercase font-medium"
                    style={{ color: program.color }}
                  >
                    About This Path
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C0C0C0]/20 to-transparent" />
                </div>

                <p
                  className="text-2xl md:text-3xl leading-relaxed font-light mb-8"
                  style={{ color: "rgba(245,240,232,0.92)" }}
                >
                  {program.description}
                </p>
                <p className="text-gym-muted text-base leading-relaxed">
                  {program.longDescription}
                </p>
              </div>

              {/* Stacked portrait pair */}
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden h-72">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={program.images[0]}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {program.images[1] && (
                  <div className="overflow-hidden h-48">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={program.images[1]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── PHOTO GALLERY ── */}
        {program.images.length >= 3 && (
          <section className="bg-gym-black pb-4">
            <div className="container mx-auto px-6">
              {/* Silver accent top line */}
              <div
                className="h-px mb-4"
                style={{
                  background: `linear-gradient(to right, ${program.color}50, #C0C0C0/20, transparent)`,
                }}
              />
              <div className="grid grid-cols-12 gap-3 h-[420px]">
                {/* Large left */}
                <div className="col-span-7 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={program.images[2]}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  />
                </div>
                {/* Two stacked right */}
                <div className="col-span-5 flex flex-col gap-3">
                  {program.images[3] ? (
                    <>
                      <div className="flex-1 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={program.images[3]}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                        />
                      </div>
                      {/* Accent tile */}
                      <div
                        className="h-20 flex items-center justify-center"
                        style={{ backgroundColor: `${program.color}18`, border: `1px solid ${program.color}30` }}
                      >
                        <span
                          className="font-display text-2xl tracking-[0.3em]"
                          style={{ color: program.color }}
                        >
                          {program.title.split(" ")[0].toUpperCase()}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={program.images[0]}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── VIDEO ── */}
        {program.video && (
          <section className="py-16 bg-gym-black">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8" style={{ backgroundColor: program.color }} />
                <span
                  className="text-[10px] tracking-[0.3em] uppercase font-medium"
                  style={{ color: program.color }}
                >
                  In Practice
                </span>
              </div>
              <div className="relative overflow-hidden bg-gym-surface" style={{ border: `1px solid ${program.color}25` }}>
                {/* colour bar at top */}
                <div className="h-1 w-full" style={{ backgroundColor: program.color }} />
                <video
                  src={program.video}
                  controls
                  playsInline
                  className="w-full max-h-[520px] object-cover"
                  style={{ display: "block" }}
                />
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
            style={{ background: `linear-gradient(to right, transparent, ${program.color}40, transparent)` }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(to right, transparent, ${program.color}20, transparent)` }}
          />

          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Offerings */}
              <div>
                <p
                  className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-3"
                  style={{ color: program.color }}
                >
                  What You'll Explore
                </p>
                <h2 className="font-display text-4xl md:text-5xl tracking-wide text-gym-white leading-none mb-10">
                  YOUR PATH<br />
                  <span style={{ color: program.color }}>AWAITS</span>
                </h2>
                <ul className="space-y-4">
                  {program.offerings.map((o, i) => (
                    <li key={i} className="flex items-start gap-4 text-gym-muted text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: program.color }} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Whom */}
              <div>
                <p
                  className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-3"
                  style={{ color: program.color }}
                >
                  Who This Is For
                </p>
                <h2 className="font-display text-4xl md:text-5xl tracking-wide text-gym-white leading-none mb-8">
                  IS THIS<br />
                  <span style={{ color: program.color }}>YOUR THREAD?</span>
                </h2>

                <div
                  className="relative p-6 border"
                  style={{ borderColor: `${program.color}20`, background: `linear-gradient(135deg, ${program.color}07 0%, transparent 70%)` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, ${program.color}50, transparent)` }} />
                  <div className="absolute top-0 left-0 bottom-0 w-0.5" style={{ backgroundColor: program.color }} />
                  <p className="text-gym-muted text-base leading-relaxed pl-2">{program.forWhom}</p>
                </div>

                {/* Floating image beside text */}
                {program.images[1] && (
                  <div className="mt-6 overflow-hidden h-56">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={program.images[1]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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
            src={program.heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/80 to-gym-black/60" />

          <div className="relative z-10 container mx-auto px-6 text-center">
            <p
              className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-4"
              style={{ color: program.color }}
            >
              Begin Your Journey
            </p>
            <h2
              className="font-display tracking-widest text-gym-white leading-none mb-6"
              style={{ fontSize: "clamp(40px,7vw,96px)" }}
            >
              FOLLOW<br />
              <span style={{ color: program.color }}>THE THREAD</span>
            </h2>
            <p className="text-gym-muted max-w-md mx-auto mb-10 leading-relaxed">
              Take the first step. Our team will guide you to the practice that calls to you — for free.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 text-white text-xs font-semibold tracking-[0.25em] uppercase px-10 py-4 transition-opacity hover:opacity-90"
              style={{ backgroundColor: program.color }}
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
                href={`/programs/${prev.slug}`}
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
                href={`/programs/${next.slug}`}
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
