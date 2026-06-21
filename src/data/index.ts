import {
  Leaf,
  Waves,
  Moon,
  Wind,
  Flame,
  Star,
  type LucideIcon,
} from "lucide-react";
import { mediaUrl } from "@/lib/media";

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
    image: mediaUrl("/images/image14.avif"),
    certifications: ["PhD in Humanities", "MBA in Marketing", "Classical Hatha Yoga Instructor certified by Sadhguru Gurukulam"],
    instagram: "@sutradhara.yoga",
    email: "sutradhara@gmail.com",
  },
  {
    name: "SD Bhavani Chamarthy",
    specialty: "MSc. Counselling Psychology | PGD Art and Play Therapy | Artist",
    bio: "From a young age, Bhavani felt a deep calling to support others in achieving their highest well-being. Her psychology thesis on the well-being of yoga practitioners revealed yoga's profound impact on mental and emotional health, inspiring her to weave yogic practices into her clinical work. This path led her to Isha Yoga, and in 2020 she completed the 1750+ hour Isha Hatha Yoga Teacher Training Program — a life-changing experience that transformed not only her understanding of yoga but the very way she lives. She now shares classical Hatha Yoga as a timeless science of holistic well-being, accessible to all.",
    image: mediaUrl("/images/image15.avif"),
    certifications: ["MSc Counselling Psychology", "PGD Art & Play Therapy", "1750+ hr Isha Hatha Yoga TTP"],
    instagram: "@sutradhara.yoga",
  },
  {
    name: "Dushyant Singh",
    specialty: "Bachelors in Computer Application | Graphic Designer",
    bio: "Driven by a passion for computers, Dushyant's life took a beautiful turn when his Guru invited him onto an unknown path. Three years under his guidance reshaped him from within. Since 2018, he has served as a full-time volunteer at the Isha Yoga Center, immersed in yoga practices. The pandemic planted a seed within him to share yoga's gifts with others, inspiring him to complete the intensive 1750+ hour Hatha Yoga Teacher Training Program. Today, alongside freelance graphic design, he teaches Hatha Yoga full-time — finding immense joy in guiding others toward well-being and self-transformation.",
    image: mediaUrl("/images/image16.avif"),
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

export interface PanelSection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PanelTestimonial {
  quote: string;
  author: string;
  location?: string;
}

export interface Panel {
  name: string;
  role?: string;
  title?: string;
  tagline?: string;
  layout?: "stacked" | "photo-left" | "photo-below";
  profileImage?: string;
  sections: PanelSection[];
  testimonialsHeading?: string;
  testimonials?: PanelTestimonial[];
  quote?: string;
  signature?: string[];
  images: string[];
  videos?: string[];
  featuredVideo?: string;
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
  introPanel?: Panel;
  panels?: Panel[];
}

const BASE = mediaUrl("/images/Sutradhara%20Website%20Images");

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
        image: mediaUrl("/images/image17.avif"),
      },
      {
        title: "ANGAMARDANA",
        description:
          "Angamardana, a fitness system rooted in yoga, offers everyone the opportunity to invigorate the body and reach peak physical and mental health. 'Angamardana' means gaining complete mastery over the limbs, organs, and other parts of the body. True to its name, this practice revitalizes the body on all levels including the muscles, circulatory system, skeletal structure, nervous system, and the basic energy system.",
        image: mediaUrl("/images/image18.avif"),
      },
      {
        title: "SURYA KRIYA",
        description:
          "Surya Kriya is a potent yogic practice of tremendous antiquity, designed as a holistic process for health, wellness, and complete inner well-being. 'Surya' means 'sun,' and 'kriya' means 'inner energy process.' Surya Kriya activates the solar plexus to raise the samat prana, or solar heat, in the system. It also balances a person's left and right energy channels, leading to stability of the body and stillness of the mind. This strong foundation becomes the basis to explore higher dimensions of life.",
        image: mediaUrl("/images/image19.avif"),
      },
      {
        title: "SURYA SHAKTI",
        description:
          "Surya Shakti builds the physical body — it makes the sinews and ligaments of your body strong. In Yoga, we give importance to the sinews that hold the skeletal system and the whole body together. When we do any yogic practice, which is physical in nature, the focus is mainly to strengthen those, not to pump up your muscles. Strengthening the sinews of the body is what will endure for a long time and keep you well. Surya Shakti does this in a tremendous way.",
        image: mediaUrl("/images/image20.avif"),
      },
      {
        title: "YOGASANAS",
        description:
          "The word asana literally means a posture. Out of the innumerable asanas a body can assume, 84 have been identified as Yogasanas, through which one can transform the body and mind into a possibility for ultimate well-being. Yogasanas are not exercises, but rather very subtle processes to manipulate one's energy in a particular direction.",
        image: mediaUrl("/images/image21.avif"),
      },
      {
        title: "SHANMUKHI MUDRA",
        description:
          "Shanmukhi mudra is a simple but subtle practice that brightens and rejuvenates the face and eyes and brings about a state of balance leading toward increased awareness and meditativeness.",
        image: mediaUrl("/images/image22.avif"),
      },
      {
        title: "JALA NETI",
        description:
          "Jala Neti is a process of cleansing the nasal passages with salt water. This allows breathing to become free so that air can enter the lungs unimpeded by mucus and dirt which easily builds up during the day.",
        image: mediaUrl("/images/image23.avif"),
      },
      {
        title: "PREGNANCY PRACTICES",
        description:
          "Pregnancy practices are specially designed for pregnant mothers to bring more awareness about the pregnancy period and teach them how to keep their body, mind, and emotion in a pleasant way, in order to experience a joyful pregnancy.",
        image: mediaUrl("/images/image24.avif"),
      },
      {
        title: "CHILDREN'S SURYA SHAKTI",
        description:
          "Cultivate the right kind of daily regime and habit of yogic practice in children at a young age, helping them blossom into balanced, aware, and joyful human beings.",
        image: mediaUrl("/images/image25.avif"),
      },
      {
        title: "EYE PRACTICES",
        description:
          "Eye care practices we offer are a natural way to improve vision-related issues which many a times stem from routine patterns of sitting in front of computers, televisions, phones, and other screens.",
        image: mediaUrl("/images/image26.avif"),
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
      mediaUrl("/images/image7.jpg"),
      mediaUrl("/images/image9.jpg"),
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
    panels: [
      {
        name: "Kshiraja Manasvini",
        title: "Kshiraja Music Bio",
        sections: [
          {
            paragraphs: [
              "Kshiraja Manasvini S. is a talented young Carnatic musician from Chennai. She received her initial education and musical training at Isha Samskriti, an alternative education system envisioned by Sadhguru Jaggi Vasudev. She currently continues her advanced training under Jayashree Aravind.",
            ],
          },
          {
            paragraphs: [
              "Over the years, she has had the opportunity to learn from several eminent musicians, including N. Vijay Siva, Savita Narasimhan, Malladi Suri Babu, K. Omanakutty, and Ashwath Narayanan.",
              "She possesses a rich and diverse repertoire, having studied and performed compositions of Annamacharya, Bhadrachala Ramadas, Oothukadu Venkata Kavi, Subbaraya Sastry, and many others, in addition to the works of the Carnatic Trinity. She has also studied Thevarams in the Odhuvar tradition and has received training in the Sanskrit language.",
              "Kshiraja has won several prizes in senior-level competitions conducted by Shanmukhananda Sabha and Guruguhaamrta.",
              "In addition to her musical pursuits, she is a professional Bharatanatyam dancer with Dakshina Repertory, under the guidance of Divya Nayar.",
            ],
          },
        ],
        images: [
          `${BASE}/Sangeet%20Dhara/4.%20Sangeet%20Dhara/Kshiraja%20/IMG_20260404_170624.jpg`,
          `${BASE}/Sangeet%20Dhara/4.%20Sangeet%20Dhara/Kshiraja%20/IMG_20260606_152950.jpg`,
          `${BASE}/Sangeet%20Dhara/4.%20Sangeet%20Dhara/Kshiraja%20/IMG_20260606_153055.jpg`,
          `${BASE}/Sangeet%20Dhara/4.%20Sangeet%20Dhara/Kshiraja%20/RIS01980.jpg`,
          `${BASE}/Sangeet%20Dhara/4.%20Sangeet%20Dhara/Kshiraja%20/RIS02120.jpg`,
          `${BASE}/Sangeet%20Dhara/4.%20Sangeet%20Dhara/Kshiraja%20/RIS09661.jpg`,
        ],
      },
      {
        name: "Nagapushpa",
        role: "Hindustani Classical Vocalist",
        layout: "photo-below",
        sections: [
          {
            paragraphs: [
              "I'm Nagapushpa, an alumna of Isha Samskriti, a Hindustani classical music teacher and performer with over 14 years of musical training and 5 years of teaching experience.",
              "I conduct both online and offline classes for students aged 6 and above. These classes offer structured learning in Hindustani classical music, bhajans, devotional songs and chants, from foundational concepts to advanced practice.",
            ],
          },
        ],
        testimonialsHeading: "Learner Experiences",
        testimonials: [
          {
            quote:
              "Learning Hindustani music with akka has been such a nurturing experience. Her way of teaching is very patient, clear and grounded, and the daily classes have helped me build both discipline and confidence in my voice. Akka breaks things down so simply, corrects with so much care, and creates a very safe space to explore the voice. Truly grateful to be learning from her.",
            author: "Shubhangi",
            location: "Rajasthan",
          },
          {
            quote:
              "It has been a truly wonderful journey learning with you over the past two years. You are one of the most humble, simple, and lovely people I have ever met. Your guidance on the sounds of Isha teachings gave me a deeper understanding of how the tunes shift and the differences between high and low pitch. With this clarity, I was also able to learn Gurupooja well. Thank you so much for everything. I wish you all the very best for your future endeavours.",
            author: "Prasanna Tallam",
            location: "Sydney",
          },
          {
            quote:
              "The music classes from Nagapushpa akka felt truly blessed and were conducted in a very friendly manner. There was never any pressure or harshness, yet the learning happened with complete devotion and dedication. The training was given sincerely and in a very effective way. For my personal spiritual purpose, I now sing these chants in temples, not on auditorium stages. The classes have been extremely useful for my spiritual growth and well-being.",
            author: "Lakshmi Priya",
            location: "Coimbatore",
          },
          {
            quote:
              "Attending music class has been such an enriching experience for me. From the moment it begins, I feel calm, focused, and reconnected with myself. Learning the basics, understanding rhythm, and practicing regularly has taught me patience, discipline, and presence.",
            author: "Ujali Patel",
            location: "Nashville",
          },
        ],
        images: [
          `${BASE}/Sangeet%20Dhara/4.%20Sangeet%20Dhara/Nagapushpa/Pictures%20/Navaratri%202022.JPEG`,
        ],
      },
      {
        name: "Prasana Ganesan",
        role: "Carnatic Violinist",
        layout: "photo-left",
        profileImage: `${BASE}/Sangeet%20Dhara/4.%20Sangeet%20Dhara/Prasana%20Ganesan%20/Pics%20/Casual%20pic/IMG_20260204_180625.jpg`,
        sections: [
          {
            paragraphs: [
              "I'm Prasana, an alumna of Isha Samskriti and a trained Carnatic violinist with over 9 years of experience in Indian classical music. I have been teaching violin for the past 5 years, guiding students through a structured and engaging learning journey.",
              "I conduct both online and offline classes for students aged 6 and above. My lessons are designed to build a strong foundation in technique, musical understanding, and overall artistry. Along with violin training, I also provide foundational vocal guidance to help students develop pitch, rhythm, and musical sensitivity.",
            ],
          },
        ],
        testimonialsHeading: "Sharings",
        testimonials: [
          {
            quote:
              "Prasanna is far more than a talented violin teacher. She has a rare gift for making students feel comfortable, confident, and encouraged, regardless of their skill level. Her patience, kindness, and down-to-earth nature make learning both enjoyable and relaxed. Even after just a few classes, I gained confidence and a genuine appreciation for music. She truly lives up to her name by bringing happiness and positivity into every lesson.",
            author: "Surya",
            location: "Bangalore",
          },
          {
            quote:
              "Learning Carnatic music from you has been a wonderful experience. Your patient and encouraging teaching style made me feel comfortable as a beginner. You explain concepts clearly, pay attention to even the smallest mistakes, and help students improve with confidence. I am grateful for your dedication and highly recommend your classes to anyone interested in learning Carnatic music.",
            author: "Priyanaka",
            location: "Hyderabad",
          },
          {
            quote:
              "For a long time I wanted to learn Indian classical music and am very fortunate to have found a teacher with such deep insight into the art form. Learning through a thorough step by step system and having regular lessons it has been easy to keep up practicing and I have seen big results in my playing.",
            author: "Jesper Appelgrem",
            location: "Switzerland",
          },
        ],
        images: [
          `${BASE}/Sangeet%20Dhara/4.%20Sangeet%20Dhara/Prasana%20Ganesan%20/Pics%20/Casual%20pic/WhatsApp%20Image%202026-06-05%20at%2020.26.06.jpeg`,
          `${BASE}/Sangeet%20Dhara/4.%20Sangeet%20Dhara/Prasana%20Ganesan%20/Pics%20/Violin%20Pic%20.png`,
        ],
      },
    ],
  },
  {
    slug: "veer-dhara",
    title: "Veer Dhara",
    subtitle: "Awaken the Warrior Within",
    color: "#C94A4A",
    heroImage: mediaUrl("/images/image4.jpg"),
    heroImagePosition: "center top",
    images: [
      mediaUrl("/images/image13.jpg"),
      mediaUrl("/images/image10.jpg"),
      mediaUrl("/images/image5.jpg"),
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
    introPanel: {
      name: "Kalaripayattu",
      title: "An Ancient Art, A Living Practice",
      sections: [
        {
          paragraphs: [
            "Kalaripayattu stands among the oldest martial arts in the world, with a rich legacy stretching back more than 3,000 years — one of ancient India's most enduring gifts to the world.",
          ],
        },
        {
          heading: "Bodhidharma — Carrying Kalari to China",
          paragraphs: [
            "Bodhidharma, also known as Damo, was a Buddhist monk of royal Pallava lineage. He is traditionally credited with introducing Kalaripayattu to China — teaching these Indian martial techniques at the Shaolin Temple and establishing the 'cradle' from which Chinese Kung Fu would eventually emerge.",
          ],
        },
        {
          heading: "A Holistic Approach to Mind-Body Wellness",
          paragraphs: [],
          bullets: [
            "Strength Development — builds significant lean, functional muscle and core strength through dynamic bodyweight exercises.",
            "Enhanced Flexibility — increases joint mobility and full-body flexibility through varied stretches and postures.",
            "Agility — improves overall agility, coordination, and balance through fluid movement patterns.",
            "Immunity & Vitality — boosts the immune system, improves blood circulation, and enhances respiratory health.",
            "Mental Focus — sharpens concentration and develops the single-minded attention required for complex drills.",
            "Stress Reduction — reduces anxiety and stress through intense physical exertion and rhythmic patterns.",
            "Resilience — cultivates mental fortitude to stay calm under pressure.",
            "Mind-Body Coordination — strengthens the neurological connection between thought and action, improving reflexes and body awareness.",
            "Self-Defense — teaches effective techniques for personal safety.",
          ],
        },
        {
          heading: "A Living Heritage — Performing Arts & Sports",
          paragraphs: [
            "In the modern day, Kalaripayattu has blossomed from an ancient martial tradition into a powerful performing art — finding a dynamic home in grand group displays and contemporary theatre, where its fluid energy captivates audiences and brings stories to life.",
            "Beyond the stage, it has officially claimed its place in the sports arena. Recognized by the Ministry of Youth Affairs and Sports, Kalari is now a celebrated competitive discipline, featured in the Khelo India Youth Games and the National Games.",
          ],
        },
      ],
      images: [],
    },
    panels: [
      {
        name: "Prasanna Venkatesh",
        role: "Kalaripayattu & Silambam Instructor",
        title: "Personal Background",
        sections: [
          {
            paragraphs: [
              "My name is Prasanna Venkatesh. I am a practitioner and instructor of Kalaripayattu and Silambam. I trained at Isha Samskriti for 12 years, where my journey with these traditional Indian disciplines began at the age of eight.",
              "Post my schooling at Isha Samskriti, I built the foundation of my teaching career at Project Samskriti, where I taught Kalaripayattu for three years. In 2024, I stepped out to begin teaching independently and have since been conducting workshops, retreats, and regular training classes.",
            ],
          },
          {
            paragraphs: [
              "I was awarded a silver medal at the 2021 National Kalaripayattu Championship conducted by the Indian Kalaripayattu Federation.",
              "I am deeply passionate about preserving and sharing India's traditional art forms. More than a career, teaching these ancient disciplines is a fulfilling way for me to reach people and contribute to their growth and wellbeing. I am particularly keen on building a strong and vibrant community of practitioners dedicated to keeping these traditions alive and relevant for future generations.",
              "Beyond teaching, I am an avid trekker and mountaineer. I completed a Basic Mountaineering Course and undertook a solo cycling expedition from Manali to Leh in support of the Save Soil movement.",
              "Through my work, I aim to offer these ancient disciplines as a means to cultivate strength, balance, awareness, and a deeper connection to India's cultural heritage.",
            ],
          },
        ],
        featuredVideo: `${BASE}/5.%20Veer%20Dhara/Self%20demonstration%20video%20from%20performances%20and%20Practice%20/859FCA4B-1E87-4465-A87E-D0A63B38300C.MP4`,
        images: [
          `${BASE}/5.%20Veer%20Dhara/Photos%20/Untitled%20design.jpg`,
          `${BASE}/5.%20Veer%20Dhara/Photos%20/Untitled%20design%281%29.jpg`,
          `${BASE}/5.%20Veer%20Dhara/Photos%20/Untitled%20design%282%29.jpg`,
        ],
      },
      {
        name: "Participant Sharing",
        sections: [
          {
            paragraphs: [
              "Glimpses of students sharing their experience with Kalaripayattu — in their own words, after their own practice.",
            ],
          },
        ],
        images: [],
        videos: [
          `${BASE}/5.%20Veer%20Dhara/Participant%20Sharing%20/IMG_1524.mov`,
          `${BASE}/5.%20Veer%20Dhara/Participant%20Sharing%20/IMG_6033.mov`,
        ],
      },
      {
        name: "Kids Session Glimpses",
        sections: [
          {
            paragraphs: [
              "Young practitioners bring their own energy to the kalari — discipline and play, side by side.",
            ],
          },
        ],
        images: [],
        videos: [
          `${BASE}/5.%20Veer%20Dhara/Kids%20session%20glimpses%20/1779866991855875.MP4`,
          `${BASE}/5.%20Veer%20Dhara/Kids%20session%20glimpses%20/89DC031D-8999-478A-AD50-3E4DFDAE632B.MP4`,
        ],
      },
      {
        name: "Glimpses From In-Person Workshops",
        sections: [
          {
            paragraphs: [
              "Students learning Kalaripayattu hands-on, through immersive in-person training sessions.",
            ],
          },
        ],
        images: [],
        videos: [
          `${BASE}/5.%20Veer%20Dhara/Glimpses%20from%20inperson%20workshops%20/1BBB45F4-9D63-40FE-81FA-B53AB5E9953A.MP4`,
          `${BASE}/5.%20Veer%20Dhara/Glimpses%20from%20inperson%20workshops%20/55B05DED-3817-4C77-854C-26CC72A74B00.MP4`,
          `${BASE}/5.%20Veer%20Dhara/Glimpses%20from%20inperson%20workshops%20/740f1c53779e48dbb56dc9f0d34b4ce1.MP4`,
        ],
      },
      {
        name: "Reflections from Bhaktapur, Nepal",
        sections: [
          {
            paragraphs: [
              "A short film weaving Sadhguru's words on Kalaripayattu with glimpses captured in Bhaktapur, Nepal.",
            ],
          },
        ],
        featuredVideo: `${BASE}/5.%20Veer%20Dhara/A%20video%20along%20with%20Sadhguru%20quotes%20on%20Kalari%2C%20Video%20glimpses%20mostly%20from%20Bhaktapur%20Nepal/4910dc3a85684ce0bcd7033c3b0847f5.MP4`,
        images: [],
      },
      {
        name: "From an Online Session",
        sections: [
          {
            paragraphs: [
              "Practice travels too — a glimpse from one of our online Kalaripayattu sessions.",
            ],
          },
        ],
        featuredVideo: `${BASE}/5.%20Veer%20Dhara/A%20short%20snippet%20from%20an%20online%20session/ScreenRecording_05-27-2026%2013-32-16_1.mov`,
        images: [],
      },
    ],
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
    panels: [
      {
        name: "Dr Balakrishnan",
        title: "My Journey in Panchagavya Therapy",
        tagline:
          "An inspiring journey towards Ayurveda, culture, and holistic well-being",
        sections: [
          {
            paragraphs: [
              "In Indian culture, the cow is not merely considered an animal but is revered as “Gau Mata” (Mother Cow). Ayurveda places special importance on Panchagavya, a combination of five sacred substances derived from the cow—milk, curd, ghee, cow urine, and cow dung—which help maintain balance in the body, mind, and soul.",
              "My journey in Panchagavya Therapy is not just an experience of healing; it is a journey of spiritual and social transformation.",
            ],
          },
          {
            heading: "The Beginning: A Search for Natural Healing",
            paragraphs: [
              "Due to modern lifestyles, stress, and the increasing prevalence of diseases, I began searching for natural methods of healing. Despite trying various treatments, I was unable to achieve satisfactory results.",
              "During this time, I learned about Ayurveda and Panchagavya Therapy. I discovered Maharshi Vagbhat Panchagavya Anusandhan Gurukul, located in Kanchipuram, Chennai, which has been actively promoting this ancient science for many years.",
              "I decided to stay there and study the ancient sciences of Panchagavya Therapy, Nadi (pulse) science, and Nabhi (navel) science. Following all the rules and disciplines of the Gurukul, I enrolled and spent three continuous years there acquiring knowledge.",
              "Our daily routine began at 4:00 AM during Brahma Muhurta. Initially, I was curious, but as my studies progressed, my faith and confidence in this ancient healing system grew stronger.",
            ],
          },
          {
            heading: "What is Panchagavya Therapy?",
            paragraphs: [
              "Panchagavya Therapy is a traditional healing system rooted in Indian Ayurveda. It utilizes five natural substances obtained from the cow to purify the body, strengthen immunity, and maintain mental balance.",
              "Under the Vedic system and the guidance of Gurukul Head Shri Niranjan Bhai Verma Guruji and other experts, I gained profound knowledge about how Panchagavya naturally provides energy and supports overall well-being.",
            ],
          },
          {
            heading: "Growing Confidence Through Experience",
            paragraphs: [
              "After personally undergoing Panchagavya treatments, I began to notice positive changes in my body. My digestion improved, fatigue reduced, and I experienced greater mental peace.",
              "This inspired me to study the subject in greater depth. I visited numerous Ayurvedic experts, cow shelters (Goshalas), and Panchagavya research centers.",
              "Witnessing positive changes in people's health made me realize that this therapy could be immensely beneficial to society.",
            ],
          },
          {
            heading: "A Commitment to Serving Society",
            paragraphs: [
              "I resolved not to limit Panchagavya Therapy to personal well-being but to make it accessible to society at large.",
              "Through health camps, awareness programs, Suvarna Prashan initiatives, and Ayurvedic guidance, I began spreading the message of natural health and wellness.",
              "The Suvarna Prashan initiative, especially for children's health, received an overwhelming response. Seeing parents become more aware of Ayurveda has been one of my greatest sources of satisfaction.",
            ],
          },
          {
            heading: "Challenges and Lessons Learned",
            paragraphs: [
              "Every meaningful endeavor comes with challenges. In the beginning, there were misconceptions and doubts among people.",
              "However, through consistency, sincerity, and practical demonstrations, trust gradually developed.",
              "This journey has taught me the importance of patience, selfless service, and staying connected with nature.",
            ],
          },
          {
            heading: "Future Vision",
            paragraphs: [
              "My goal is to bring the benefits of Panchagavya Therapy and Ayurveda to as many people as possible.",
              "In the future, Panchagavya Therapy is being explored as a potential supportive treatment approach for serious illnesses such as cancer. My objective is to continue working towards promoting natural healing methods, encouraging healthy lifestyles, and preserving India's rich cultural heritage.",
            ],
          },
          {
            heading: "Conclusion",
            paragraphs: [
              "My Panchagavya Therapy journey is a beautiful confluence of health, faith, and social service.",
              "Ayurveda is not merely a system of medicine; it is a pure and balanced way of life.",
              "Even today, I continue to learn, gain experience, and dedicate myself to serving people.",
            ],
          },
        ],
        quote: "A life connected with nature is the true path to a healthy life.",
        signature: ["Gavyasiddha Balkrishnabhai", "Pune"],
        images: [
          `${BASE}/Gau%20Sutra/Dr%20Balakrishnan/image1.jpg`,
          `${BASE}/Gau%20Sutra/Dr%20Balakrishnan/image2.WEBP`,
          `${BASE}/Gau%20Sutra/Dr%20Balakrishnan/image3.JPG`,
          `${BASE}/Gau%20Sutra/Dr%20Balakrishnan/image4.JPG`,
          `${BASE}/Gau%20Sutra/Dr%20Balakrishnan/image5.PNG`,
          `${BASE}/Gau%20Sutra/Dr%20Balakrishnan/image6.JPG`,
          `${BASE}/Gau%20Sutra/Dr%20Balakrishnan/image7.JPG`,
        ],
      },
      {
        name: "Dr Rushmita",
        sections: [],
        images: [
          `${BASE}/Gau%20Sutra/Dr%20Rushmita%20/IMG-20240301-WA0046.jpg`,
          `${BASE}/Gau%20Sutra/Dr%20Rushmita%20/IMG-20240505-WA0040.jpg`,
          `${BASE}/Gau%20Sutra/Dr%20Rushmita%20/IMG-20240505-WA0041%281%29.jpg`,
          `${BASE}/Gau%20Sutra/Dr%20Rushmita%20/IMG-20250701-WA0019.jpg`,
          `${BASE}/Gau%20Sutra/Dr%20Rushmita%20/IMG-20260606-WA0007.jpg`,
          `${BASE}/Gau%20Sutra/Dr%20Rushmita%20/IMG-20260606-WA0011.jpg`,
          `${BASE}/Gau%20Sutra/Dr%20Rushmita%20/Screenshot%202026-06-17%20at%204.33.17%E2%80%AFPM.png`,
        ],
      },
    ],
  },
  {
    slug: "nritya-dhara",
    title: "Nritya Dhara",
    subtitle: "Where Movement Becomes a Living Offering",
    color: "#C2517A",
    heroImage: `${BASE}/6.%20Nritya%20Dhara/ChatGPT%20Image%20Jun%2021%2C%202026%2C%2007_09_21%20PM.png`,
    heroImagePosition: "center",
    images: [
      `${BASE}/6.%20Nritya%20Dhara/4Z4A1247.jpg`,
      `${BASE}/6.%20Nritya%20Dhara/DSC02174.JPG`,
      `${BASE}/6.%20Nritya%20Dhara/IMG_3950.JPG`,
      `${BASE}/6.%20Nritya%20Dhara/IMG_3961.JPG`,
      `${BASE}/6.%20Nritya%20Dhara/RIS08293.jpg`,
    ],
    imagePositions: ["center top", "center top", "center top", "center top", "center top"],
    description:
      "A graceful thread of rhythm and story — where classical Indian dance becomes a moving meditation, and every gesture carries the breath of devotion.",
    longDescription:
      "Nritya Dhara is an invitation into Bharatanatyam, one of India's oldest classical dance forms — where movement, music, and mythology converge into a single living language. Rooted in the Isha Samskriti tradition and the lineage of Dakshina, Chennai, this element trains the body to speak through abhinaya (expression), nritta (pure movement), and tala (rhythm), while cultivating the discipline, devotion, and presence that classical dance demands. Here, every adavu and every mudra becomes a sadhana — a practice of body, breath, and bhakti woven into one.",
    offerings: [
      "Foundational Bharatanatyam adavus, postures, and rhythm training",
      "Abhinaya — storytelling through gesture, expression, and gaze",
      "Nritta — pure dance technique built on tala and laya",
      "Choreography and stage presence drawn from the Dakshina repertory",
      "Integration of music, mythology, and devotion within movement",
    ],
    forWhom:
      "For dancers and non-dancers alike — children and adults drawn to rhythm, storytelling, and the discipline of classical Indian art. No prior dance experience required, only a willingness to move with devotion.",
    panels: [
      {
        name: "Srimalli Aiyamperumal",
        title: "About the Artist",
        tagline:
          "Alumni of Isha Samskriti — Disciple of Smt Divya Nayar, Director, Dakshina, Chennai",
        sections: [
          {
            paragraphs: [
              "Young and passionate Srimalli began her journey at Isha Samskriti, an alternative education system designed by Sadhguru. She now continues her journey under acclaimed dancer and choreographer Smt Divya Nayar, as a member of the Dakshina repertory.",
              "She has had the opportunity to perform at many renowned dance festivals, in India and abroad during her time at Samskriti. Besides performing, Srimalli finds great joy in sharing her learnings as a teacher.",
              "Eight years of dedicated study with Smt Divya Nayar has immensely helped Srimalli appreciate the nuances of movement and the musicality of dance within a choreography. She believes that this has contributed immensely in her growth, not only as a dancer, but also as a human being.",
            ],
          },
        ],
        images: [
          `${BASE}/6.%20Nritya%20Dhara/4Z4A1247.jpg`,
          `${BASE}/6.%20Nritya%20Dhara/DSC02174.JPG`,
          `${BASE}/6.%20Nritya%20Dhara/IMG_3950.JPG`,
          `${BASE}/6.%20Nritya%20Dhara/IMG_3961.JPG`,
          `${BASE}/6.%20Nritya%20Dhara/RIS08293.jpg`,
        ],
      },
    ],
  },
];
