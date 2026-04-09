"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Icônes SVG épurées
const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const GitHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);

export default function ContactClient({ data }: { data: any }) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    // CORRECTION ICI : removeEventListener au lieu de removeMouseMoveListener
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen w-full fixed bg-black text-white pt-32 pb-40 px-4 md:px-10 font-sans uppercase overflow-hidden relative">
      
      {/* GRILLE DE FOND DYNAMIQUE */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      {/* LUEUR AMBIANTE */}
      <div ref={glowRef} className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out opacity-20">
        <div className="absolute inset-0 bg-[#e10600]/20 blur-[150px] rounded-full" />
      </div>

      {/* NAVBAR RÉPARÉE */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 md:gap-10 px-8 py-3 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-xl shadow-2xl font-bold">
        <Link href="/" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold hover:text-white transition-all">Accueil</Link>
        <Link href="/about" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold hover:text-white transition-all">À Propos</Link>
        <Link href="/projects" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold hover:text-white transition-all">Projets</Link>
        <Link href="/contact" className="text-[10px] uppercase tracking-[0.3em] text-white font-bold hover:text-violet-400 transition-all">Contact</Link>
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* LOGO AAA (INVERSÉ & ÉPURÉ) */}
        <div className="relative mb-12 group pt-10">
          <div className="absolute inset-0 bg-[#e10600] blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />
          
          <div className="relative w-28 h-28 border border-white/10 rounded-full flex items-center justify-center bg-black shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-110">
             <Image 
                src="/logo_AAA.jpg" 
                alt="Logo AAA" 
                width={70} 
                height={70} 
                className="object-contain filter invert brightness-200"
             />
             <div className="absolute inset-0 border border-[#e10600]/20 rounded-full group-hover:border-[#e10600]/50 transition-colors" />
          </div>
        </div>

        {/* HEADER ÉPURÉ */}
        <header className="text-center mb-28">
          <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter italic leading-none">
            GET IN <span className="text-[#e10600] drop-shadow-[0_0_15px_rgba(225,6,0,0.4)]">TOUCH</span>
          </h1>
        </header>

        {/* GRID DE CONTACT MINIMALISTE */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mx-auto">
          
          {[
            { label: 'EMAIL', val: data.email, icon: <EmailIcon />, color: 'hover:border-blue-500', accent: 'bg-blue-500' },
            { label: 'LINKEDIN', val: 'antoine-allard', icon: <LinkedInIcon />, color: 'hover:border-white', accent: 'bg-white', url: data.linkedin_url },
            { label: 'GITHUB', val: 'AntoineAll', icon: <GitHubIcon />, color: 'hover:border-[#e10600]', accent: 'bg-[#e10600]', url: data.github_url }
          ].map((link, i) => (
            <a 
              key={i} 
              href={link.url || `mailto:${link.val}`} 
              target={link.url ? "_blank" : undefined}
              className={`flex-1 group relative flex items-center gap-6 p-8 bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-300 ${link.color}`}
            >
              <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                {link.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black tracking-[0.3em] text-gray-600 group-hover:text-gray-400 transition-colors">{link.label}</span>
                <span className="text-[13px] font-bold tracking-tight text-gray-300 group-hover:text-white transition-colors italic">
                  {link.val}
                </span>
              </div>
              {/* Indicateur de bordure dynamique */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${link.accent}`} />
            </a>
          ))}

        </div>

        {/* DÉCORATION FINALE */}
        <div className="mt-32 opacity-10">
            <div className="w-px h-24 bg-gradient-to-b from-[#e10600] to-transparent" />
        </div>

      </div>
    </main>
  );
}