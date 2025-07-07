import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skill";
import WorkExperience from "@/components/work-experience";

export default function App() {
  return (
    <div className="min-h-screen py-8 px-4  bg-stone-50 font-instrument-serif ">
      <div className="max-w-lg sm:max-w-xl mx-auto  rounded-lg p-8">
        <Header />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
