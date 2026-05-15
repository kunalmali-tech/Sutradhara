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
  email?: string;
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
  "Khese Park, Lohegaon, Pune, Maharashtra 411032";
export const GYM_EMAIL = "hathasutra@gmail.com";

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
    name: "Dr. Harkirat Kaur",
    specialty: "PhD Humanities | MBA (Marketing) | Author",
    bio: "A basketball player, athlete, biker, and entrepreneur — Dr. Harkirat has lived life at full intensity. She pursued her PhD in Humanities and MBA in Marketing simultaneously, while running her own Event Management Company, teaching, and volunteering at NGOs. Her spiritual anchor arrived through Inner Engineering, leading her through Bhava Spandana, the Shoonya Intensive, and the Silence Program — culminating in 1750+ hours of training under the Sadhguru Gurukulam. Yoga, for her, is not a practice — it is life itself.",
    image: "/images/image14.avif",
    certifications: ["PhD in Humanities", "MBA in Marketing", "Classical Hatha Yoga Instructor certified by Sadhguru Gurukulam"],
    instagram: "@sutradhara.yoga",
    email: "sutradhara@gmail.com",
  },
  {
    name: "SD Bhavani Chamarthy",
    specialty: "MSc. Counselling Psychology | PGD Art and Play Therapy | Artist",
    bio: "From a young age, Bhavani felt a deep calling to support others in achieving their highest well-being. Her psychology thesis on the well-being of yoga practitioners revealed yoga's profound impact on mental and emotional health, inspiring her to weave yogic practices into her clinical work. This path led her to Isha Yoga, and in 2020 she completed the 1750+ hour Isha Hatha Yoga Teacher Training Program — a life-changing experience that transformed not only her understanding of yoga but the very way she lives. She now shares classical Hatha Yoga as a timeless science of holistic well-being, accessible to all.",
    image: "/images/image15.avif",
    certifications: ["MSc Counselling Psychology", "PGD Art & Play Therapy", "1750+ hr Isha Hatha Yoga TTP"],
    instagram: "@sutradhara.yoga",
  },
  {
    name: "Dushyant Singh",
    specialty: "Bachelors in Computer Application | Graphic Designer",
    bio: "Driven by a passion for computers, Dushyant's life took a beautiful turn when his Guru invited him onto an unknown path. Three years under his guidance reshaped him from within. Since 2018, he has served as a full-time volunteer at the Isha Yoga Center, immersed in yoga practices. The pandemic planted a seed within him to share yoga's gifts with others, inspiring him to complete the intensive 1750+ hour Hatha Yoga Teacher Training Program. Today, alongside freelance graphic design, he teaches Hatha Yoga full-time — finding immense joy in guiding others toward well-being and self-transformation.",
    image: "/images/image16.avif",
    certifications: ["BCA", "1750+ hr Isha Hatha Yoga TTP", "Full-time Isha Volunteer since 2018"],
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
  { label: "Facilitators", href: "#trainers" },
  { label: "Contact", href: "#contact" },
];

export interface DetailedOffering {
  title: string;
  description: string;
  image?: string;
}

export interface SutraElement {
  slug: string;
  title: string;
  subtitle: string;
  color: string;
  description: string;
  longDescription: string;
  offerings: string[];
  detailedOfferings?: DetailedOffering[];
  forWhom: string;
  heroImage: string;
  heroImagePosition?: string;
  images: string[];
  imagePositions?: string[];
  video?: string;
}

const BASE = "/images/Sutradhara%20Website%20Images";

