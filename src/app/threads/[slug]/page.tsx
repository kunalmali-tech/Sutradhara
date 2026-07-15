import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PanelCard from "@/components/ui/PanelCard";
import ImageGallery from "@/components/ui/ImageGallery";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { GYM_AREA, SITE_URL, threads } from "@/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return threads.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const thread = threads.find((e) => e.slug === slug);
  if (!thread) return {};

  const title = thread.title;
  const withCta = `${thread.description} Join us in ${GYM_AREA} — book a free trial class today.`;
  const description =
    withCta.length <= 160
      ? withCta
      : thread.description.length <= 160
        ? thread.description
        : `${thread.description.slice(0, 157).replace(/\s+\S*$/, "")}…`;
  const url = `${SITE_URL}/threads/${thread.slug}`;
  const keywords = Array.from(
    new Set([
      thread.title.toLowerCase(),
      `${thread.title.toLowerCase()} pune`,
      `${thread.title.toLowerCase()} vimannagar`,
      thread.subtitle.toLowerCase(),
      ...thread.offerings.map((o) => o.toLowerCase()),
      "yoga studio pune",
      "sutradhara yoga",
    ])
  );

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/threads/${thread.slug}` },
    openGraph: {
      title: `${title} — ${thread.subtitle}`,
      description,
      url,
      type: "website",
      images: [
        {
          url: thread.heroImage,
          alt: `${thread.title} — ${thread.subtitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${thread.subtitle}`,
      description,
      images: [thread.heroImage],
    },
  };
}

export default async function ThreadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thread = threads.find((e) => e.slug === slug);
  if (!thread) notFound();

  const idx = threads.findIndex((e) => e.slug === slug);
  const next = threads[(idx + 1) % threads.length];
  const prev = threads[(idx - 1 + threads.length) % threads.length];

  // The hero photo and the "About This Path" photo are already shown up top —
  // they shouldn't also turn up in a panel or the main gallery further down.
  // Panels get first pick of what's left, then the main gallery is capped to
  // 6 from whatever hasn't already appeared in the hero, description, or a panel.
  const topImages = new Set<string>([thread.heroImage, ...(thread.images[0] ? [thread.images[0]] : [])]);
  const dropTopImages = (imgs: string[]) => imgs.filter((img) => !topImages.has(img));

  const introPanelImages = thread.introPanel
    ? dropTopImages(thread.introPanel.images).slice(0, 3)
    : undefined;
  const panelGalleryImages = (thread.panels ?? []).map((panel) =>
    dropTopImages(panel.images).slice(0, 3)
  );

  const panelImages = new Set<string>();
  for (const img of introPanelImages ?? []) panelImages.add(img);
  for (const imgs of panelGalleryImages) for (const img of imgs) panelImages.add(img);

  const galleryPairs = thread.images
    .slice(1)
    .map((img, i) => ({ img, position: thread.imagePositions?.slice(1)[i] }))
    .filter(({ img }) => !topImages.has(img) && !panelImages.has(img));
  const galleryImages = galleryPairs.map((p) => p.img);
  const galleryPositions = galleryPairs.map((p) => p.position ?? "center");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: thread.title,
    alternateName: thread.subtitle,
    description: thread.description,
    url: `${SITE_URL}/threads/${thread.slug}`,
    image: `${SITE_URL}${thread.heroImage}`,
    serviceType: thread.title,
    areaServed: { "@type": "City", name: "Pune" },
    audience: {
      "@type": "Audience",
      audienceType: thread.forWhom,
    },
    provider: {
      "@type": "ExerciseGym",
      "@id": `${SITE_URL}/#organization`,
      name: "TheSutraDhara",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "The Sutras", item: `${SITE_URL}/#services` },
      { "@type": "ListItem", position: 3, name: thread.title, item: `${SITE_URL}/threads/${thread.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="bg-gym-black min-h-screen">

        {/* ── HERO — full-bleed real photo ── */}
        <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
          {/* Photo background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thread.heroImage}
            alt={`${thread.title} — ${thread.subtitle}, TheSutraDhara, VimanNagar Pune`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: thread.heroImagePosition ?? "center" }}
          />

          {/* Layered overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/55 to-gym-black/10" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 30% 60%, ${thread.color}22 0%, transparent 65%)`,
            }}
          />

          {/* Top-left back link */}
          <div className="absolute top-32 left-0 right-0 z-10 container mx-auto px-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-gym-white/70 text-xs tracking-[0.2em] uppercase hover:text-gym-white transition-colors duration-200"
            >
              <ArrowLeft size={12} />
              All Threads
            </Link>
          </div>

          {/* Hero text — bottom */}
          <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: thread.color }} />
              <span
                className="text-[10px] font-semibold tracking-[0.35em] uppercase"
                style={{ color: thread.color }}
              >
                TheSutraDhara — Thread {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            <h1
              className="font-display leading-none tracking-widest text-gym-white"
              style={{ fontSize: "clamp(56px,11vw,150px)" }}
            >
              {thread.title.split(" ").map((word, i, arr) => (
                <span
                  key={i}
                  className="block"
                  style={i === arr.length - 1 ? { color: thread.color } : {}}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="mt-5 text-gym-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
              {thread.subtitle}
            </p>
            {thread.heroTagline && (
              <p className="mt-2 text-sm md:text-base max-w-xl leading-relaxed" style={{ color: thread.color }}>
                {thread.heroTagline}
              </p>
            )}
          </div>
        </section>

        {/* ── EVOLVING NOTE (for threads still being built out) ── */}
        {thread.evolvingNote && (
          <section className="py-10 bg-gym-black border-t border-gym-border">
            <div className="container mx-auto px-6">
              <div
                className="relative p-6 border"
                style={{ borderColor: `${thread.color}25`, background: `linear-gradient(135deg, ${thread.color}0c 0%, transparent 70%)` }}
              >
                <div className="absolute top-0 left-0 bottom-0 w-0.5" style={{ backgroundColor: thread.color }} />
                <p className="text-gym-muted text-base leading-relaxed pl-2 italic">
                  {thread.evolvingNote}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── DESCRIPTION ── */}
        <section className="py-20 bg-gym-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8" style={{ backgroundColor: thread.color }} />
                  <span
                    className="text-[10px] tracking-[0.3em] uppercase font-medium"
                    style={{ color: thread.color }}
                  >
                    About This Path
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C0C0C0]/20 to-transparent" />
                </div>

                <p
                  className="text-2xl md:text-3xl leading-relaxed font-light mb-8"
                  style={{ color: "rgba(245,240,232,0.92)" }}
                >
                  {thread.description}
                </p>
                <p className="text-gym-muted text-base leading-relaxed">
                  {thread.longDescription}
                </p>

                {thread.registrationLink && (
                  <a
                    href={thread.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase px-6 py-4 mt-8 text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: thread.color }}
                  >
                    Register Now
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>

              {/* Single tall portrait image — object-contain ensures no subject is cut */}
              <div className="relative bg-gym-black" style={{ aspectRatio: "3/4" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thread.images[0]}
                  alt={`${thread.title} — ${thread.subtitle}`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                {/* Bottom colour bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: thread.color }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── INTRO PANEL ── */}
        {thread.introPanel && (
          <section className="py-20 bg-gym-black border-t border-gym-border">
            <div className="container mx-auto px-6">
              <PanelCard panel={thread.introPanel} color={thread.color} galleryImages={introPanelImages} />
            </div>
          </section>
        )}

        {/* ── PANEL DETAILS ── */}
        {thread.panels && thread.panels.length > 0 && (
          <section className="py-20 bg-gym-black border-t border-gym-border">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-4 mb-16">
                <div className="h-px w-8" style={{ backgroundColor: thread.color }} />
                <span
                  className="text-[10px] font-semibold tracking-[0.4em] uppercase"
                  style={{ color: thread.color }}
                >
                  Panel Details
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#C0C0C0]/20 to-transparent" />
              </div>

              <div className="space-y-24">
                {thread.panels.map((panel, pi) => (
                  <div key={pi}>
                    {pi > 0 && (
                      <div
                        className="h-px mb-10"
                        style={{ background: `linear-gradient(to right, ${thread.color}40, transparent)` }}
                      />
                    )}
                    <PanelCard panel={panel} color={thread.color} galleryImages={panelGalleryImages[pi]} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── PHOTO GALLERY — fixed 6-slot grid, placeholders fill any gap ── */}
        <section className="py-20 bg-gym-black border-t border-gym-border">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px w-8" style={{ backgroundColor: thread.color }} />
              <span
                className="text-[10px] font-semibold tracking-[0.4em] uppercase"
                style={{ color: thread.color }}
              >
                Gallery
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#C0C0C0]/20 to-transparent" />
            </div>
            <ImageGallery
              images={galleryImages}
              imagePositions={galleryPositions}
              color={thread.color}
              label={thread.title}
              max={6}
            />
          </div>
        </section>

        {/* ── DETAILED PRACTICES (Hatha Sutra specific) ── */}
        {thread.detailedOfferings && thread.detailedOfferings.length > 0 && (
          <section className="py-20 bg-gym-black">
            <div className="container mx-auto px-6">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-16">
                <div className="h-px w-8" style={{ backgroundColor: thread.color }} />
                <span
                  className="text-[10px] font-semibold tracking-[0.4em] uppercase"
                  style={{ color: thread.color }}
                >
                  Offerings
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#C0C0C0]/20 to-transparent" />
              </div>

              <div className="space-y-20 md:space-y-28">
                {thread.detailedOfferings.map((practice, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                  >
                    {/* Image */}
                    <div
                      className={`relative bg-gym-surface ${i % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                      style={{ aspectRatio: "3/4" }}
                    >
                      {practice.image && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={practice.image}
                          alt={practice.title}
                          className="absolute inset-0 w-full h-full object-contain"
                        />
                      )}
                      {/* Colour accent bar at bottom */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ backgroundColor: thread.color }}
                      />
                    </div>

                    {/* Text */}
                    <div className={i % 2 === 1 ? "md:order-1" : "md:order-2"}>
                      {/* Number badge */}
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold mb-6"
                        style={{
                          backgroundColor: `${thread.color}18`,
                          color: thread.color,
                          border: `1px solid ${thread.color}45`,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <h3
                        className="font-display leading-none tracking-widest mb-6"
                        style={{
                          fontSize: "clamp(28px, 4vw, 48px)",
                          color: thread.color,
                        }}
                      >
                        {practice.title}
                      </h3>

                      <p className="text-gym-muted text-base leading-relaxed">
                        {practice.description}
                      </p>

                      {practice.benefits && practice.benefits.length > 0 && (
                        <ul className="space-y-2.5 mt-5">
                          {practice.benefits.map((benefit, bi) => (
                            <li key={bi} className="flex items-start gap-3 text-gym-muted text-sm leading-relaxed">
                              <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: thread.color }} />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── TEACHERS (thread-specific, e.g. Hatha Sutra) ── */}
        {thread.teachers && thread.teachers.length > 0 && (
          <section className="py-20 bg-gym-black border-t border-gym-border">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-4 mb-16">
                <div className="h-px w-8" style={{ backgroundColor: thread.color }} />
                <span
                  className="text-[10px] font-semibold tracking-[0.4em] uppercase"
                  style={{ color: thread.color }}
                >
                  Meet Your Teachers
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#C0C0C0]/20 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {thread.teachers.map((teacher) => (
                  <div key={teacher.name} className="flex gap-5 bg-gym-card border border-gym-border p-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={teacher.image}
                      alt={`${teacher.name} — ${thread.title} teacher`}
                      className="w-20 h-20 rounded-full object-cover shrink-0"
                      style={{ objectPosition: "center top" }}
                    />
                    <div>
                      <h3 className="font-display text-2xl tracking-wider text-gym-white leading-none">
                        {teacher.name}
                      </h3>
                      <p className="text-xs tracking-widest uppercase mt-1.5" style={{ color: thread.color }}>
                        {teacher.specialty}
                      </p>
                      <p className="text-gym-muted text-sm leading-relaxed mt-3">
                        {teacher.bio}
                      </p>
                    </div>
                  </div>
                ))}
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
            style={{ background: `linear-gradient(to right, transparent, ${thread.color}40, transparent)` }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(to right, transparent, ${thread.color}20, transparent)` }}
          />

          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Offerings */}
              <div>
                <p
                  className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-3"
                  style={{ color: thread.color }}
                >
                  What You&apos;ll Explore
                </p>
                <h2 className="font-display text-4xl md:text-5xl tracking-wide text-gym-white leading-none mb-10">
                  YOUR PATH<br />
                  <span style={{ color: thread.color }}>AWAITS</span>
                </h2>
                <ul className="space-y-4">
                  {thread.offerings.map((o, i) => (
                    <li key={i} className="flex items-start gap-4 text-gym-muted text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: thread.color }} />
                      {o}
                    </li>
                  ))}
                </ul>

                {thread.externalLinks && thread.externalLinks.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-8">
                    {thread.externalLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase px-5 py-3 border transition-colors duration-200"
                        style={{ borderColor: `${thread.color}45`, color: thread.color }}
                      >
                        {link.label}
                        <ArrowRight size={12} />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* For Whom */}
              <div>
                <p
                  className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-3"
                  style={{ color: thread.color }}
                >
                  Who This Is For
                </p>
                <h2 className="font-display text-4xl md:text-5xl tracking-wide text-gym-white leading-none mb-8">
                  IS THIS<br />
                  <span style={{ color: thread.color }}>YOUR THREAD?</span>
                </h2>

                <div
                  className="relative p-6 border"
                  style={{ borderColor: `${thread.color}20`, background: `linear-gradient(135deg, ${thread.color}07 0%, transparent 70%)` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, ${thread.color}50, transparent)` }} />
                  <div className="absolute top-0 left-0 bottom-0 w-0.5" style={{ backgroundColor: thread.color }} />
                  <p className="text-gym-muted text-base leading-relaxed pl-2">{thread.forWhom}</p>
                </div>
              </div>
            </div>

            {thread.closingNote && (
              <p className="text-gym-muted text-sm leading-relaxed mt-16 pt-10 border-t border-gym-border max-w-3xl">
                {thread.closingNote}
              </p>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-gym-black relative overflow-hidden">
          {/* background hero image faded */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thread.heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-contain opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/80 to-gym-black/60" />

          <div className="relative z-10 container mx-auto px-6 text-center">
            <p
              className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-4"
              style={{ color: thread.color }}
            >
              Begin Your Practice
            </p>
            <h2
              className="font-display tracking-widest text-gym-white leading-none mb-6"
              style={{ fontSize: "clamp(40px,7vw,96px)" }}
            >
              FOLLOW<br />
              <span style={{ color: thread.color }}>THE THREAD</span>
            </h2>
            <p className="text-gym-muted max-w-md mx-auto mb-10 leading-relaxed">
              Take the first step. Our team will guide you to the practice that calls to you — for free.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 text-white text-xs font-semibold tracking-[0.25em] uppercase px-10 py-4 transition-opacity hover:opacity-90"
              style={{ backgroundColor: thread.color }}
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
                href={`/threads/${prev.slug}`}
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
                href={`/threads/${next.slug}`}
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
