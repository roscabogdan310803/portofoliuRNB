"use client";

import { useEffect } from "react";
import InfiniteMenu from "./components/infinite-menu/InfiniteMenu";
import ShinyButton from "./components/ShinyButton";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const projects = [
    { 
  image: "./tracker.png", 
  link: "https://financetracker-iota.vercel.app/", 
  title: "Finance Tracker", 
  description: "Un tracker financiar full-stack realizat cu MERN, care ajută utilizatorii să își gestioneze veniturile și cheltuielile. Am integrat autentificare securizată cu Clerk și am construit backend-ul cu Node.js, Express și MongoDB, învățând să gestionez eficient datele. Deploy-ul complet m-a ajutat să înțeleg mai bine integrarea dintre frontend și backend." 
},
{ 
  image: "./ai-generator.png", 
  link: "https://ai-gen-rb.netlify.app/", 
  title: "Image Generator", 
  description: "Un generator de imagini AI construit cu JavaScript și API-uri, care permite utilizatorilor să creeze imagini prin inteligență artificială. Am învățat să gestionez cereri async și răspunsuri API, dar generarea momentan nu funcționează deoarece nu sunt credite disponibile." 
},
{ 
  image: "./shoop.png", 
  link: "https://roscabogdan310803.github.io/shoop/", 
  title: "sHoop", 
  description: "Un proiect de design experimental în care am explorat cât de bine se potrivesc ideile mele pe mobil. Am lăsat imaginația liberă și am improvizat pagina, testând culori, layout și interactivitate pentru a vedea cum arată un site complet personalizat." 
},
{ 
  image: "./sHoopV2.png", 
  link: "https://s-hoop-v2.vercel.app/", 
  title: "sHoopV2", 
  description: "Un site dinamic creat în Next.js, cu mai multe pagini, unde produsele se actualizează automat prin Sanity și plățile se fac prin Stripe. Am adăugat animații GSAP pentru a face interacțiunea mai atractivă și pentru a oferi o experiență completă, aproape ca într-un magazin real." 
},
{ 
  image: "./limo.png", 
  link: "https://carrent-blue.vercel.app/", 
  title: "Limo Rent", 
  description: "Primul meu proiect de frontend ca freelancer, unde am învățat cum să gestionez un proiect real de la brief până la implementare. Am lucrat la layout, interactivitate și structură, acumulând experiență valoroasă în dezvoltarea profesională și comunicarea cu clienții." 
}
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
        <div className="absolute inset-0 bg-black/20 backdrop-blur-s"></div>
      </div>

      <main className="relative z-10">

        {/* HERO */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 pt-14"
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
              <div className="flex flex-row flex-wrap justify-evenly  md:justify-left mt-2 md:mt-5">
                <ShinyButton text="CV-ul meu" link="/CV.pdf" />
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
                    Sunt un web developer autodidact, iar această pasiune a început în anul doi de facultate, mai mult din curiozitate și dorința de a face ceva diferit.</p>
                   <p className="mt-4 text-lg text-gray-300 leading-relaxed"></p>
                    Mi-am început parcursul cu bazele HTML și CSS, unde m-a captivat ideea că pot construi ceva de la zero. Apoi am descoperit JavaScript și modul în care un site poate deveni interactiv, lucru care m-a fascinat și mai mult. Toate aceste experiențe m-au făcut să fiu tot mai curios și m-au determinat să urmez serios drumul dezvoltării web dorind sa devin un Full Stack Developer.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PROIECTE */}
<section
  id="proiecte"
  className="h-screen bg-[#0a0a0a] relative"
>
  {/* Titlu suprapus deasupra meniului */}
  <h1 className="absolute top-20 w-full text-center text-white text-4xl md:text-5xl font-bold z-10 pointer-events-none ">
    Proiectele mele
  </h1>

  <div className="w-full h-full relative z-0">
    <InfiniteMenu items={projects} scale={1.5} />
  </div>
</section>
        {/* SKILLS */}
       <section
  id="skills"
  className="min-h-screen flex items-center justify-center px-6 py-20"
>
  <div className="max-w-6xl w-full flex flex-col items-center text-center gap-12">

    {/* TITLU */}
    <h2 className="text-4xl md:text-5xl font-bold">
      Abilități
    </h2>

    {/* DESCRIERE */}
    <p className="max-w-3xl text-lg md:text-xl opacity-80">
      De-a lungul parcursului meu am învățat din mai multe surse, precum
      FreeCodeCamp, YouTube, GitHub și câteva cărți, cum ar fi
      „JavaScript & JQuery” de Jon Duckett.
    </p>

    {/* GRID SKILLS */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

      {/* HTML */}
      <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-3">HTML</h3>
        <p className="opacity-80">
          HTML mi s-a părut confuz în liceu și nici nu mă gândeam la programare pe atunci.
          Dar datorită FreeCodeCamp am învățat bazele și am obținut chiar și un certificat în HTML.
        </p>
      </div>

      {/* CSS */}
      <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-3">CSS</h3>
        <p className="opacity-80">
          La început nu știam absolut nimic despre CSS, dar acum chiar îmi place!
          L-am învățat de pe FreeCodeCamp și YouTube pentru a crea site-uri interesante.
        </p>
      </div>

      {/* JavaScript */}
      <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-3">JavaScript</h3>
        <p className="opacity-80">
          JavaScript a fost greu la început, dar l-am folosit pentru funcționalități interactive
          și lucrul cu API-uri.
        </p>
      </div>

      {/* React */}
      <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-3">React</h3>
        <p className="opacity-80">
          React a fost primul meu contact cu librăriile. M-a învățat cum să structurez aplicații
          și să gândesc pe componente.
        </p>
      </div>

      {/* TypeScript */}
      <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-3">TypeScript</h3>
        <p className="opacity-80">
          Cel mai nou interes al meu în programare. Îmbunătățește JavaScript prin tipizare strictă.
        </p>
      </div>

      {/* Tailwind */}
      <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-3">TailwindCSS</h3>
        <p className="opacity-80">
          Framework-ul meu preferat pentru stilizare rapidă și design modern.
        </p>
      </div>

      {/* GSAP */}
      <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-3">GSAP</h3>
        <p className="opacity-80">
          Librăria mea pentru animații care aduc site-urile la viață.
        </p>
      </div>

      {/* Next.js */}
      <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-3">Next.js</h3>
        <p className="opacity-80">
          Următorul nivel după React, cu performanță și SEO mai bun.
        </p>
      </div>

      {/* Git */}
      <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-3">Git</h3>
        <p className="opacity-80">
          Controlul versiunilor și siguranța proiectelor mele.
        </p>
      </div>

    </div>

  </div>
</section>


        {/* CONTACT */}
  <section
  id="contact"
  className="min-h-screen flex items-center justify-center px-6"
>
  <div className="flex flex-col items-center gap-10 text-center">
    
    <h2 className="text-4xl md:text-5xl font-bold">
      Contact
    </h2>

    <div className="flex flex-col gap-2">
      <h3 className="text-2xl md:text-3xl font-semibold">
        Email
      </h3>
      <p className="text-lg md:text-xl opacity-80">
        rnbrosca2003@gmail.com
      </p>
    </div>

    <div className="flex flex-col gap-2">
      <h3 className="text-2xl md:text-3xl font-semibold">
        Telefon
      </h3>
      <p className="text-lg md:text-xl opacity-80">
        0745 123 456
      </p>
    </div>

    <div className="flex flex-col gap-2">
      <h3 className="text-2xl md:text-3xl font-semibold">
        Instagram
      </h3>
      <p className="text-lg md:text-xl opacity-80">
        @bogdanneee
      </p>
    </div>

  </div>
</section>


      </main>
    </div>
  );
}
