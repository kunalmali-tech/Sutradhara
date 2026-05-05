"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { GYM_ADDRESS, GYM_EMAIL, GYM_PHONE, GYM_WHATSAPP } from "@/data";

interface FormData {
  name: string;
  email: string;
  phone: string;
  goal: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  goal: "",
  message: "",
};

const hours = [
  { day: "Monday – Saturday", time: "6:00 AM – 8:00 PM" },
  { day: "Sunday", time: "7:00 AM – 12:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const whatsappHref = `https://wa.me/${GYM_WHATSAPP}?text=Namaste%21%20I%27d%20like%20to%20know%20more%20about%20Sutradhara%20Yoga%20Studio.`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-gym-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <AnimateOnScroll direction="left">
            <div>
              <p className="text-gym-red text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Get In Touch
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none tracking-wide text-gym-white mb-6">
                BEGIN
                <br />
                YOUR
                <br />
                <span className="text-gym-red">PRACTICE.</span>
              </h2>
              <p className="text-gym-muted text-base leading-relaxed mb-8 max-w-sm">
                Reach out on WhatsApp or fill in the form — our teachers will
                get back to you within a few hours to arrange your free trial
                class.
              </p>

              {/* WhatsApp CTA — primary action */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mb-10 px-6 py-4 font-semibold text-sm tracking-wider text-white transition-opacity hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-5 h-5 shrink-0">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.489-2.002A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.265 19.472c-.398-.199-2.355-1.162-2.72-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.262 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.978-1.183-1.057-1.981-2.363-2.213-2.761-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.266-.398.399-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.776-.653-.671-.897-.683l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.362-1.396 3.323s1.429 3.854 1.628 4.12c.199.266 2.812 4.294 6.813 6.023.952.411 1.695.657 2.274.841.955.304 1.825.261 2.513.158.766-.115 2.355-.963 2.688-1.893.332-.931.332-1.729.232-1.893-.099-.166-.365-.266-.763-.465z" />
                </svg>
                Message us on WhatsApp
              </a>

              {/* Contact details */}
              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: "Address", value: GYM_ADDRESS, href: `https://maps.google.com/?q=${encodeURIComponent(GYM_ADDRESS)}` },
                  { icon: Phone, label: "Phone", value: GYM_PHONE, href: `tel:${GYM_PHONE}` },
                  { icon: Mail, label: "Email", value: GYM_EMAIL, href: `mailto:${GYM_EMAIL}` },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gym-red/10 border border-gym-red/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-gym-red" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-widest uppercase text-gym-muted mb-0.5">
                        {label}
                      </div>
                      <a
                        href={href}
                        target={label === "Address" ? "_blank" : undefined}
                        rel={label === "Address" ? "noopener noreferrer" : undefined}
                        className="text-gym-white text-sm hover:text-gym-red transition-colors duration-200"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gym-white mb-4">
                  <Clock size={13} className="text-gym-red" />
                  Class Hours
                </div>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-gym-muted">{h.day}</span>
                      <span className="text-gym-white font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right — Form */}
          <AnimateOnScroll direction="right">
            <div className="bg-gym-card border border-gym-border p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-16 text-center gap-4"
                >
                  <CheckCircle size={56} className="text-gym-red" />
                  <h3 className="font-display text-3xl tracking-wider text-gym-white">
                    NAMASTE!
                  </h3>
                  <p className="text-gym-muted text-sm max-w-xs">
                    Thank you, {form.name.split(" ")[0]}! A teacher will reach out
                    soon. Your journey begins here.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-3 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-4 h-4">
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.489-2.002A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.265 19.472c-.398-.199-2.355-1.162-2.72-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.262 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.978-1.183-1.057-1.981-2.363-2.213-2.761-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.266-.398.399-.664.133-.266.066-.398.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.776-.653-.671-.897-.683l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.362-1.396 3.323s1.429 3.854 1.628 4.12c.199.266 2.812 4.294 6.813 6.023.952.411 1.695.657 2.274.841.955.304 1.825.261 2.513.158.766-.115 2.355-.963 2.688-1.893.332-.931.332-1.729.232-1.893-.099-.166-.365-.266-.763-.465z" />
                    </svg>
                    Also WhatsApp us
                  </a>
                  <button
                    onClick={() => { setForm(initialForm); setSubmitted(false); }}
                    className="text-xs text-gym-muted underline underline-offset-2 cursor-pointer hover:text-gym-red transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold tracking-[0.2em] uppercase text-gym-muted block mb-2">
                        Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-gym-surface border border-gym-border text-gym-white placeholder:text-gym-muted/50 px-4 py-3 text-sm transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold tracking-[0.2em] uppercase text-gym-muted block mb-2">
                        Phone *
                      </label>
                      <input
                        required
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full bg-gym-surface border border-gym-border text-gym-white placeholder:text-gym-muted/50 px-4 py-3 text-sm transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-[0.2em] uppercase text-gym-muted block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-gym-surface border border-gym-border text-gym-white placeholder:text-gym-muted/50 px-4 py-3 text-sm transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-[0.2em] uppercase text-gym-muted block mb-2">
                      My Primary Goal
                    </label>
                    <select
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      className="w-full bg-gym-surface border border-gym-border text-gym-white px-4 py-3 text-sm appearance-none cursor-pointer transition-colors duration-200"
                    >
                      <option value="" className="bg-gym-card">Select your goal...</option>
                      <option value="stress-relief" className="bg-gym-card">Stress Relief & Relaxation</option>
                      <option value="flexibility" className="bg-gym-card">Flexibility & Strength</option>
                      <option value="meditation" className="bg-gym-card">Meditation & Mindfulness</option>
                      <option value="weight" className="bg-gym-card">Weight Management</option>
                      <option value="spiritual" className="bg-gym-card">Spiritual Growth</option>
                      <option value="general" className="bg-gym-card">General Wellness</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-[0.2em] uppercase text-gym-muted block mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your experience level, any injuries, or questions..."
                      className="w-full bg-gym-surface border border-gym-border text-gym-white placeholder:text-gym-muted/50 px-4 py-3 text-sm resize-none transition-colors duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gym-red hover:bg-gym-red-dark text-white py-4 text-sm font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>

                  <div className="relative flex items-center gap-3">
                    <div className="flex-1 border-t border-gym-border" />
                    <span className="text-gym-muted text-xs">or</span>
                    <div className="flex-1 border-t border-gym-border" />
                  </div>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 text-sm font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 text-white transition-opacity hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-4 h-4">
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.489-2.002A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.265 19.472c-.398-.199-2.355-1.162-2.72-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.262 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.978-1.183-1.057-1.981-2.363-2.213-2.761-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.266-.398.399-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.776-.653-.671-.897-.683l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.362-1.396 3.323s1.429 3.854 1.628 4.12c.199.266 2.812 4.294 6.813 6.023.952.411 1.695.657 2.274.841.955.304 1.825.261 2.513.158.766-.115 2.355-.963 2.688-1.893.332-.931.332-1.729.232-1.893-.099-.166-.365-.266-.763-.465z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
