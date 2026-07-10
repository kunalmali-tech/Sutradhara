"use client";

import { HeartHandshake, CalendarHeart, BookOpen, Handshake, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { GYM_WHATSAPP } from "@/data";

const supportWays = [
  {
    icon: HeartHandshake,
    title: "Volunteer With Us",
    description: "Offer your time and skills to help our classes, events, and community initiatives run smoothly.",
  },
  {
    icon: CalendarHeart,
    title: "Support Events & Workshops",
    description: "Help us bring workshops, retreats, and special sessions to life — as a sponsor or an organiser on the ground.",
  },
  {
    icon: BookOpen,
    title: "Contribute Resources",
    description: "Share space, materials, or other resources that help us serve more students and grow our offerings.",
  },
  {
    icon: Handshake,
    title: "Partner / Collaborate",
    description: "Teachers, artists, and conscious brands — let's explore how we can collaborate and grow together.",
  },
];

export default function Support() {
  const whatsappHref = `https://wa.me/${GYM_WHATSAPP}?text=Namaste%21%20I%27d%20like%20to%20know%20more%20about%20supporting%20Sutradhara.`;

  return (
    <section id="support" className="py-24 md:py-32 bg-gym-black">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Get Involved"
          title="SUPPORT THE THREAD"
          align="center"
          subtitle="TheSutraDhara grows through the hands and hearts of its community. Here's how you can be part of it."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {supportWays.map((way, i) => (
            <AnimateOnScroll key={way.title} delay={i * 0.08} direction="up">
              <div className="h-full bg-gym-card border border-gym-border p-6 hover:border-gym-red/50 transition-colors duration-300">
                <div className="w-11 h-11 bg-gym-red/10 border border-gym-red/20 flex items-center justify-center mb-5">
                  <way.icon size={18} className="text-gym-red" />
                </div>
                <h3 className="font-display text-xl tracking-wider text-gym-white mb-2">
                  {way.title}
                </h3>
                <p className="text-gym-muted text-sm leading-relaxed">
                  {way.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll direction="up" delay={0.2} className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-gym-border bg-gym-card p-8">
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl tracking-widest text-gym-white">
                WANT TO HELP?
              </p>
              <p className="text-gym-muted text-sm mt-1">
                Reach out and let&apos;s find the right way for you to contribute.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-white px-6 py-4 transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 bg-gym-red text-white text-xs font-semibold tracking-[0.2em] uppercase px-6 py-4 hover:bg-gym-red-dark transition-colors duration-200 cursor-pointer"
              >
                Contact Form
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
