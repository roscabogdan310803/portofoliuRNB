"use client";

import InfiniteMenu from "./components/infinite-menu/InfiniteMenu";
import ShinyButton from "./components/ShinyButton";

export default function Home() {
  const projects = [
    {image: "./shoop.png", link: "#", title: "sHoop", description: "Descriere" },
    {image: "./sHoopV2.png", link: "#", title: "sHoopV2", description: "Descriere" },
    {image: "./tracker.png",link: "https://financetracker-iota.vercel.app/",title: "Finance Tracker",description: "Descriere"},
    {image: "./ai-generator.png", link: "#", title: "Image Generator", description: "Descriere" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white">

      {/* FUNDAL */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/pozica.jpg')" }}
      >w
        <div className="absolute inset-0 bg-black/2 backdrop-blur-xs"></div>
      </div>

      <main className="relative z-10">

        {/* HERO */}
       <section 
  id="home" 
  className="min-h-screen flex items-center justify-center px-6"
>
          <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] mb-8">
                SALUT,<br />EU SUNT<br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent animate-gradient">
                  BOGDAN
                </span>
              </h1>

              {/* BUTOANE ORIZONTALE */}
             <div className="flex flex-row flex-wrap gap-6 justify-center lg:justify-start mt-20 md:mt-20">
              <ShinyButton text="Here's my CV" link="/cv.pdf" />
              <ShinyButton text="Contact Me" link="#contact" />
            </div>
            </div>

            {/* CARD */}
            <div className="flex justify-center">
              <div className="relative max-w-lg">
                <div className="absolute -inset-1 from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl"></div>

                <div className="relative bg-black/60 p-10 rounded-3xl backdrop-blur-xl border border-white/10">
                  <span className="text-emerald-400 uppercase tracking-widest text-xs">
                    Creative Developer
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

        <section 
          id="skills" 
          className="min-h-screen flex items-center justify-center px-6"
        >
          
        </section>

        

      </main>
    </div>
  );
}
