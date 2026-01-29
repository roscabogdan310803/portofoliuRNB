"use client";
import InfiniteMenu from './components/infinite-menu/InfiniteMenu';

export default function Home() {
  const projects = [
    { image: 'https://picsum.photos/600/600?grayscale&sig=1', link: '#', title: 'Proiect 1', description: 'Descriere' },
    { image: 'https://picsum.photos/600/600?grayscale&sig=2', link: '#', title: 'Proiect 2', description: 'Descriere' },
    { image: 'https://picsum.photos/600/600?grayscale&sig=3', link: '#', title: 'Proiect 3', description: 'Descriere' },
    { image: 'https://picsum.photos/600/600?grayscale&sig=4', link: '#', title: 'Proiect 4', description: 'Descriere' }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-emerald-500/30">
      
      {/* 1. NAVBAR (Fixat sus) */}
      <nav className="fixed top-0 left-0 h-20 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-transparent pointer-events-none">
        <div className="text-xl font-bold tracking-tighter pointer-events-auto cursor-pointer">
        </div>
      </nav>

      {/* FUNDAL FIX */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/pozica.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>
      </div>
      
      <main className="relative z-10 w-full">
        
        {/* SECTIUNEA HOME - Adăugat px-6 md:px-20 pentru padding lateral */}
        <section 
          id="home" 
          className="relative h-screen min-h-[600px] w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 lg:px-32 gap-12"
        >
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
              SALUT,<br />EU SUNT<br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-300 bg-clip-text text-transparent animate-gradient">
                BOGDAN
              </span>
            </h1>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            {/* Box-ul de text are acum padding intern mai mare p-10 */}
            <div className="flex flex-col gap-6 bg-black/40 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl max-w-xl"> 
              <span className="block text-xs md:text-sm text-emerald-400 font-mono uppercase tracking-[0.3em]">
                Creative Developer
              </span>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 font-light">
                <span className="font-bold text-white">Mi-am început parcursul</span> în lumea dezvoltării web. Toate aceste experiențe m-au determinat să urmez cu seriozitate drumul acesta.
              </p>
            </div>
          </div>
        </section>

        {/* SECTIUNEA PROIECTE - Aceasta rămâne FĂRĂ padding lateral pentru efectul de full-width */}
        <section 
          id="proiecte" 
          className="relative h-screen min-h-[600px] w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
        >
          <div className="w-full h-full relative z-30">
            <InfiniteMenu items={projects} scale={1.5} />
          </div>
        </section>

        {/* SECTIUNE DESPRE - Padding generos pentru text */}
        <section 
          id="despre" 
          className="relative h-screen min-h-[600px] w-full flex items-center justify-center px-6 md:px-20 lg:px-40"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-white/20">DESPRE MINE</h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light italic">
              "Fiecare proiect este o oportunitate de a îmbina estetica vizuală cu funcționalitatea tehnică."
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}