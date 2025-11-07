import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const WorkExperience = dynamic(() => import("./components/WorkExperience"), {
  loading: () => (
    <div className="h-screen animate-pulse bg-secondary rounded-lg" />
  ),
});

const Education = dynamic(() => import("./components/Education"), {
  loading: () => <div className="h-96 animate-pulse bg-secondary rounded-lg" />,
});

const CoreSkills = dynamic(() => import("./components/CoreSkills"), {
  loading: () => <div className="h-96 animate-pulse bg-secondary rounded-lg" />,
});

const LibsSkills = dynamic(() => import("./components/LibsSkills"), {
  loading: () => <div className="h-96 animate-pulse bg-secondary rounded-lg" />,
});

const PersonalProjects = dynamic(
  () => import("./components/PersonalProjects"),
  {
    loading: () => (
      <div className="h-screen animate-pulse bg-secondary rounded-lg" />
    ),
  }
);

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div className="h-32 animate-pulse bg-secondary rounded-lg" />,
});

// Force static generation
export const dynamicParams = false;

const page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="bg-background bg-grid-white/[0.02] relative overflow-hidden">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-background absolute -bottom-5 left-0 xl:bottom-0 w-full pointer-events-none"></div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 md:px-5">
        <div id="experience">
          <WorkExperience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skills">
          <CoreSkills />
          <LibsSkills />
        </div>
        <div id="projects">
          <PersonalProjects />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
