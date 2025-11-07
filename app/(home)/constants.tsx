import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaShieldAlt,
} from "react-icons/fa";
import { FaBrave, FaGolang } from "react-icons/fa6";
import { HiCode, HiSparkles } from "react-icons/hi";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiDrizzle,
  SiExpo,
  SiExpress,
  SiGithub,
  SiGoogle,
  SiGooglegemini,
  SiJavascript,
  SiJsonwebtokens,
  SiLinkedin,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNextui,
  SiNodedotjs,
  SiPrisma,
  SiRazorpay,
  SiReact,
  SiShadcnui,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTrpc,
  SiTurborepo,
  SiTypescript,
  SiUpstash,
  SiVercel,
  SiX,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";

// ==================== PERSONAL INFO ====================
export const PERSONAL_INFO = {
  name: "Abhishek Singh",
  role: "Full Stack Engineer",
  secondaryRole: "AI Enthusiast",
  email: "abhisheksingh.pf@gmail.com",
  location: "Delhi, India",
  availability: "Available for opportunities",
  resumeLink:
    "https://drive.google.com/file/d/1LwYqMQMLxSLXODb-kfsH_v--xKMlzK5K/view?usp=sharing",
  description:
    "Building scalable web & mobile applications with passion and precision. Specialized in AI-powered solutions.",
  currentCompany: "SK Aggarwal & Co",
};

// ==================== HERO SECTION ====================
export const HERO_DESCRIPTION = {
  text: "Crafting scalable web & mobile applications at",
  company: "SK Aggarwal & Co",
  specializations: [
    "AI-powered systems",
    "monorepo architecture",
    "building products that make a difference",
  ],
};

export const HERO_STATS = [
  { value: "1+", label: "Years Experience", color: "text-green-500" },
  { value: "15+", label: "Projects Built", color: "text-blue-500" },
  { value: "2", label: "Companies Served", color: "text-purple-500" },
];

export const FLOATING_ICONS = [
  { Icon: SiTypescript, color: "text-blue-500", delay: "0s" },
  { Icon: SiReact, color: "text-cyan-500", delay: "0.5s" },
  { Icon: SiNextdotjs, color: "text-gray-800 dark:text-white", delay: "1s" },
  { Icon: HiCode, color: "text-green-500", delay: "1.5s" },
  { Icon: HiSparkles, color: "text-purple-500", delay: "2s" },
];

export const CODE_CARD_DATA = [
  { key: "name", value: '"Abhishek"' },
  { key: "role", value: '"Full Stack"' },
  { key: "focus", value: '"AI & Web"' },
  { key: "passion", value: '"Building"' },
];

// ==================== WORK EXPERIENCE ====================
export const WORK_EXPERIENCES = [
  {
    company: "SK Aggarwal and Co",
    role: "Full Stack Engineer",
    period: "September 2025 - Present",
    location: "Delhi, India",
    project: "Earnex Rewards - Loyalty Rewards Platform",
    highlights: [
      "Architected enterprise-grade monorepo using Turborepo with 5 interconnected applications",
      "Designed 6-layer receipt verification system with AI-powered fraud detection (ELA, EXIF validation, OCR)",
      "Built comprehensive admin dashboard and cross-platform mobile app using Expo React Native",
      "Implemented multi-layer security with device fingerprinting and automated risk scoring",
      "Integrated Google Gemini AI, AWS S3, Inngest workflows, and Better Auth",
    ],
    tech: [
      "Turborepo",
      "Next.js",
      "React Native",
      "Expo",
      "Drizzle ORM",
      "PostgreSQL",
      "AWS S3",
      "Gemini AI",
      "Inngest",
    ],
    gradient: "from-green-400 to-blue-500",
  },
  {
    company: "Nextfly Technologies Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "August 2024 - August 2025",
    location: "Remote",
    project: "Scraplo & MyDeer",
    highlights: [
      "Engineered scrap marketplace serving 5 user types with region-based pricing architecture",
      "Implemented real-time GPS tracking with 5km radius geolocation-based order assignment",
      "Built bidirectional chat system using Server-Side Events (SSE) with tRPC for MyDeer platform",
      "Developed digital wallet system and integrated Razorpay payment gateway",
      "Created comprehensive admin dashboards with multi-stage approval workflows",
    ],
    tech: [
      "Next.js",
      "React Native",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "tRPC",
      "Socket.io",
      "Razorpay",
    ],
    gradient: "from-purple-400 to-pink-500",
  },
];

