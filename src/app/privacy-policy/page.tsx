import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { GYM_EMAIL } from "@/data";

export const metadata: Metadata = {
  title: "Privacy Policy | TheSutraDhara",
  description:
    "How TheSutraDhara collects, uses, and protects information shared through our forms and registrations.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-gym-black min-h-screen py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-gym-red text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Legal
          </p>
          <h1 className="font-display text-5xl md:text-6xl tracking-wide text-gym-white leading-none mb-10">
            PRIVACY POLICY
          </h1>

          <div className="space-y-10 text-gym-muted text-sm leading-relaxed">
            <p>
              TheSutraDhara (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This
              policy explains what information we collect through this website, how we use
              it, and the choices you have. It applies to thesutradhara.com and any forms
              linked from it.
            </p>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Information We Collect
              </h2>
              <p className="mb-3">We only collect information you choose to give us, through:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Our website contact form — name, phone number, email address, your primary goal, and any message you write.</li>
                <li>WhatsApp — if you message us directly, we receive your name (as saved in your WhatsApp profile), phone number, and the content of your messages.</li>
                <li>Registration forms (e.g. the Hatha Sutra registration form) — details relevant to your class or workshop registration, including any health information you choose to disclose for safety purposes.</li>
              </ul>
              <p className="mt-3">
                We do not use cookies, analytics, or advertising trackers on this website at
                this time. If that changes in the future, this policy will be updated to
                reflect it before any such tool goes live.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your enquiry and get in touch about classes, workshops, or events.</li>
                <li>To manage your registration and keep you informed about sessions you&apos;ve signed up for.</li>
                <li>To take reasonable account of any health information you share, for your safety during in-person practice.</li>
              </ul>
              <p className="mt-3">We do not use your information for marketing by third parties, and we do not use it for any purpose beyond the above.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                How Your Information Is Stored
              </h2>
              <p>
                Messages submitted through our contact form are delivered directly to our
                email inbox via Resend, our email-sending provider — we do not store
                submissions in a database on this website. WhatsApp messages are stored in
                WhatsApp per Meta&apos;s own terms and privacy policy, which governs that
                platform. Registration form details are stored securely and used only by our
                team for the purpose you submitted them.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Sharing of Information
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We
                only share information with the service providers that help us run this
                website and communicate with you (such as our email-delivery provider,
                Resend), and only to the extent needed to provide that service. These
                providers are not permitted to use your information for their own purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Data Retention
              </h2>
              <p>
                We keep enquiry and registration information for as long as needed to respond
                to you, manage your registration, and maintain reasonable business records —
                and no longer than necessary for those purposes. You can ask us to delete your
                information at any time; see &ldquo;Your Rights&rdquo; below.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Children&apos;s Privacy
              </h2>
              <p>
                Some of our classes are offered to children, with a parent or guardian
                completing registration on their behalf. We only collect a child&apos;s
                information when a parent or guardian submits it for that purpose, and we use
                it solely to manage the class registration.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Your Rights
              </h2>
              <p>
                You can ask us at any time to access, correct, or delete the personal
                information we hold about you, or to stop contacting you. To do so, email us
                at the address below and we will action your request promptly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this policy from time to time — for example, if we start using
                cookies or analytics tools. Any changes will be posted on this page.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-gym-white mb-4">
                Contact Us
              </h2>
              <p>
                Questions about this policy, or requests regarding your data, can be sent to{" "}
                <a href={`mailto:${GYM_EMAIL}`} className="text-gym-red hover:underline">
                  {GYM_EMAIL}
                </a>
                .
              </p>
            </section>

            <p className="text-xs text-gym-muted/60 pt-4 border-t border-gym-border">
              Last updated: July 2026.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
