import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

// Dynamically import heavy components with loading states
const WorkExperience = dynamic(() => import("./components/WorkExperience"), {
  loading: () => (
    <div className="h-screen animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
  ),
});

const Education = dynamic(() => import("./components/Education"), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
  ),
});

const CoreSkills = dynamic(() => import("./components/CoreSkills"), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
  ),
});

const LibsSkills = dynamic(() => import("./components/LibsSkills"), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
  ),
});

const PersonalProjects = dynamic(
  () => import("./components/PersonalProjects"),
  {
    loading: () => (
      <div className="h-screen animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
    ),
  }
);

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => (
    <div className="h-32 animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
  ),
});

// Force static generation
export const dynamicParams = false;

const page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="bg-gray-50 dark:bg-black bg-grid-black/[0.05] dark:bg-grid-white/[0.05] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-white dark:from-black absolute -bottom-5 left-0 xl:bottom-0 w-full pointer-events-none"></div>
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
          {/* <FreelanceProjects /> */}
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
