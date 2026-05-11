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
  { value: 5, suffix: "+", label: "Facilitators" },
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

export interface Program {
  slug: string;
  title: string;
  subtitle: string;
  color: string;
  description: string;
  longDescription: string;
  offerings: string[];
  forWhom: string;
  heroImage: string;
  images: string[];
  video?: string;
}

const BASE = "/images/Sutradhara%20Website%20Images";

export const programs: Program[] = [
  {
    slug: "hatha-sutra",
    title: "Hatha Sutra",
    subtitle: "Unveil the Yogi Within",
    color: "#E8831A",
    heroImage: `${BASE}/Hatha%20Sutra/20221205_074237.jpg`,
    images: [
      `${BASE}/Hatha%20Sutra/IMG-20221022-WA0010.jpg`,
      `${BASE}/Hatha%20Sutra/IMG-20240111-WA0000.jpg`,
      `${BASE}/Hatha%20Sutra/20241024_163201.jpeg`,
      `${BASE}/Hatha%20Sutra/Photos-videos%20for%20Hatha%20Sutra/Hatha%20Sutra/IMG_20230119_153058_271.jpg`,
    ],
    video: `${BASE}/Hatha%20Sutra/Photos-videos%20for%20Hatha%20Sutra/Hatha%20Sutra/20230107_175543.mp4`,
    description:
      "The foundational thread — where body, breath, and awareness come into precise alignment through the classical science of Hatha Yoga.",
    longDescription:
      "Hatha Sutra is a return to the source. Rooted in classical Hatha Yoga as taught through the Isha tradition, this program guides you through precise asanas, conscious pranayama, and meditative stillness. Each session is an invitation to inhabit your body more fully — to feel the intelligence that already lives within you. Through disciplined, attentive practice, the outer form becomes a gateway inward.",
    offerings: [
      "Classical Hatha Asanas with precision alignment",
      "Pranayama — the foundational science of breath",
      "Introduction to yogic philosophy and inner work",
      "Individual corrections and personalised guidance",
      "Structured progression from foundation to advanced postures",
    ],
    forWhom:
      "Open to all — beginners finding their footing, seasoned practitioners deepening their sadhana, and anyone called back to the classical roots of yoga.",
  },
  {
    slug: "jeevan-sutra",
    title: "Jeevan Sutra",
    subtitle: "A Personality Developed in Rhythm with Nature",
    color: "#6BAA75",
    heroImage: `${BASE}/Jeevan%20Sutra/20191216_135119.jpg`,
    images: [
      `${BASE}/Jeevan%20Sutra/IMG-20191216-WA0009.jpg`,
      `${BASE}/Jeevan%20Sutra/IMG-20191216-WA0014.jpg`,
      "/images/image7.jpg",
    ],
    description:
      "A holistic thread for the whole person — weaving yogic wisdom and natural rhythms into the fabric of who you are and how you live.",
    longDescription:
      "Jeevan Sutra is more than a yoga program — it is a path of becoming. Drawing from yogic philosophy, Ayurvedic wisdom, and the rhythms of nature, this program helps you cultivate a personality that is grounded, radiant, and in harmony with life itself. Each offering weaves practice into daily living, so transformation becomes not something you do — but a way of being.",
    offerings: [
      "Yogic philosophy applied to daily life",
      "Nature-aligned daily rhythms (dinacharya)",
      "Personality mapping and inner self-inquiry",
      "Breathwork for emotional intelligence and regulation",
      "Guided reflection practices for conscious living",
    ],
    forWhom:
      "For those seeking not just physical wellbeing but a deeper sense of self — people ready to bring their inner and outer worlds into alignment.",
  },
  {
    slug: "kala-dhara",
    title: "Kala Dhara",
    subtitle: "Where Art Becomes a Living Expression",
    color: "#9B7FBE",
    heroImage: `${BASE}/Vastra%20Dhara/4d17bf9e-ec2f-4eb5-9a30-9905f16f20a9.jpg`,
    images: [
      `${BASE}/Vastra%20Dhara/5869622f-0501-424b-a980-24bdc1f771e3.jpg`,
      `${BASE}/Vastra%20Dhara/8cc1f648-5c95-49d2-998c-88b1f452bb04.jpg`,
      `${BASE}/Vastra%20Dhara/IMG_0251.JPG`,
    ],
    description:
      "A flowing thread of movement and creativity — where the body becomes a canvas and practice becomes a living work of art.",
    longDescription:
      "Kala Dhara bridges the inner and outer worlds through art and movement. In this program, yoga becomes a form of living artistry — where the precision of asana meets the freedom of creative expression. Drawing from movement arts, the storytelling traditions of the body, and expressive practices rooted in Indian classical forms, Kala Dhara invites you to rediscover yourself as an artist in constant motion.",
    offerings: [
      "Expressive movement and free-form flow practice",
      "Storytelling through the body — gesture, mudra, gaze",
      "Integration of dance elements within the yogic framework",
      "Breathwork for creative opening and inner release",
      "Reflective art and journaling alongside movement",
    ],
    forWhom:
      "For artists, performers, and creatives — and for anyone who has ever felt the pull to express something beyond words. No art or dance background required.",
  },
  {
    slug: "sangeet-dhara",
    title: "Sangeet Dhara",
    subtitle: "An Expression of the Divine Through Sound",
    color: "#5B9BD5",
    heroImage: `${BASE}/Sangeet%20Dhara/IMG_0062.JPG`,
    images: [
      `${BASE}/Sangeet%20Dhara/IMG_0025.JPG`,
      `${BASE}/Sangeet%20Dhara/IMG_0036.JPG`,
      `${BASE}/Sangeet%20Dhara/IMG-20210613-WA0011.jpg`,
      `${BASE}/Sangeet%20Dhara/IMG_0058.JPG`,
    ],
    video: `${BASE}/Sangeet%20Dhara/1753714245027711.mp4`,
    description:
      "A vibrating thread of sound and silence — where mantra, music, and deep listening become living paths of transformation.",
    longDescription:
      "Sound is vibration, and vibration is life. Sangeet Dhara explores yoga through the medium of sound — through mantra, nada (inner sound), chanting, and the profound science of conscious listening. This program weaves ancient sound traditions with present-moment awareness, inviting participants to use their voice, their breath, and their stillness as instruments of inner transformation. Here, music is not performance — it is prayer.",
    offerings: [
      "Mantra chanting — accessible to all voices",
      "Nada Yoga — the yoga of inner sound and vibration",
      "Breathwork through toning and sound",
      "Sound meditation and the art of deep listening",
      "Introduction to Bhakti and devotional practice",
    ],
    forWhom:
      "For those drawn to music, devotion, sound healing, and the transformative power of the human voice. Open to all, regardless of musical background.",
  },
  {
    slug: "veer-dhara",
    title: "Veer Dhara",
    subtitle: "Awaken the Warrior Within",
    color: "#C94A4A",
    heroImage: "/images/image4.jpg",
    images: [
      "/images/image13.jpg",
      "/images/image10.jpg",
      "/images/image5.jpg",
    ],
    description:
      "A fierce and vital thread — where physical strength, yogic courage, and the spirit of the inner warrior are forged through dedicated practice.",
    longDescription:
      "Veer Dhara is yoga for those called to strength — not just of the body, but of character. Grounded in warrior asana sequences, dynamic breath practices, and the philosophy of the inner warrior (the Veer), this program builds physical power alongside mental resilience, sharp focus, and fearlessness. Here, the yoga mat becomes a training ground for life — every challenge on the mat a mirror for the challenges beyond it.",
    offerings: [
      "Dynamic warrior sequences and power flow practice",
      "Core and functional strength rooted in yogic principles",
      "Breathwork for mental focus, clarity, and stamina",
      "Yogic warrior philosophy — courage, discipline, and purpose",
      "Meditation practices for resilience and inner fortitude",
    ],
    forWhom:
      "For those seeking to build strength, overcome self-imposed limitation, and forge a mind-body connection rooted in genuine courage and discipline.",
  },
  {
    slug: "gau-sutra",
    title: "Gau Sutra",
    subtitle: "Honouring the Sacred Science of Nourishment",
    color: "#88A85C",
    heroImage: `${BASE}/Gau%20Sutra/IMG-20240414-WA0025.jpg`,
    images: [
      `${BASE}/Gau%20Sutra/20231128_171514.jpg`,
      `${BASE}/Gau%20Sutra/20240216_163902.jpg`,
      `${BASE}/Gau%20Sutra/20231204_121542.jpg`,
    ],
    video: `${BASE}/Gau%20Sutra/20231204_120839.mp4`,
    description:
      "A nurturing thread connecting us back to the earth — where food, nature, and the ancient wisdom of nourishment are honoured as sacred.",
    longDescription:
      "Gau Sutra is an offering rooted in the ancient Indian understanding that nourishment itself is sacred. The word 'Gau' evokes abundance, the sacred cow, and the deep relationship between human beings, the earth, and the sustenance it offers. This program weaves Ayurvedic nutrition, conscious eating practices, yogic lifestyle, and reverence for natural cycles into a complete path of nourishment — for the body, the mind, and the spirit.",
    offerings: [
      "Ayurvedic principles of nutrition and the three doshas",
      "Conscious eating — mindful preparation and relationship with food",
      "Yoga practices for digestion, metabolic health, and vitality",
      "Seasonal living and alignment with natural rhythms",
      "The sacred science of herbs, spices, and natural remedies",
    ],
    forWhom:
      "For those seeking a deeper, more reverent relationship with food, the body, and the earth — and a return to natural, conscious nourishment.",
  },
];
