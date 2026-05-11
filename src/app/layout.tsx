import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "TheSutraDhara | Wisdom. Wellness. Wholeness.",
  description:
    "TheSutraDhara is Pune's premier yoga studio in VimanNagar, offering Hatha, Vinyasa, Yin, Pranayama, and more. Expert certified facilitators in a sacred, welcoming space.",
  keywords: [
    "yoga studio pune",
    "hatha yoga pune",
    "vinyasa flow pune",
    "yoga lohegaon",
    "pranayama pune",
    "yin yoga pune",
    "meditation pune",
    "sutradhara yoga",
    "yoga classes pune",
    "yoga near airport pune",
  ],
  openGraph: {
    title: "TheSutraDhara | Wisdom. Wellness. Wholeness.",
    description:
      "A sacred space for transformative yoga practice in VimanNagar, Pune. Discover wisdom, wellness, and wholeness with certified expert facilitators.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
