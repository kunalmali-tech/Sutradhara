import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { GYM_EMAIL, GYM_PHONE, GYM_WHATSAPP, SITE_URL, threads, trainers } from "@/data";

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

// Curated high-intent local search terms, extended with one generated from
// every thread's own title/subtitle so new threads automatically add their
// keywords here without anyone needing to remember to update this list.
const CURATED_KEYWORDS = [
  "yoga studio pune",
  "yoga studio vimannagar",
  "hatha yoga pune",
  "classical hatha yoga pune",
  "kalaripayattu pune",
  "classical music naad yoga",
  "mantra chanting classes",
  "bharatanatyam classes pune",
  "conscious clothing india",
  "indian handlooms",
  "vinyasa flow pune",
  "yoga lohegaon",
  "yoga classes near pune airport",
  "pranayama pune",
  "meditation classes pune",
  "sutradhara yoga",
  "yoga classes pune",
  "yoga near airport pune",
  "isha hatha yoga pune",
  "best yoga studio pune",
];

const threadKeywords = threads.flatMap((t) => [
  t.title.toLowerCase(),
  `${t.title.toLowerCase()} pune`,
  t.subtitle.toLowerCase(),
]);

const SEO_KEYWORDS = Array.from(new Set([...CURATED_KEYWORDS, ...threadKeywords]));

const SITE_TITLE = "TheSutraDhara | Yoga Studio in VimanNagar, Pune";
const SITE_DESCRIPTION =
  "Pune's studio for classical Hatha Yoga, Kalaripayattu, classical music, Bharatanatyam & conscious living in VimanNagar — book your free trial class today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | TheSutraDhara",
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Dr. Harkirat Kaur" }],
  creator: "Dr. Harkirat Kaur",
  publisher: "TheSutraDhara",
  category: "Health & Wellness",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description:
      "A sacred space for transformative yoga, classical music, dance, and martial arts practice in VimanNagar, Pune.",
    url: SITE_URL,
    siteName: "TheSutraDhara",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "A sacred space for transformative yoga, classical music, dance, and martial arts practice in VimanNagar, Pune.",
    images: ["/opengraph-image"],
  },
};

const founder = trainers[0];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": `${SITE_URL}/#organization`,
  name: "TheSutraDhara",
  alternateName: "The Sutradhara",
  description:
    "A Pune-based wellness studio offering classical Hatha Yoga, Kalaripayattu, classical music, Bharatanatyam, and conscious clothing.",
  url: SITE_URL,
  telephone: GYM_PHONE,
  email: GYM_EMAIL,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Place", name: "VimanNagar, Pune" },
    { "@type": "Place", name: "Lohegaon, Pune" },
    { "@type": "City", name: "Pune" },
  ],
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/opengraph-image`,
  sameAs: [
    "https://www.instagram.com/breath.balance.being",
    "https://www.facebook.com/share/1Gvsumvdqb/?mibextid=wwXIfr",
    "https://www.youtube.com/@harkiratkaur5394",
    `https://wa.me/${GYM_WHATSAPP}`,
  ],
  founder: {
    "@type": "Person",
    name: founder.name,
    jobTitle: "Founder & Visionary",
    description: founder.bio,
    image: `${SITE_URL}${founder.image}`,
    alumniOf: "Sadhguru Gurukulam",
    knowsAbout: ["Classical Hatha Yoga", "Isha Hatha Yoga", "Yogic Philosophy"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Sutras — Living Threads of Practice",
    itemListElement: threads.map((t) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: t.title,
        description: t.description,
        url: `${SITE_URL}/threads/${t.slug}`,
      },
    })),
  },
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
