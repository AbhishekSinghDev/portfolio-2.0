import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Dock from "./components/Dock";

export const dynamicParams = false;

export default function Page() {
  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <Hero />
        <About />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Dock />
    </>
  );
}
