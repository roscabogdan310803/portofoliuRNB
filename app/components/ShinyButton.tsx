"use client";

export default function ShinyButton({ text = "Here's my CV", link = "#" }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-white/5 rounded-full overflow-hidden border border-white/10 hover:border-emerald-500/50 hover:scale-105 active:scale-95 shadow-2xl"
    >
      {/* Efectul de Shimmer (Lumina care trece peste buton) */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
      
      {/* Glow-ul din spate la hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-emerald-500/5 blur-xl"></div>
      
      <span className="relative z-10 flex items-center gap-3 tracking-[0.2em] text-[10px] md:text-xs uppercase font-black">
        {text}
        <svg 
          className="w-4 h-4 transition-transform duration-500 group-hover:rotate-[-45deg] group-hover:text-emerald-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </a>
  );
}