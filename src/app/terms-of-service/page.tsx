import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { GYM_EMAIL } from "@/data";

export const metadata: Metadata = {
  title: "Terms of Service | TheSutraDhara",
  description:
    "Terms covering class registrations, cancellations, health responsibility, code of conduct, and intellectual property for TheSutraDhara.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="bg-gym-black min-h-screen py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-gym-red text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Legal
          </p>
          <h1 className="font-display text-5xl md:text-6xl tracking-wide text-gym-white leading-none mb-10">
            TERMS OF SERVICE
          </h1>

          <div className="space-y-10 text-gym-muted text-sm leading-relaxed">
            <p>
              These terms cover your participation in classes, workshops, and events with
              TheSutraDhara. By registering for or attending a session, you agree to the
              terms below.
            </p>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Class Registrations
              </h2>
              <p>
                Registration for any class, workshop, or element is confirmed once we have
                received your details through our contact form, WhatsApp, or the Hatha Sutra
                registration form, and your spot has been confirmed by a member of our team.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Cancellations & Refunds
              </h2>
              <p>
                Fees paid for a class, workshop, or program are non-refundable once the
                session or program has begun. If you need to cancel before it begins, let us
                know at least 24 hours in advance and we&apos;ll transfer your fee to a future
                session or offer a full refund, at your preference. Cancellations made with
                less than 24 hours&apos; notice may be credited toward a future session at our
                discretion. If we cancel or reschedule a session, you&apos;ll always be offered
                a full refund or a spot in the rescheduled session.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Health Responsibility
              </h2>
              <p>
                Participants are responsible for informing their teacher of any injuries,
                medical conditions, or pregnancy before a session, and for practising within
                their own physical limits. Please consult a physician before beginning any
                new physical practice if you have health concerns.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Code of Conduct
              </h2>
              <p>
                We ask all students and participants to treat teachers, fellow students, and
                the practice space with respect, courtesy, and punctuality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on this website — including text, photos, and videos — belongs to
                TheSutraDhara or is used with permission, and may not be reproduced without
                consent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Assumption of Risk & Indemnity
              </h2>
              <p>
                Yoga, martial arts, dance, and other physical practices offered by
                TheSutraDhara carry an inherent risk of injury. By participating, you
                acknowledge this risk and confirm that you are physically fit to take part, or
                have consulted a physician where needed. You agree to release and hold
                harmless TheSutraDhara, its facilitators, and its teachers from any liability
                for injury, loss, or damage arising from your voluntary participation, except
                where caused by our negligence.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Contact Us
              </h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${GYM_EMAIL}`} className="text-gym-red hover:underline">
                  {GYM_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
