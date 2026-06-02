import {
    IconApi,
    IconBrandAws,
    IconBrandDocker,
    IconBrandGithub,
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
    IconPlugConnected,
    IconShield,
    IconTrain,
} from "@tabler/icons-react";

// ==================== CORE SKILLS ====================
export const CORE_SKILLS = [
  {
    text: "TypeScript",
    icon: IconBrandTypescript,
    isLearning: false,
    description: "Primary Language",
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
    text: "Express.js",
    icon: IconBrandNodejs,
    isLearning: false,
    description: "Web Framework",
  },
  {
    text: "PostgreSQL",
    icon: IconDatabase,
    isLearning: false,
    description: "SQL Database",
  },
  {
    text: "Redis",
    icon: IconDatabase,
    isLearning: false,
    description: "Caching Store",
  },
  {
    text: "Next.js",
    icon: IconBrandNextjs,
    isLearning: false,
    description: "React Framework",
  },
  {
    text: "React.js",
    icon: IconBrandReact,
    isLearning: false,
    description: "UI Library",
  },
  {
    text: "TailwindCSS",
    icon: IconBrandTailwind,
    isLearning: false,
    description: "Styling System",
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
    description: "Mobile Tooling",
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
    title: "Backend & APIs",
    skills: [
      { text: "REST APIs", icon: IconApi, type: "icon" },
      { text: "WebSockets", icon: IconBrandSocketIo, type: "icon" },
      { text: "Server-Sent Events", icon: IconApi, type: "icon" },
      { text: "tRPC", icon: IconApi, type: "icon" },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { text: "PostgreSQL", icon: IconDatabase, type: "icon" },
      { text: "Redis", icon: IconDatabase, type: "icon" },
      { text: "SQLite", icon: IconDatabase, type: "icon" },
      { text: "Drizzle ORM", icon: IconDatabase, type: "icon" },
      { text: "Prisma ORM", icon: IconDatabase, type: "icon" },
    ],
  },
  {
    title: "Authentication & Security",
    skills: [
      { text: "JWT", icon: IconLock, type: "icon" },
      { text: "OAuth 2.0", icon: IconShield, type: "icon" },
    ],
  },
  {
    title: "Real-time & Jobs",
    skills: [
      { text: "BullMQ", icon: IconTrain, type: "icon" },
      { text: "Inngest", icon: "/inngest.png", type: "image" },
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      { text: "TailwindCSS", icon: IconBrandTailwind, type: "icon" },
      { text: "shadcn/ui", icon: IconBrandTailwind, type: "icon" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { text: "AWS (EC2, S3)", icon: IconBrandAws, type: "icon" },
      { text: "Docker", icon: IconBrandDocker, type: "icon" },
      { text: "Turborepo", icon: IconCloud, type: "icon" },
      { text: "Vercel", icon: IconBrandVercel, type: "icon" },
      { text: "GitHub Actions", icon: IconBrandGithub, type: "icon" },
      { text: "CI/CD", icon: IconCloud, type: "icon" },
    ],
  },
  {
    title: "Integrations",
    skills: [
      { text: "Shopify", icon: IconPlugConnected, type: "icon" },
      { text: "Razorpay", icon: IconPlugConnected, type: "icon" },
      { text: "Google Maps", icon: IconPlugConnected, type: "icon" },
      { text: "Msg91", icon: IconPlugConnected, type: "icon" },
    ],
  },
];
