"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomeClient({ data, content }: { data: any, content: string }) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* NAVBAR FLOTTANTE - Style Glassmorphism */}
      <nav className="fixed top-6 z-50 flex items-center gap-6 md:gap-10 px-8 py-3 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-xl shadow-2xl">
        <Link href="/" className="text-[10px] uppercase tracking-[0.3em] text-white font-bold transition-all hover:text-violet-400">
          Accueil
        </Link>
        <Link href="/about" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold transition-all hover:text-white">
          À Propos
        </Link>
        <Link href="/projects" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold transition-all hover:text-white">
          Projets
        </Link>
        <Link href="/contact" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold transition-all hover:text-white">
          Contact
        </Link>
      </nav>

      {/* LUEUR DYNAMIQUE - Plus douce pour l'UX */}
      <div 
        ref={glowRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out opacity-25"
      >
        <div className="absolute inset-0 bg-violet-700 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl pt-12">
        
        {/* BADGE CENTRAL */}
        <div className="mb-10 px-5 py-2 border border-white/10 bg-white/5 rounded-full backdrop-blur-md transition-colors hover:border-white/20">
          <span className="text-[9px] tracking-[0.5em] uppercase text-gray-400 font-black">
            Web@cadémie • 2026
          </span>
        </div>

        {/* TITRE - Impact visuel fort */}
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-10 italic drop-shadow-2xl">
          {data.title}
        </h1>

        {/* DESCRIPTION - Grisée pour la lisibilité */}
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-14 max-w-2xl px-4">
          {content}
        </p>

        {/* CTA - Bouton Pilule Blanc */}
        <Link 
          href="/projects" 
          className="px-14 py-5 bg-white text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          Voir mes réalisations
        </Link>
      </div>

      {/* FOOTER */}
      <footer className="absolute bottom-10 w-full flex justify-between px-12 text-[9px] text-gray-600 tracking-[0.6em] uppercase font-black">
        <span className="opacity-50 hover:opacity-100 transition-opacity">Antoine Allard</span>
        <span className="opacity-50 hover:opacity-100 transition-opacity tracking-[0.8em]">MMXXVI</span>
      </footer>
    </main>
  );
}