export const elements: SutraElement[] = [
  {
    slug: "hatha-sutra",
    title: "Hatha Sutra",
    subtitle: "Unveil the Yogi Within",
    color: "#E8831A",
    heroImage: `${BASE}/Hatha%20Sutra/20221205_074237.jpg`,
    heroImagePosition: "center 30%",
    images: [
      `${BASE}/Hatha%20Sutra/IMG-20221022-WA0010.jpg`,
      `${BASE}/Hatha%20Sutra/IMG-20240111-WA0000.jpg`,
      `${BASE}/Hatha%20Sutra/20241024_163201.jpeg`,
      `${BASE}/Hatha%20Sutra/Photos-videos%20for%20Hatha%20Sutra/Hatha%20Sutra/IMG_20230119_153058_271.jpg`,
    ],
    imagePositions: ["center 40%", "center top", "center top", "center top"],
    video: `${BASE}/Hatha%20Sutra/Photos-videos%20for%20Hatha%20Sutra/Hatha%20Sutra/20230107_175543.mp4`,
    description:
      "The foundational thread — where body, breath, and awareness come into precise alignment through the classical science of Hatha Yoga.",
    longDescription:
      "Hatha Sutra is a return to the source. Rooted in classical Hatha Yoga as taught through the Sadhguru Gurukulam tradition, this element guides you through precise asanas, conscious breathwork, and meditative stillness. Each session is an invitation to inhabit your body more fully — to feel the intelligence that already lives within you. Through disciplined, attentive practice, the outer form becomes a gateway inward.",
    offerings: [
      "Classical Hatha Yoga with alignment",
      "Pranayama — the foundational science of breath",
      "Individual corrections and personalised guidance",
      "Structured progression from foundation to advanced postures",
    ],
    detailedOfferings: [
      {
        title: "UPA YOGA",
        description:
          "Upa-yoga is a simple yet powerful system of exercise that activates the joints, muscles, and energy system. Based on a sophisticated understanding of the body's mechanics, Upa-yoga dispels inertia in the body's energy and brings ease to the whole system. It relieves physical stress and tiredness.",
        image: "/images/image17.avif",
      },
      {
        title: "ANGAMARDANA",
        description:
          "Angamardana, a fitness system rooted in yoga, offers everyone the opportunity to invigorate the body and reach peak physical and mental health. 'Angamardana' means gaining complete mastery over the limbs, organs, and other parts of the body. True to its name, this practice revitalizes the body on all levels including the muscles, circulatory system, skeletal structure, nervous system, and the basic energy system.",
        image: "/images/image18.avif",
      },
      {
        title: "SURYA KRIYA",
        description:
          "Surya Kriya is a potent yogic practice of tremendous antiquity, designed as a holistic process for health, wellness, and complete inner well-being. 'Surya' means 'sun,' and 'kriya' means 'inner energy process.' Surya Kriya activates the solar plexus to raise the samat prana, or solar heat, in the system. It also balances a person's left and right energy channels, leading to stability of the body and stillness of the mind. This strong foundation becomes the basis to explore higher dimensions of life.",
        image: "/images/image19.avif",
      },
      {
        title: "SURYA SHAKTI",
        description:
          "Surya Shakti builds the physical body — it makes the sinews and ligaments of your body strong. In Yoga, we give importance to the sinews that hold the skeletal system and the whole body together. When we do any yogic practice, which is physical in nature, the focus is mainly to strengthen those, not to pump up your muscles. Strengthening the sinews of the body is what will endure for a long time and keep you well. Surya Shakti does this in a tremendous way.",
        image: "/images/image20.avif",
      },
      {
        title: "YOGASANAS",
        description:
          "The word asana literally means a posture. Out of the innumerable asanas a body can assume, 84 have been identified as Yogasanas, through which one can transform the body and mind into a possibility for ultimate well-being. Yogasanas are not exercises, but rather very subtle processes to manipulate one's energy in a particular direction.",
        image: "/images/image21.avif",
      },
      {
        title: "SHANMUKHI MUDRA",
        description:
          "Shanmukhi mudra is a simple but subtle practice that brightens and rejuvenates the face and eyes and brings about a state of balance leading toward increased awareness and meditativeness.",
        image: "/images/image22.avif",
      },
      {
        title: "JALA NETI",
        description:
          "Jala Neti is a process of cleansing the nasal passages with salt water. This allows breathing to become free so that air can enter the lungs unimpeded by mucus and dirt which easily builds up during the day.",
        image: "/images/image23.avif",
      },
      {
        title: "PREGNANCY PRACTICES",
        description:
          "Pregnancy practices are specially designed for pregnant mothers to bring more awareness about the pregnancy period and teach them how to keep their body, mind, and emotion in a pleasant way, in order to experience a joyful pregnancy.",
        image: "/images/image24.avif",
      },
      {
        title: "CHILDREN'S SURYA SHAKTI",
        description:
          "Cultivate the right kind of daily regime and habit of yogic practice in children at a young age, helping them blossom into balanced, aware, and joyful human beings.",
        image: "/images/image25.avif",
      },
      {
        title: "EYE PRACTICES",
        description:
          "Eye care practices we offer are a natural way to improve vision-related issues which many a times stem from routine patterns of sitting in front of computers, televisions, phones, and other screens.",
        image: "/images/image26.avif",
      },
    ],
    forWhom:
      "Open to all — beginners finding their footing, seasoned practitioners deepening their sadhana, and anyone called back to the classical roots of yoga.",
  },
  {
    slug: "jeevan-sutra",
    title: "Jeevan Sutra",
    subtitle: "A Personality Developed in Rhythm with Nature",
    color: "#6BAA75",
    heroImage: `${BASE}/Jeevan%20Sutra/IMG-20191216-WA0009.jpg`,
    heroImagePosition: "center top",
    images: [
      `${BASE}/Jeevan%20Sutra/IMG-20191216-WA0014.jpg`,
      "/images/image7.jpg",
      "/images/image9.jpg",
    ],
    imagePositions: ["center top", "center", "center"],
    description:
      "A transformative thread dedicated to the whole person — cultivating a personality that is grounded, aware, and expressed with clarity and confidence.",
    longDescription:
      "Jeevan Sutra is a path of conscious becoming, dedicated entirely to Personality Development. This element helps you discover, refine, and embody the qualities that define a balanced, purposeful, and authentic individual. Through structured programs, guided self-inquiry, and practical tools for personal growth, Jeevan Sutra empowers you to grow from the inside out — so that transformation becomes not just something you seek, but a way of living.",
    offerings: [
      "Self-discovery and personality awareness",
      "Communication and interpersonal effectiveness",
      "Confidence building and purposeful self-expression",
      "Emotional intelligence and inner self-regulation",
      "Goal clarity and personal vision development",
    ],
    forWhom:
      "For those seeking meaningful personal growth — whether in professional life, relationships, or inner confidence. Open to anyone ready to turn self-awareness into self-mastery.",
  },
  {
    slug: "kala-dhara",
    title: "Kala Dhara",
    subtitle: "Where Art Becomes a Living Expression",
    color: "#9B7FBE",
    heroImage: `${BASE}/Vastra%20Dhara/4d17bf9e-ec2f-4eb5-9a30-9905f16f20a9.jpg`,
    heroImagePosition: "center 40%",
    images: [
      `${BASE}/Vastra%20Dhara/5869622f-0501-424b-a980-24bdc1f771e3.jpg`,
      `${BASE}/Vastra%20Dhara/8cc1f648-5c95-49d2-998c-88b1f452bb04.jpg`,
      `${BASE}/Vastra%20Dhara/IMG_0251.JPG`,
    ],
    imagePositions: ["center top", "center top", "center top"],
    description:
      "A flowing thread of movement and creativity — where the body becomes a canvas and practice becomes a living work of art.",
    longDescription:
      "Kala Dhara bridges the inner and outer worlds through art and movement. In this element, yoga becomes a form of living artistry — where the precision of asana meets the freedom of creative expression. Drawing from movement arts, the storytelling traditions of the body, and expressive practices rooted in Indian classical forms, Kala Dhara invites you to rediscover yourself as an artist in constant motion.",
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
    heroImagePosition: "center 65%",
    images: [
      `${BASE}/Sangeet%20Dhara/IMG_0025.JPG`,
      `${BASE}/Sangeet%20Dhara/IMG_0036.JPG`,
      `${BASE}/Sangeet%20Dhara/IMG-20210613-WA0011.jpg`,
      `${BASE}/Sangeet%20Dhara/IMG_0058.JPG`,
    ],
    imagePositions: ["center", "center", "center top", "center top"],
    video: `${BASE}/Sangeet%20Dhara/1753714245027711.mp4`,
    description:
      "A vibrating thread of sound and silence — where mantra, music, and deep listening become living paths of transformation.",
    longDescription:
      "Sound is vibration, and vibration is life. Sangeet Dhara explores yoga through the medium of sound — through mantra, nada (inner sound), chanting, and the profound science of conscious listening. This element weaves ancient sound traditions with present-moment awareness, inviting participants to use their voice, their breath, and their stillness as instruments of inner transformation. Here, music is not performance — it is prayer.",
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
    heroImagePosition: "center top",
    images: [
      "/images/image13.jpg",
      "/images/image10.jpg",
      "/images/image5.jpg",
    ],
    imagePositions: ["center", "center top", "center top"],
    description:
      "A fierce and vital thread — where physical strength, yogic courage, and the spirit of the inner warrior are forged through dedicated practice.",
    longDescription:
      "Veer Dhara is yoga for those called to strength — not just of the body, but of character. Grounded in warrior asana sequences, dynamic breath practices, and the philosophy of the inner warrior (the Veer), this element builds physical power alongside mental resilience, sharp focus, and fearlessness. Here, the yoga mat becomes a training ground for life — every challenge on the mat a mirror for the challenges beyond it.",
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
    slug: "vastra-dhara",
    title: "Vastra Dhara",
    subtitle: "Where Fabric Becomes a Living Sadhana",
    color: "#C8733A",
    heroImage: `${BASE}/Vastra%20Dhara/0f4361d6-8fe8-447e-a086-3c1a68d0f054.jpg`,
    heroImagePosition: "center 40%",
    images: [
      `${BASE}/Vastra%20Dhara/492df843-5c3a-4c56-bde6-e14d0cdc9519.jpg`,
      `${BASE}/Vastra%20Dhara/5c9b82ba-939a-42ab-8222-4d80a7ba982f.jpg`,
      `${BASE}/Vastra%20Dhara/a4021950-803a-4eb4-9413-a6d7fe712436.jpg`,
      `${BASE}/Vastra%20Dhara/df40c4c0-2aba-4740-b791-b4703008d80f.jpg`,
    ],
    imagePositions: ["center top", "center top", "center top", "center top"],
    description:
      "A sacred thread of cloth and consciousness — where what you wear becomes an act of awareness, reverence, and inner alignment.",
    longDescription:
      "Vastra Dhara is rooted in the ancient understanding that clothing is not merely covering — it is an expression of one's inner state, a container for energy, and a conscious act of self-offering. Drawing from Ayurvedic principles of fabric and colour, the yogic science of how textiles affect the body's energy field, and the meditative traditions of conscious adornment, this element invites you to bring awareness into every layer of how you dress, dye, drape, and inhabit what you wear.",
    offerings: [
      "Yogic and Ayurvedic understanding of fabric, colour, and energy",
      "Natural dyeing as a meditative and creative practice",
      "The art of conscious adornment and intentional dressing",
      "Breathwork and stillness woven into the creative process",
      "Exploration of traditional Indian textile wisdom and symbolism",
    ],
    forWhom:
      "For those drawn to craft, colour, and creativity — and for anyone curious about bringing yogic awareness into the textures of everyday life. No prior experience required.",
  },
  {
    slug: "gau-sutra",
    title: "Gau Sutra",
    subtitle: "Honouring the Sacred Science of Nourishment",
    color: "#88A85C",
    heroImage: `${BASE}/Gau%20Sutra/IMG-20240414-WA0025.jpg`,
    heroImagePosition: "center top",
    images: [
      `${BASE}/Gau%20Sutra/20231128_171514.jpg`,
      `${BASE}/Gau%20Sutra/20240216_163902.jpg`,
      `${BASE}/Gau%20Sutra/20231204_121542.jpg`,
    ],
    imagePositions: ["center top", "center top", "center top"],
    video: `${BASE}/Gau%20Sutra/20231204_120839.mp4`,
    description:
      "A nurturing thread connecting us back to the earth — where food, nature, and the ancient wisdom of nourishment are honoured as sacred.",
    longDescription:
      "Gau Sutra is an offering rooted in the ancient Indian understanding that nourishment itself is sacred. The word 'Gau' evokes abundance, the sacred cow, and the deep relationship between human beings, the earth, and the sustenance it offers. This element weaves Ayurvedic nutrition, conscious eating practices, yogic lifestyle, and reverence for natural cycles into a complete path of nourishment — for the body, the mind, and the spirit.",
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
