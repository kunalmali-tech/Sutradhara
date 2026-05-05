import {
  Leaf,
  Waves,
  Moon,
  Wind,
  Flame,
  Star,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

export interface Trainer {
  name: string;
  specialty: string;
  bio: string;
  image: string;
  certifications: string[];
  instagram: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  months: number;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const GYM_PHONE = "06383303101";
export const GYM_WHATSAPP = "916383303101";
export const GYM_ADDRESS =
  "Lane Number 14, behind airport, Khese Park, Lohegaon, Pune, Maharashtra 411032";
export const GYM_EMAIL = "namaste@sutradhara.in";

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years of Teaching" },
  { value: 300, suffix: "+", label: "Students Guided" },
  { value: 4, suffix: "", label: "Expert Teachers" },
  { value: 20, suffix: "+", label: "Classes Per Week" },
];

export const services: Service[] = [
  {
    icon: Leaf,
    title: "Hatha Yoga",
    description:
      "The classical foundation of all yoga. A mindful practice of postures, breath, and alignment that builds strength from within and cultivates lasting body awareness.",
    tag: "Foundation",
  },
  {
    icon: Waves,
    title: "Vinyasa Flow",
    description:
      "Dynamic breath-synchronized sequences that weave movement and meditation into a single, fluid practice — building strength, flexibility, and grace together.",
    tag: "Flow",
  },
  {
    icon: Moon,
    title: "Yin & Restorative",
    description:
      "Deep, passive stretches held for 3–5 minutes release connective tissue tension, calm the nervous system, and invite profound stillness into the body.",
    tag: "Restore",
  },
  {
    icon: Wind,
    title: "Pranayama",
    description:
      "Ancient breathing disciplines that expand vital energy, sharpen mental clarity, and harmonize the body's inner systems — the bridge between body and mind.",
    tag: "Breathe",
  },
  {
    icon: Flame,
    title: "Power Yoga",
    description:
      "A vigorous, fitness-focused practice that builds core strength, stamina, and heat — challenging every muscle while staying rooted in yogic principles.",
    tag: "Ignite",
  },
  {
    icon: Star,
    title: "Private Sessions",
    description:
      "One-on-one guidance tailored entirely to your unique body, goals, and pace. Experience the depth of practice that only personal, undivided attention can unlock.",
    tag: "Personal",
  },
];

export const trainers: Trainer[] = [
  {
    name: "Harkirat",
    specialty: "Founder & Head Teacher — Isha Hatha Yoga",
    bio: "Harkirat is an Isha Hatha Yoga certified teacher and the founder of Sutradhara. Trained directly in the Isha tradition, she brings extraordinary precision, discipline, and warmth to every class. Students describe her as deeply attentive — she connects with each person, corrects postures carefully, and ensures the practice goes far beyond the physical into genuine transformation.",
    image: "/images/image10.jpg",
    certifications: ["Isha Hatha Yoga Certified Teacher", "Yogasanas Specialist", "Surya Kriya & Angamardana"],
    instagram: "@sutradhara.yoga",
  },
  {
    name: "Arjun Nair",
    specialty: "Pranayama & Meditation — RYT 500",
    bio: "Arjun specializes in the science of breath and sitting practices. His calm, methodical teaching style helps students build a pranayama foundation that transforms energy, clarity, and inner stillness.",
    image: "/images/image6.jpg",
    certifications: ["RYT-500 Yoga Alliance", "Pranayama & Breathwork", "Mindfulness Meditation"],
    instagram: "@sutradhara.yoga",
  },
  {
    name: "Priya Mehta",
    specialty: "Yin & Restorative Yoga — RYT 300",
    bio: "Priya's gentle, nurturing approach to Yin Yoga helps students release chronic tension and reconnect with their body's natural intelligence. Her classes are quiet, healing spaces for deep restoration.",
    image: "/images/image11.jpg",
    certifications: ["RYT-300", "Yin Yoga Certification", "Restorative & Trauma-Informed"],
    instagram: "@sutradhara.yoga",
  },
  {
    name: "Vikram Kulkarni",
    specialty: "Power Yoga & Alignment — RYT 500",
    bio: "Vikram blends athletic rigor with yogic wisdom. His Power Yoga classes challenge the body deeply while grounding practitioners in alignment principles and mindful, present-moment awareness.",
    image: "/images/image9.jpg",
    certifications: ["RYT-500", "Power & Ashtanga Yoga", "Sports Science & Yoga"],
    instagram: "@sutradhara.yoga",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sreepriya Sridharan",
    role: "Google Review ★★★★★",
    image: "",
    quote:
      "This was my first experience with a one-on-one Yogasanas class with an Isha Hatha Yoga certified teacher, and I must say it was truly an enriching experience. Harkirat akka pays so much attention to detail and makes sure that you do the asanas right! Her discipline and dedication towards her students is inspiring. I'm grateful that her class is available in Pune, just 5 mins from the airport! Her yoga studio completely reminds me of Isha Yoga Centre — somehow the vibe resonates the same. Thank you Kirat Di for being there and helping me learn. 🙏",
    rating: 5,
    months: 3,
  },
  {
    name: "Pratiksha Yadav",
    role: "Google Review ★★★★★",
    image: "",
    quote:
      "Namaskaram everyone 🙏 Just go experience this place for yourself — you will fall in love with it. Akka is super supportive, but also disciplined to ensure that you are doing your practice every day. She takes review classes to ensure you are getting the postures correct. The ambience and location are perfect for getting back on track. If you really want to learn Hatha yoga in full depth, do visit this place. Start your spiritual journey today!",
    rating: 5,
    months: 12,
  },
  {
    name: "SD Bhavani Chamarthy",
    role: "Google Review ★★★★★",
    image: "",
    quote:
      "Best place to learn yoga in Pune. Harkirat akka makes sure that she connects with each and every participant to understand what difficulties they have and she also gives corrections which help improve postures. The practices are impactful. Thank you akka.",
    rating: 5,
    months: 4,
  },
  {
    name: "Edwin Chang",
    role: "Google Review ★★★★★",
    image: "",
    quote:
      "I wanted to share my positive experience at this yoga center. The classes were incredibly calming and helped me find a sense of peace. The teachers were all very knowledgeable and provided excellent guidance. I felt like I gained a much better understanding of the practice. I highly recommend exploring yoga here for anyone seeking both physical and mental well-being.",
    rating: 5,
    months: 5,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Teachers", href: "#trainers" },
  { label: "Contact", href: "#contact" },
];
