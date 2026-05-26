"use client";

import { useState, useEffect } from "react";
import Backdrop from "./Backdrop";
import CustomCursor from "./CustomCursor";
import BootSequence from "./BootSequence";
import TopBar from "./TopBar";
import SideNav from "./SideNav";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Portfolio() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBooting(false);
    }
  }, []);

  return (
    <div className="app">
      <Backdrop />
      <CustomCursor enabled={!booting} />
      {booting && <BootSequence onDone={() => setBooting(false)} />}
      <TopBar />
      <SideNav />
      <main className="main" id="top">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
