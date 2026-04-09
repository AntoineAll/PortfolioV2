"use client";
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AboutClient({ data }: { data: any }) {
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
    <main className="min-h-screen w-full bg-black text-white pt-32 pb-40 px-4 md:px-10 font-sans uppercase overflow-x-hidden relative">
      
      {/* LUEUR VIOLETTE (Identique Projets) */}
      <div 
        ref={glowRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out opacity-25"
      >
        <div className="absolute inset-0 bg-violet-700 blur-[140px] rounded-full" />
      </div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 md:gap-10 px-8 py-3 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-xl shadow-2xl font-bold">
        <Link href="/" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold hover:text-white transition-all">Accueil</Link>
        <Link href="/about" className="text-[10px] uppercase tracking-[0.3em] text-white font-bold hover:text-violet-400 transition-all">À Propos</Link>
        <Link href="/projects" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold hover:text-white transition-all">Projets</Link>
        <Link href="/contact" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold hover:text-white transition-all">Contact</Link>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="mb-24 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            À Propos
          </h1>
          <div className="h-1.5 w-32 bg-[#e10600] mx-auto mt-4 shadow-[0_0_15px_rgba(225,6,0,0.5)]" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* FORMATIONS & INTÉRÊTS */}
          <div className="lg:col-span-4 space-y-12">
            <section>
              <h2 className="text-violet-400 text-[11px] font-black tracking-[0.4em] mb-8">Formations</h2>
              <div className="space-y-6">
                {data.formations.map((f: any, i: number) => (
                  <div key={i} className="relative p-6 bg-white/[0.03] border border-white/5 backdrop-blur-md group">
                    <div className="absolute -left-2 -top-2 w-10 h-10 border-l-2 border-t-2 border-white/20 group-hover:border-violet-500 transition-colors" />
                    <h3 className="text-lg font-black mt-2 leading-tight italic">{f.titre}</h3>
                    <p className="text-[12px] text-gray-300 normal-case mt-3 font-medium leading-relaxed">{f.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-violet-400 text-[11px] font-black tracking-[0.4em] mb-6">Intérêts</h2>
              <div className="space-y-3">
                {data.interets.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 bg-white/[0.02] p-4 border border-white/5 group hover:border-violet-500/30 transition-all">
                    <div className="w-1.5 h-4 bg-[#e10600] skew-x-[-20deg] shadow-[0_0_8px_#e10600]" />
                    <span className="text-[11px] font-black tracking-wider text-gray-300 group-hover:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* PARCOURS CENTRAL */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-violet-400 text-[11px] font-black tracking-[0.4em]">Expériences</h2>
            <div className="space-y-8">
              {data.experiences.map((exp: any, i: number) => (
                <div key={i} className="relative p-8 bg-white/[0.04] border border-white/10 backdrop-blur-xl group overflow-hidden">
                  <div className="absolute -left-2 -top-2 w-full h-full border-l border-t border-white/10 pointer-events-none group-hover:border-violet-500/40 transition-all" />
                  
                  <div className="mb-4">
                    <span className="inline-block border border-[#e10600] text-[#e10600] text-[10px] font-black px-3 py-1 tracking-widest bg-black shadow-[inset_0_0_10px_rgba(225,6,0,0.2)]">
                      {exp.periode}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black tracking-tighter italic group-hover:text-violet-300 transition-colors leading-none">{exp.poste}</h3>
                  <p className="text-[11px] text-violet-400 font-black mt-2 tracking-widest">{exp.entreprise}</p>
                  
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="text-[13px] text-gray-300 normal-case leading-relaxed font-medium text-pretty">
                      {exp.missions}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STACK & QUALITÉS */}
          <div className="lg:col-span-3 space-y-12">
            <section>
              <h2 className="text-violet-400 text-[11px] font-black tracking-[0.4em] mb-8">Stack Technique</h2>
              <div className="flex flex-wrap gap-2">
                {data.competences.techniques.split(',').map((tech: string, i: number) => (
                  <span key={i} className="text-[10px] bg-white/[0.05] border border-white/10 px-4 py-2.5 font-black italic hover:bg-violet-600 hover:text-white hover:border-violet-400 transition-all cursor-default tracking-tighter">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </section>

            <section className="p-8 bg-white/[0.02] border-l-4 border-violet-600 backdrop-blur-sm">
              <h2 className="text-white text-[11px] font-black tracking-[0.4em] mb-6">Qualités</h2>
              <p className="text-[13px] text-gray-400 normal-case leading-relaxed font-medium text-pretty">{data.competences.qualites}</p>
            </section>
          </div>

        </div>
      </div>
    </main>
  );
}