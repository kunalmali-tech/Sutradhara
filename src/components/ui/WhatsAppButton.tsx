"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { GYM_WHATSAPP } from "@/data";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const tooltipTimer = setTimeout(() => setTooltip(false), 6000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const href = `https://wa.me/${GYM_WHATSAPP}?text=Namaskara%21%20I%20have%20viewed%20the%20website%20and%20I%20have%20a%20doubt%20regarding%20`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-white text-gray-800 text-xs font-semibold px-4 py-2.5 shadow-xl whitespace-nowrap relative"
              >
                Begin your journey towards wellness
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-transparent border-l-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
            style={{ backgroundColor: "#25D366" }}
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: "#25D366" }} />
            {/* WhatsApp SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="white"
              className="w-7 h-7 relative z-10"
            >
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.489-2.002A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.771-1.849l-.487-.289-5.037 1.187 1.214-4.896-.317-.503A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.265-9.861c-.398-.199-2.355-1.162-2.72-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.262 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.978-1.183-1.057-1.981-2.363-2.213-2.761-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.266-.398.399-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.776-.653-.671-.897-.683l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.362-1.396 3.323s1.429 3.854 1.628 4.12c.199.266 2.812 4.294 6.813 6.023.952.411 1.695.657 2.274.841.955.304 1.825.261 2.513.158.766-.115 2.355-.963 2.688-1.893.332-.931.332-1.729.232-1.893-.099-.166-.365-.266-.763-.465z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
