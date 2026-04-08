"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link'; // Import pour la navigation Next.js

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
      
      {/* Navbar Flottante (Inspirée de React Bits) */}
      <nav className="absolute top-8 z-50 flex items-center gap-8 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
        <Link href="/" className="text-[11px] uppercase tracking-[0.2em] text-white font-bold hover:text-violet-400 transition-colors">Accueil</Link>
        <Link href="/about" className="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">À Propos</Link>
        <Link href="/projects" className="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">Projets</Link>
        <Link href="/contact" className="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">Contact</Link>
      </nav>

      {/* Lueur interactive */}
      <div 
        ref={glowRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out opacity-25"
      >
        <div className="absolute inset-0 bg-violet-700 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mt-20">
        
        {/* Ton contenu actuel (Badge, Titre, Description, Bouton) */}
        <div className="mb-12 px-5 py-2 border border-white/10 bg-white/5 rounded-full">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-bold">
            Web@cadémie • Portfolio 2026
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-10 italic">
          {data.title}
        </h1>

        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-14 max-w-2xl">
          {content}
        </p>

        <Link 
          href="/projects" 
          className="px-14 py-5 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-xl active:scale-95"
        >
          Voir mes réalisations
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-10 w-full flex justify-between px-12 text-[10px] text-gray-600 tracking-[0.5em] uppercase font-bold">
        <span>Antoine Allard</span>
        <span>MMXXVI</span>
      </footer>
    </main>
  );
}