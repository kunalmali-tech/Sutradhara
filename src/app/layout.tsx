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
  title: "Sutradhara Yoga Studio | Breathe. Bend. Become.",
  description:
    "Sutradhara is Pune's premier yoga studio in Lohegaon, offering Hatha, Vinyasa, Yin, Pranayama, and Power Yoga classes. Expert certified teachers in a sacred, welcoming space.",
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
    title: "Sutradhara Yoga Studio | Breathe. Bend. Become.",
    description:
      "A sacred space for transformative yoga practice in Lohegaon, Pune. Discover stillness, strength, and serenity with certified expert teachers.",
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
