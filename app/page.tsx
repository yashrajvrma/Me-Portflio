"use client";
import { Main } from "next/document";
import About from "./components/about";
import Navbar from "./components/navbar";

import WorkExperience from "./components/workExp";
import MainSection from "./components/mainSection";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full border-x-2 w-full">
      <div className="flex flex-col w-1/2 border-x-2 border-slate-200">
        <div className="flex justify-center items-center mt-16">
          <Navbar />
        </div>
        {/* Main section */}
        <div className="flex justify-center items-center mt-36">
          <MainSection />
        </div>
        {/* About section   */}
        <div className="about-section flex justify-center items-center mt-32">
          <About />
        </div>

        {/* Work Experience */}
        <div className="workExp-section flex justify-center mt-32">
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}
