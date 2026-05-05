"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { services } from "@/data";
import { cn } from "@/lib/utils";

const cardColors = [
  "from-amber-950/40 to-transparent",
  "from-teal-950/30 to-transparent",
  "from-indigo-950/30 to-transparent",
  "from-orange-950/40 to-transparent",
  "from-red-950/40 to-transparent",
  "from-yellow-950/30 to-transparent",
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gym-surface clip-diagonal-top clip-diagonal-bottom">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Our Programs"
          title="WHAT WE OFFER"
          subtitle="Six authentic yoga disciplines crafted to meet you wherever you are on your journey to wholeness."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gym-border">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateOnScroll
                key={service.title}
                delay={i * 0.08}
                direction="up"
              >
                <div
                  className={cn(
                    "group relative bg-gym-card p-8 overflow-hidden",
                    "hover:bg-gym-surface transition-all duration-500",
                    "cursor-default"
                  )}
                >
                  {/* Gradient bg on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      cardColors[i]
                    )}
                  />

                  {/* Left accent line */}
                  <div className="absolute left-0 top-0 w-0.5 h-0 bg-gym-red group-hover:h-full transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Tag */}
                    <span className="inline-block text-[10px] font-semibold tracking-[0.25em] uppercase text-gym-red border border-gym-red/30 px-2.5 py-1 mb-6">
                      {service.tag}
                    </span>

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-gym-red/10 border border-gym-red/20 flex items-center justify-center group-hover:bg-gym-red group-hover:border-gym-red transition-all duration-300">
                        <Icon
                          size={22}
                          className="text-gym-red group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-3xl tracking-wider text-gym-white mb-3 group-hover:text-gym-red transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gym-muted text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gym-muted group-hover:text-gym-red transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <AnimateOnScroll direction="up" delay={0.3}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gym-border bg-gym-card p-8">
            <div>
              <p className="font-display text-2xl tracking-widest text-gym-white">
                NOT SURE WHICH CLASS IS RIGHT FOR YOU?
              </p>
              <p className="text-gym-muted text-sm mt-1">
                Our teachers will guide you to the perfect practice — for free.
              </p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
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
