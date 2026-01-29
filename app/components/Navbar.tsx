"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Acasă", href: "#home" },
    { name: "Proiecte", href: "#proiecte" },
    { name: "Skill-uri", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white/[0.02] backdrop-blur-md border-b border-white/[0.05]">
      {/* Am ajustat px-10 pentru mobil ca burger-ul să fie mai spre interior (stânga) */}
      <nav className="max-w-[1440px] mx-auto px-10 md:px-20 h-14 md:h-16 flex justify-end items-center">
        
        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-sm uppercase tracking-[0.3em] font-bold">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a href={link.href} className="opacity-50 group-hover:opacity-100 transition-all duration-300">
                {link.name}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* HAMBURGER BUTTON - Mutat mai spre stânga prin padding-ul de nav */}
        <button 
          className="md:hidden text-white z-[110] relative p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={32} className="text-emerald-400" /> : <Menu size={32} />}
        </button>

        {/* MOBILE OVERLAY MENU - FULL SCREEN */}
        <div className={`fixed inset-0 w-full h-screen bg-black/98 backdrop-blur-2xl transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible translate-y-[-10px]"} md:hidden flex flex-col items-center justify-center`}>
          <ul className="flex flex-col gap-12 text-center">
            {navLinks.map((link, index) => (
              <li 
                key={link.name}
                className={`transform transition-all duration-500 delay-[${index * 100}ms] ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black uppercase tracking-[0.4em] text-white hover:text-emerald-400 active:text-emerald-500 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Decor subtil în meniul full-screen */}
          <div className="absolute bottom-10 text-white/10 text-xs tracking-[1em] uppercase">
            Bogdan Portofoliu
          </div>
        </div>
      </nav>
    </header>
  );
}