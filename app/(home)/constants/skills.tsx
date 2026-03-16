import {
  IconApi,
  IconBrandAws,
  IconBrandDocker,
  IconBrandFramer,
  IconBrandGithub,
  IconBrandGolang,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandSocketIo,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconCloud,
  IconDatabase,
  IconLock,
  IconShield,
  IconTrain,
} from "@tabler/icons-react";

// ==================== CORE SKILLS ====================
export const CORE_SKILLS = [
  {
    text: "GoLang",
    icon: IconBrandGolang,
    isLearning: false,
    description: "Systems Language",
  },
  {
    text: "TypeScript",
    icon: IconBrandTypescript,
    isLearning: false,
    description: "Type-safe JavaScript",
  },
  {
    text: "JavaScript",
    icon: IconBrandJavascript,
    isLearning: false,
    description: "Core Language",
  },
  {
    text: "Node.js",
    icon: IconBrandNodejs,
    isLearning: false,
    description: "Backend Runtime",
  },
  {
    text: "PostgreSQL",
    icon: IconDatabase,
    isLearning: false,
    description: "SQL Database",
  },
  {
    text: "Docker",
    icon: IconBrandDocker,
    isLearning: false,
    description: "Containerization",
  },
  {
    text: "React",
    icon: IconBrandReact,
    isLearning: false,
    description: "UI Library",
  },
  {
    text: "Next.js",
    icon: IconBrandNextjs,
    isLearning: false,
    description: "React Framework",
  },
  {
    text: "React Native",
    icon: IconBrandReactNative,
    isLearning: false,
    description: "Mobile Framework",
  },
  {
    text: "Expo",
    icon: IconBrandReactNative,
    isLearning: false,
    description: "React Native Platform",
  },
  {
    text: "Express",
    icon: IconBrandNodejs,
    isLearning: false,
    description: "Web Framework",
  },
  {
    text: "tRPC",
    icon: IconApi,
    isLearning: false,
    description: "Type-safe APIs",
  },
];

// ==================== LIBRARIES & TOOLS ====================
export const LIBRARIES_CATEGORIES = [
  {
    title: "State & Data Fetching",
    skills: [
      { text: "Tanstack Query", icon: "/tanstack.png", type: "image" },
      { text: "Zustand", icon: "/zustand.png", type: "image" },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { text: "Drizzle ORM", icon: IconDatabase, type: "icon" },
      { text: "Prisma ORM", icon: IconDatabase, type: "icon" },
    ],
  },
  {
    title: "Authentication",
    skills: [
      { text: "Better Auth", icon: IconShield, type: "icon" },
      { text: "Next Auth", icon: IconShield, type: "icon" },
      { text: "JWT", icon: IconLock, type: "icon" },
    ],
  },
  {
    title: "Real-time & Jobs",
    skills: [
      { text: "Socket.io", icon: IconBrandSocketIo, type: "icon" },
      { text: "Inngest", icon: "/inngest.png", type: "image" },
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      { text: "TailwindCSS", icon: IconBrandTailwind, type: "icon" },
      { text: "shadcn/ui", icon: IconBrandTailwind, type: "icon" },
      { text: "Framer Motion", icon: IconBrandFramer, type: "icon" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { text: "Git/GitHub", icon: IconBrandGithub, type: "icon" },
      { text: "Railway", icon: IconTrain, type: "icon" },
      { text: "Turborepo", icon: IconCloud, type: "icon" },
      { text: "Vercel", icon: IconBrandVercel, type: "icon" },
      { text: "AWS", icon: IconBrandAws, type: "icon" },
    ],
  },
];
