"use client";

import { useEffect } from "react";
import InfiniteMenu from "./components/infinite-menu/InfiniteMenu";
import ShinyButton from "./components/ShinyButton";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const projects = [
    { image: "./shoop.png", link: "#", title: "sHoop", description: "Descriere" },
    { image: "./sHoopV2.png", link: "#", title: "sHoopV2", description: "Descriere" },
    { image: "./tracker.png", link: "https://financetracker-iota.vercel.app/", title: "Finance Tracker", description: "Descriere" },
    { image: "./ai-generator.png", link: "#", title: "Image Generator", description: "Descriere" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let currentIndex = 0;
    let isScrolling = false;

    const scrollHandler = (e: WheelEvent) => {
      if (isScrolling) return;

      if (e.deltaY > 0) {
        // scroll down
        currentIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else {
        // scroll up
        currentIndex = Math.max(currentIndex - 1, 0);
      }

      isScrolling = true;
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: sections[currentIndex], offsetY: 0 },
        onComplete: () => {
          isScrolling = false;
        },
        ease: "power2.out",
      });

      e.preventDefault();
    };

    window.addEventListener("wheel", scrollHandler, { passive: false });

    return () => {
      window.removeEventListener("wheel", scrollHandler);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white">

      {/* FUNDAL */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/pozica.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xs"></div>
      </div>

      <main className="relative z-10">

        {/* HERO */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <div className="text-center lg:text-center">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] mb-8">
              <br />EU SUNT<br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent animate-gradient">
                  BOGDAN
                </span>
              </h1>

              {/* BUTOANE ORIZONTALE */}
              <div className="flex flex-row flex-wrap justify-center  md:justify-evenly mt-2 md:mt-5">
                <ShinyButton text="CV-ul meu" link="/cv.pdf" />
                <ShinyButton text="Github" link="https://github.com/roscabogdan310803" />
              </div>
            </div>

            {/* CARD */}
            <div className="flex justify-center">
              <div className="relative max-w-lg">
                <div className="absolute -inset-1 from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl"></div>

                <div className="relative bg-black/60 p-10 rounded-3xl backdrop-blur-xl border border-white/10">
                  <span className="text-emerald-400 uppercase tracking-widest text-xl">
                    Front End-Developer
                  </span>

                  <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                    Mi-am început parcursul în lumea dezvoltării web.  
                    Experimentez constant și construiesc proiecte care combină
                    designul modern cu funcționalitatea.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PROIECTE */}
        <section
          id="proiecte"
          className="h-screen bg-[#0a0a0a] flex items-center justify-center"
        >
          <div className="w-full h-full">
            <InfiniteMenu items={projects} scale={1.5} />
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-6"
        >
          <h2 className="text-4xl font-bold">Skills Section</h2>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-6"
        >
          <h2 className="text-4xl font-bold">Contact Section</h2>
        </section>

      </main>
    </div>
  );
}
