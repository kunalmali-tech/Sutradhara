"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Quote, CheckCircle2 } from "lucide-react";
import ImageGallery from "@/components/ui/ImageGallery";
import type { Panel } from "@/data";

interface Props {
  panel: Panel;
  color: string;
  /** Overrides panel.images for display — used to drop photos already shown elsewhere on the page. */
  galleryImages?: string[];
}

export default function PanelCard({ panel, color, galleryImages }: Props) {
  const images = galleryImages ?? panel.images;
  const [expanded, setExpanded] = useState(false);
  const [previewSection, ...restSections] = panel.sections;
  const testimonials = panel.testimonials ?? [];
  const hasMore =
    restSections.length > 0 ||
    testimonials.length > 0 ||
    !!panel.quote ||
    !!panel.signature?.length;

  const layout = panel.layout ?? "stacked";

  const previewBlock = previewSection && (
    <div>
      {previewSection.heading && (
        <h4 className="text-lg font-semibold mb-3" style={{ color }}>
          {previewSection.heading}
        </h4>
      )}
      {previewSection.paragraphs.map((p, pgi) => (
        <p key={pgi} className="text-gym-muted text-base leading-relaxed mb-4">
          {p}
        </p>
      ))}
      {previewSection.bullets && previewSection.bullets.length > 0 && (
        <ul className="space-y-3">
          {previewSection.bullets.map((b, bi) => (
            <li key={bi} className="flex items-start gap-3 text-gym-muted text-sm leading-relaxed">
              <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color }} />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const expandBlock = (
    <>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 overflow-hidden"
          >
            {restSections.map((section, si) => (
              <div key={si}>
                {section.heading && (
                  <h4 className="text-lg font-semibold mb-3" style={{ color }}>
                    {section.heading}
                  </h4>
                )}
                {section.paragraphs.map((p, pgi) => (
                  <p key={pgi} className="text-gym-muted text-base leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {section.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-gym-muted text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {panel.quote && (
              <div
                className="relative p-6 border"
                style={{
                  borderColor: `${color}20`,
                  background: `linear-gradient(135deg, ${color}07 0%, transparent 70%)`,
                }}
              >
                <div className="absolute top-0 left-0 bottom-0 w-0.5" style={{ backgroundColor: color }} />
                <p className="text-gym-white text-lg italic leading-relaxed pl-2">
                  “{panel.quote}”
                </p>
              </div>
            )}

            {panel.signature && panel.signature.length > 0 && (
              <div className="text-right">
                {panel.signature.map((line, li) => (
                  <p
                    key={li}
                    className={
                      li === 0
                        ? "text-gym-white font-semibold tracking-wide"
                        : "text-gym-muted text-sm"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}

            {testimonials.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Quote size={16} style={{ color }} />
                  <p className="text-[10px] font-semibold tracking-[0.3em] uppercase" style={{ color }}>
                    {panel.testimonialsHeading ?? "What Students Say"}
                  </p>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C0C0C0]/20 to-transparent" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {testimonials.map((t, ti) => (
                    <div
                      key={ti}
                      className="relative p-5 border bg-gym-card"
                      style={{ borderColor: `${color}1a` }}
                    >
                      <div className="absolute top-0 left-0 bottom-0 w-0.5" style={{ backgroundColor: color }} />
                      <p className="text-gym-muted text-sm leading-relaxed italic pl-2">
                        “{t.quote}”
                      </p>
                      <p className="text-gym-white text-xs font-semibold tracking-wide mt-4 pl-2">
                        {t.author}
                        {t.location && (
                          <span className="text-gym-muted font-normal"> — {t.location}</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {hasMore && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer transition-opacity hover:opacity-80"
          style={{ color }}
        >
          {expanded ? "Show Less" : "Read More"}
          <ChevronDown
            size={14}
            className="transition-transform duration-300"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      )}
    </>
  );

  const profilePhoto = panel.profileImage && (
    <div className="relative bg-gym-black overflow-hidden w-full max-w-xs" style={{ aspectRatio: "1/1" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={panel.profileImage}
        alt={panel.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: color }} />
    </div>
  );

  const nameRoleHeader = (
    <>
      {panel.role && (
        <p
          className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-3"
          style={{ color }}
        >
          {panel.role}
        </p>
      )}
      <h3
        className="font-display leading-none tracking-widest text-gym-white"
        style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
      >
        {panel.name}
      </h3>
    </>
  );

  return (
    <div>
      {layout === "photo-left" && (
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-12 items-start mb-2">
          <div className="md:sticky md:top-28">
            {panel.profileImage && (
              <div className="relative bg-gym-black overflow-hidden mb-4" style={{ aspectRatio: "1/1" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={panel.profileImage}
                  alt={panel.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: color }} />
              </div>
            )}
            {nameRoleHeader}
          </div>
          <div className="max-w-3xl space-y-8">
            {previewBlock}
            {expandBlock}
          </div>
        </div>
      )}

      {layout === "photo-below" && (
        <>
          <div className="mb-10">{nameRoleHeader}</div>
          <div className="max-w-3xl space-y-8">
            {previewBlock}
            {profilePhoto && <div className="mb-2">{profilePhoto}</div>}
            {expandBlock}
          </div>
        </>
      )}

      {layout === "stacked" && (
        <>
          <div className="mb-10">
            {panel.title && (
              <p
                className="text-[10px] font-semibold tracking-[0.35em] uppercase mb-3"
                style={{ color }}
              >
                {panel.title}
              </p>
            )}
            <h3
              className="font-display leading-none tracking-widest text-gym-white mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              {panel.name}
            </h3>
            {panel.tagline && (
              <p className="text-gym-muted text-base md:text-lg leading-relaxed max-w-2xl">
                {panel.tagline}
              </p>
            )}
          </div>
          <div className="max-w-3xl space-y-8">
            {previewBlock}
            {expandBlock}
          </div>
        </>
      )}

      <div className="mt-12">
        <ImageGallery images={images} color={color} label={panel.name} max={3} />
      </div>
    </div>
  );
}
