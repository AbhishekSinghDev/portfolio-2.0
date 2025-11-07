import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhishek-singh-dev-2.vercel.app/"),

  title: "Abhishek Singh",
  authors: {
    name: "abhishek singh",
  },
  description:
    "Based in Delhi, I'm a Fullstack developer passionate about building a modern web application that users love.",
  openGraph: {
    title: "Abhishek Singh",
    description:
      "Based in Delhi, I'm a Fullstack developer passionate about building a modern web application that users love.",
    url: "https://abhishek-singh-dev-2.vercel.app/",
    siteName: "Abhishek Singh",
    images: "/abhishek.png",
    type: "website",
  },

  keywords: ["full stack developer", "abhishek singh", "siyanop"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("dark scroll-smooth", spaceGrotesk.variable)}
    >
      <body className={cn(spaceGrotesk.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