// ==================== EDUCATION ====================
export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Specialization in Generative AI",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    period: "September 2025 - Present",
    grade: "Pursuing",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Minor Specialization in ML and AI",
    institution: "Guru Gobind Singh Indraprastha University",
    location: "Delhi, India",
    period: "August 2021 - June 2024",
    grade: "CGPA: 8.93/10",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    degree: "Higher Secondary Education (XII)",
    field: "Commerce Stream (CBSE)",
    institution: "Remal Public School",
    location: "Delhi, India",
    period: "2020 - 2021",
    grade: "CBSE Boards 65%",
    gradient: "from-green-500 to-emerald-500",
  },
];

// ==================== CORE SKILLS ====================
export const CORE_SKILLS = [
  {
    text: "Node.js",
    icon: SiNodedotjs,
    isLearning: false,
    color: "from-green-400 to-green-600",
    description: "Backend Runtime",
  },
  {
    text: "TypeScript",
    icon: SiTypescript,
    isLearning: false,
    color: "from-blue-400 to-blue-600",
    description: "Type-safe JavaScript",
  },
  {
    text: "JavaScript",
    icon: SiJavascript,
    isLearning: false,
    color: "from-yellow-400 to-yellow-600",
    description: "Core Language",
  },
  {
    text: "React",
    icon: SiReact,
    isLearning: false,
    color: "from-cyan-400 to-cyan-600",
    description: "UI Library",
  },
  {
    text: "React Native",
    icon: TbBrandReactNative,
    isLearning: false,
    color: "from-cyan-400 to-blue-500",
    description: "Mobile Framework",
  },
  {
    text: "Expo",
    icon: SiExpo,
    isLearning: false,
    color: "from-purple-400 to-purple-600",
    description: "React Native Platform",
  },
  {
    text: "Next.js",
    icon: SiNextdotjs,
    isLearning: false,
    color: "from-gray-400 to-gray-700",
    description: "React Framework",
  },
  {
    text: "Express",
    icon: SiExpress,
    isLearning: false,
    color: "from-gray-500 to-gray-700",
    description: "Web Framework",
  },
  {
    text: "tRPC",
    icon: SiTrpc,
    isLearning: false,
    color: "from-blue-500 to-indigo-600",
    description: "Type-safe APIs",
  },
  {
    text: "PostgreSQL",
    icon: BiLogoPostgresql,
    isLearning: false,
    color: "from-blue-400 to-blue-700",
    description: "SQL Database",
  },
  {
    text: "GoLang",
    icon: FaGolang,
    isLearning: true,
    color: "from-cyan-400 to-blue-500",
    description: "Systems Language",
  },
  {
    text: "Docker",
    icon: FaDocker,
    isLearning: true,
    color: "from-blue-400 to-blue-600",
    description: "Containerization",
  },
];

