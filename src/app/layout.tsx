import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { GYM_AREA, GYM_EMAIL, GYM_PHONE } from "@/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thesutradhara.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TheSutraDhara | Wisdom. Wellness. Wholeness.",
  description:
    "TheSutraDhara is a Pune-based studio in VimanNagar offering classical Hatha Yoga, Kalaripayattu, classical music (Naad Yoga & mantra chanting), Bharatanatyam, and conscious clothing — guided by certified facilitators in a sacred, welcoming space.",
  keywords: [
    "yoga studio pune",
    "hatha yoga pune",
    "kalaripayattu pune",
    "classical music naad yoga",
    "mantra chanting classes",
    "bharatanatyam classes pune",
    "conscious clothing india",
    "indian handlooms",
    "vinyasa flow pune",
    "yoga lohegaon",
    "pranayama pune",
    "meditation pune",
    "sutradhara yoga",
    "yoga classes pune",
    "yoga near airport pune",
  ],
  openGraph: {
    title: "TheSutraDhara | Wisdom. Wellness. Wholeness.",
    description:
      "A sacred space for transformative yoga, classical music, dance, and martial arts practice in VimanNagar, Pune.",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "TheSutraDhara",
  description:
    "A Pune-based wellness studio offering classical Hatha Yoga, Kalaripayattu, classical music, Bharatanatyam, and conscious clothing.",
  telephone: GYM_PHONE,
  email: GYM_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: GYM_AREA,
    addressCountry: "IN",
  },
  image: `${SITE_URL}/opengraph-image`,
  sameAs: ["https://www.instagram.com/breath.balance.being"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="bg-gym-black text-gym-white overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
