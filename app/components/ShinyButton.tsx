"use client";

export default function ShinyButton({ text, link }: { text: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        shiny-btn
        group relative inline-flex
        font-bold uppercase tracking-widest
        text-sm md:text-base
        rounded-2xl overflow-hidden
        border border-white/10
        transition-all duration-500
      "
    >
      {/* GRADIENT SLIDE */}
      <span
        className="
          absolute inset-0
          shiny-gradient
          bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300
        "
      ></span>

      {/* DARK BACKGROUND */}
      <span
        className="
          absolute inset-0
          bg-white/5
        "
      ></span>

      {/* TEXT */}
      <span
        className="
          relative z-10
          text-white
          group-hover:text-black
          transition-colors duration-500
        "
      >
        {text}
      </span>
    </a>
  );
}