// ==================== LIBRARIES & TOOLS ====================
export const LIBRARIES_CATEGORIES = [
  {
    title: "State & Data Fetching",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { text: "Tanstack Query", icon: "/tanstack.png", type: "image" },
      { text: "Zustand", icon: "/zustand.png", type: "image" },
    ],
  },
  {
    title: "Database & ORM",
    gradient: "from-green-500 to-teal-500",
    skills: [
      { text: "Drizzle ORM", icon: SiDrizzle, type: "icon" },
      { text: "Prisma ORM", icon: SiPrisma, type: "icon" },
    ],
  },
  {
    title: "Authentication",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { text: "Better Auth", icon: FaShieldAlt, type: "icon" },
      { text: "Next Auth", icon: FaShieldAlt, type: "icon" },
      { text: "JWT", icon: SiJsonwebtokens, type: "icon" },
    ],
  },
  {
    title: "Real-time & Jobs",
    gradient: "from-orange-500 to-red-500",
    skills: [
      { text: "Socket.io", icon: SiSocketdotio, type: "icon" },
      { text: "Inngest", icon: "/inngest.png", type: "image" },
    ],
  },
  {
    title: "UI & Styling",
    gradient: "from-indigo-500 to-purple-500",
    skills: [
      { text: "TailwindCSS", icon: SiTailwindcss, type: "icon" },
      { text: "shadcn/ui", icon: SiTailwindcss, type: "icon" },
      { text: "Framer Motion", icon: TbBrandFramerMotion, type: "icon" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    gradient: "from-yellow-500 to-orange-500",
    skills: [
      { text: "Git/GitHub", icon: FaGithub, type: "icon" },
      { text: "Turborepo", icon: SiTurborepo, type: "icon" },
      { text: "Vercel", icon: IoLogoVercel, type: "icon" },
      { text: "AWS", icon: FaAws, type: "icon" },
    ],
  },
];

// ==================== FREELANCE PROJECTS ====================
export const FREELANCE_PROJECTS = [
  {
    title: "RankFlys - Education (Neet & Jee)",
    description:
      "Complete education platform for NEET & JEE aspirants with payment integration, course management, and AWS deployment.",
    tech: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: BiLogoPostgresql, name: "PostgreSQL" },
      { icon: SiRazorpay, name: "Razorpay" },
      { icon: SiPrisma, name: "Prisma" },
      { icon: FaAws, name: "AWS" },
      { icon: SiNextui, name: "NextUI" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJsonwebtokens, name: "JWT" },
    ],
    link: "https://rankflys.vercel.app/",
    cover: "/project-images/rankflys.png",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    tags: ["Full Stack", "Education", "Payment Gateway"],
  },
  {
    title: "SteelOnMobile - Brochure",
    description:
      "Modern brochure website for steel industry with responsive design, content management, and SEO optimization.",
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiShadcnui, name: "shadcn/ui" },
      { icon: DiMongodb, name: "MongoDB" },
      { icon: SiMongoose, name: "Mongoose" },
    ],
    link: "https://www.steelonmobile.com/",
    cover: "/project-images/steelonmobile.png",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    tags: ["Frontend", "Brochure", "SEO"],
  },
];

