import { MapPin, Phone, Mail } from "lucide-react";
import { IconInstagram, IconFacebook, IconYoutube } from "@/components/ui/SocialIcons";
import { GYM_ADDRESS, GYM_EMAIL, GYM_PHONE, GYM_WHATSAPP } from "@/data";

const footerLinks = {
  Elements: ["Hatha Sutra", "Jeevan Sutra", "Kala Dhara", "Sangeet Dhara", "Veer Dhara", "Vastra Dhara", "Gau Sutra"],
  Studio: ["About Us", "Our Teachers", "Timetable", "Blog", "Workshops"],
  Support: ["Beginner's Guide", "Class Schedule", "Membership FAQ", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-gym-surface border-t border-gym-border">
      {/* Marquee bar */}
      <div className="bg-gym-red overflow-hidden py-3">
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="font-display text-lg tracking-[0.3em] text-white px-8">
              THESUTRADHARA &nbsp;·&nbsp; WISDOM. WELLNESS. WHOLENESS. &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <div className="absolute w-5 h-5 border-2 border-gym-red rotate-45" />
                <div className="w-1.5 h-1.5 rounded-full bg-gym-red" />
              </div>
              <span className="font-display text-2xl tracking-widest">
                THESUTRA<span className="text-gym-red">DHARA</span>
              </span>
            </div>
            <p className="text-gym-muted text-sm leading-relaxed max-w-xs mb-6">
              A sacred space in VimanNagar, Pune — where ancient yoga wisdom
              meets modern life, and every breath becomes a step toward transformation.
            </p>
            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-sm text-gym-muted">
                <MapPin size={14} className="text-gym-red mt-0.5 shrink-0" />
                <span>{GYM_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gym-muted">
                <Phone size={14} className="text-gym-red shrink-0" />
                <a href={`tel:${GYM_PHONE}`} className="hover:text-gym-red transition-colors">
                  {GYM_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gym-muted">
                <Mail size={14} className="text-gym-red shrink-0" />
                <a href={`mailto:${GYM_EMAIL}`} className="hover:text-gym-red transition-colors">
                  {GYM_EMAIL}
                </a>
              </div>
            </div>
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${GYM_WHATSAPP}?text=Namaste%21%20I%27d%20like%20to%20know%20more%20about%20Sutradhara%20Yoga%20Studio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-widest uppercase text-white px-4 py-2.5 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-4 h-4">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.489-2.002A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.265 19.472c-.398-.199-2.355-1.162-2.72-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.262 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.978-1.183-1.057-1.981-2.363-2.213-2.761-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.266-.398.399-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.776-.653-.671-.897-.683l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.362-1.396 3.323s1.429 3.854 1.628 4.12c.199.266 2.812 4.294 6.813 6.023.952.411 1.695.657 2.274.841.955.304 1.825.261 2.513.158.766-.115 2.355-.963 2.688-1.893.332-.931.332-1.729.232-1.893-.099-.166-.365-.266-.763-.465z" />
              </svg>
              Chat on WhatsApp
            </a>
            {/* Socials */}
            <div className="flex items-center gap-4">
              {[
                { Icon: IconInstagram, label: "Instagram", href: "https://www.instagram.com/breath.balance.being?igsh=bHE4Z3Y5NDhjZHhu&utm_source=qr" },
                { Icon: IconFacebook, label: "Facebook", href: "#" },
                { Icon: IconYoutube, label: "YouTube", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 border border-gym-border flex items-center justify-center text-gym-muted hover:border-gym-red hover:text-gym-red transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gym-white mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gym-muted hover:text-gym-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gym-border">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gym-muted">
            © {new Date().getFullYear()} TheSutraDhara, VimanNagar, Pune. All rights reserved.
          </p>
          <p className="text-xs text-gym-muted">
            Mon–Sat: 6:00 AM – 8:00 PM &nbsp;|&nbsp; Sunday: 7:00 AM – 12:00 PM
          </p>
        </div>
      </div>
    </footer>
  );
}
