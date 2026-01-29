"use client";
import InfiniteMenu from './components/infinite-menu/InfiniteMenu';
import ShinyButton from './components/ShinyButton';


export default function Home() {
  const projects = [
    { image: './shoop.png', link: '#', title: 'sHoop', description: 'Descriere' },
    { image: './sHoopV2.png', link: '#', title: 'sHoopV2', description: 'Descriere' },
    { image: './tracker.png', link: 'https://financetracker-iota.vercel.app/', title: 'Finance Tracker', description: 'Descriere' },
    { image: './ai-generator.png', link: '#', title: 'Image Generator', description: 'Descriere' },
    { image: './tracker.png', link: 'https://financetracker-iota.vercel.app/', title: 'Finance Tracker', description: 'Descriere' },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-emerald-500/30">
      
      {/* NAVBAR SPACING FIX */}
      <nav className="fixed top-0 left-0 h-20 w-full z-50 flex justify-between items-center px-10 md:px-20 py-6 bg-transparent pointer-events-none">
        {/* Navbar-ul rămâne gol conform cerinței tale, dar are padding sincronizat */}
      </nav>

      {/* FUNDAL FIX */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/pozica.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
      </div>
      
      <main className="relative z-10 w-full">
        
        {/* SECTIUNEA HOME REDESIGN */}
        <section 
  id="home" 
  className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20"
>
  {/* CONTAINER CENTRAL */}
  <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center py-24 md:py-0">
    
    {/* COLOANA: TITLU ȘI CTA (Acum apare PRIMA pe mobil) */}
    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-first">
      <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter mb-8">
        SALUT,<br />EU SUNT<br />
        <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-300 bg-clip-text text-transparent animate-gradient">
          BOGDAN
        </span>
      </h1>
      
      <div className="flex justify-center lg:justify-start w-full transition-transform hover:scale-105">
        <ShinyButton text="Here's my CV" link="/cv.pdf" />
      </div>
    </div>

    {/* COLOANA: CARD DESCRIERE (Acum apare A DOUA pe mobil) */}
    <div className="flex items-center justify-center order-last mt-8 lg:mt-0">
      <div className="relative group max-w-lg w-full">
        {/* Glow decorativ subtil */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative flex flex-col gap-4 md:gap-6 bg-black/60 p-8 md:p-14 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl"> 
          <span className="inline-block w-fit text-[10px] md:text-sm text-emerald-400 font-mono uppercase tracking-[0.4em] border-b border-emerald-500/30 pb-2">
            Creative Developer
          </span>
          <p className="text-base md:text-xl leading-relaxed text-gray-200 font-light">
            <span className="font-bold text-white text-xl md:text-3xl block mb-1 md:mb-2 font-serif">"</span>
            Mi-am început parcursul în lumea dezvoltării web. Toate aceste experiențe m-au determinat să urmez cu seriozitate drumul acesta.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

        {/* SECTIUNEA PROIECTE - Full Width logic */}
        <section 
          id="proiecte" 
          className="relative h-screen min-h-[700px] w-full bg-[#0a0a0a] flex items-center justify-center pointer-events-auto border-y border-white/5"
        >
          <div className="w-full h-full relative z-30 overflow-hidden pointer-events-auto">
            <InfiniteMenu items={projects} scale={1.5} />
          </div>
        </section>

        {/* SECTIUNE DESPRE - Centrată cu padding generos */}
        <section 
          id="despre" 
          className="relative min-h-screen w-full flex items-center justify-center px-10 md:px-24"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-10 italic text-white/10 uppercase tracking-widest">
              Povestea Mea
            </h2>
            <p className="text-xl md:text-3xl text-gray-400 leading-relaxed font-light italic">
              "Fiecare proiect este o oportunitate de a îmbina estetica vizuală cu funcționalitatea tehnică."
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}