// ==================== PERSONAL PROJECTS ====================
export const PERSONAL_PROJECTS = [
  {
    title: "Youth AF",
    subtitle: "Computer Science Learning Platform",
    description:
      "No fluff. No overcomplications. Just solid CS learning. Master programming, algorithms, data structures, and computer science fundamentals with practical, hands-on tutorials, notes, and resources for Classes 9-12.",
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiDrizzle, name: "Drizzle ORM" },
      { icon: BiLogoPostgresql, name: "PostgreSQL" },
      { icon: SiVercel, name: "Vercel" },
      { icon: SiGoogle, name: "Google Adsense" },
      { icon: FaAws, name: "AWS S3" },
      { icon: SiUpstash, name: "Upstash Redis" },
    ],
    link: "https://youth-af.com",
    cover: "project-images/youth-af.png",
    gradient: "from-amber-500 to-yellow-500",
    tags: ["Education", "Computer Science", "Full Stack", "Next.js"],
    highlighted: true,
    stats: [
      { label: "Daily Visitors", value: "200+" },
      { label: "Lifetime Visitors", value: "50K+" },
      { label: "Total Requests", value: "2M+" },
    ],
  },
  {
    title: "Lunox.ai",
    subtitle: "Web Search + LLM Summarization",
    description:
      "AI-powered search engine that combines web search results with LLM summarization using Google Gemini and Brave Search API.",
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: "/inngest.png", name: "Inngest", type: "image" },
      { icon: SiGooglegemini, name: "Gemini AI" },
      { icon: FaBrave, name: "Brave Search" },
      { icon: SiDrizzle, name: "Drizzle ORM" },
      { icon: BiLogoPostgresql, name: "PostgreSQL" },
    ],
    link: "https://lunox.abhisheksingh.me",
    cover: "/project-images/lunox.png",
    gradient: "from-purple-500 to-pink-500",
    tags: ["AI", "Search Engine", "Full Stack"],
  },
  {
    title: "Pencil.io",
    subtitle: "Documents & Diagrams",
    description:
      "Collaborative document editor and diagram creator with real-time synchronization and Stripe payment integration.",
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiStripe, name: "Stripe" },
    ],
    link: "https://pencil-io.abhisheksingh.me",
    cover: "/project-images/pencil-io.png",
    gradient: "from-indigo-500 to-purple-500",
    tags: ["Collaboration", "SaaS", "Payment"],
  },
  {
    title: "Event Ocean",
    subtitle: "Your Events, Our Platform",
    description:
      "Complete event management platform with ticket booking, payment processing, and event discovery features.",
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiStripe, name: "Stripe" },
    ],
    link: "https://event-ocean.abhisheksingh.me/",
    cover: "/project-images/event-ocean.png",
    gradient: "from-green-500 to-emerald-500",
    tags: ["Event Management", "Tickets", "SaaS"],
  },
  {
    title: "PromptHub",
    subtitle: "Discover & Share AI Prompts",
    description:
      "Community platform for discovering, sharing, and rating AI prompts for various use cases and models.",
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiMongodb, name: "MongoDB" },
    ],
    link: "https://prompt-hub.abhisheksingh.me",
    cover: "/project-images/prompt-hub.png",
    gradient: "from-orange-500 to-red-500",
    tags: ["AI", "Community", "Prompts"],
  },
  {
    title: "Internhub",
    subtitle: "College Placement Cell",
    description:
      "Complete placement management system for colleges with student profiles, job postings, and application tracking.",
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiExpress, name: "Express" },
    ],
    link: "https://internhub.in",
    cover: "/project-images/internhub.png",
    gradient: "from-cyan-500 to-blue-500",
    tags: ["Placement", "College", "Management"],
  },
  {
    title: "Flixify",
    subtitle: "Watch Movies",
    description:
      "Movie streaming platform with extensive catalog, search functionality, and personalized recommendations.",
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiMongodb, name: "MongoDB" },
    ],
    link: "https://flixify-ruby.vercel.app/",
    cover: "/project-images/flixify.png",
    gradient: "from-yellow-500 to-orange-500",
    tags: ["Streaming", "Entertainment", "Frontend"],
  },
  {
    title: "Livecode",
    subtitle: "Collaborative Coding",
    description:
      "Real-time collaborative code editor with syntax highlighting, live cursors, and instant synchronization.",
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiSocketdotio, name: "Socket.io" },
    ],
    link: "https://livecode-liart.vercel.app/",
    cover: "/project-images/livecode.png",
    gradient: "from-lime-500 to-green-500",
    tags: ["Real-time", "Collaboration", "IDE"],
  },
  {
    title: "Word Web",
    subtitle: "Stay Curious",
    description:
      "Educational platform for vocabulary building and word learning with interactive features and progress tracking.",
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiExpress, name: "Express" },
    ],
    link: "https://word-web-sigma.vercel.app/",
    cover: "/project-images/word-web.png",
    gradient: "from-pink-500 to-rose-500",
    tags: ["Education", "Full Stack", "Learning"],
  },
  {
    title: "Medicare",
    subtitle: "Online Doctor Appointments",
    description:
      "Healthcare platform for booking doctor appointments, managing patient records, and telemedicine consultations.",
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
    link: "/",
    cover: "/project-images/medicare.png",
    gradient: "from-teal-500 to-cyan-500",
    tags: ["Healthcare", "Frontend", "Booking"],
  },
];

// ==================== SOCIAL LINKS ====================
export const SOCIAL_LINKS = [
  {
    link: "https://www.linkedin.com/in/abhishek-singh-dev",
    label: "LinkedIn",
    icon: SiLinkedin,
    color: "hover:text-blue-500",
  },
  {
    link: "https://github.com/AbhishekSinghDev",
    label: "GitHub",
    icon: SiGithub,
    color: "hover:text-purple-400",
  },
  {
    link: "https://x.com/AbhishekOG_Dev",
    label: "X",
    icon: SiX,
    color: "hover:text-gray-300",
  },
];

// ==================== FOOTER QUICK LINKS ====================
export const FOOTER_QUICK_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
