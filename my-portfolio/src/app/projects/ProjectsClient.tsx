"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function ProjectsClient({ projects }: { projects: any[] }) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Blocage du défilement quand le modal est ouvert
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Nettoyage si le composant est démonté
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Effet de lueur violette identique à la Home
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
    <main className="min-h-screen w-full bg-black text-white pt-32 pb-40 px-4 md:px-10 font-sans italic uppercase overflow-hidden relative">
      
      {/* LUEUR VIOLETTE DYNAMIQUE (Thème Home) */}
      <div 
        ref={glowRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out opacity-20"
      >
        <div className="absolute inset-0 bg-violet-700 blur-[130px] rounded-full" />
      </div>

      {/* NAVBAR COMPLÈTE */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 md:gap-10 px-8 py-3 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-xl shadow-2xl">
        <Link href="/" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold transition-all hover:text-white">
          Accueil
        </Link>
        <Link href="/about" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold transition-all hover:text-white">
          À Propos
        </Link>
        <Link href="/projects" className="text-[10px] uppercase tracking-[0.3em] text-white font-black transition-all">
          Projets
        </Link>
        <Link href="/contact" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold transition-all hover:text-white">
          Contact
        </Link>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="mb-32 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            Projets
          </h1>
          {/* Ligne de rappel rouge F1 */}
          <div className="h-1.5 w-32 bg-[#e10600] mx-auto mt-4 shadow-[0_0_15px_rgba(225,6,0,0.5)]" />
        </header>

        {/* GRILLE DE DÉPART */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`relative flex items-center cursor-pointer group transition-transform duration-500 hover:scale-[1.03] ${
                index % 2 !== 0 ? 'md:mt-24' : ''
              }`}
            >
              {/* Crochet F1 - Blanc pur pour le contraste */}
              <div className="absolute -left-4 -top-4 w-[110%] h-[120%] border-l-2 border-t-2 border-white/20 pointer-events-none group-hover:border-violet-500 transition-colors duration-500" />
              
              <div className="absolute -top-10 left-0 text-lg font-black text-white/40 tracking-tighter group-hover:text-violet-400 transition-colors">
                P{index + 1}
              </div>

              {/* Barre Projet - Plus sombre et vitrée (Glassmorphism) */}
              <div className="flex items-center w-full bg-white/[0.03] backdrop-blur-sm rounded-full overflow-hidden border border-white/5 group-hover:border-white/20 shadow-2xl transition-all">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center border-r border-white/5">
                  <span className="text-sm font-black not-italic text-[#e10600]">/</span>
                </div>

                <div className="flex-1 px-8 py-5">
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-none group-hover:text-violet-300 transition-all duration-500">
                    {project.title}
                  </h2>
                </div>
                
                <div className="px-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL TECHNIQUE (Mélange F1 et Violet Home) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border-l-8 border-violet-600 p-10 md:p-14 shadow-[0_0_100px_rgba(139,92,246,0.15)] animate-in slide-in-from-bottom-10 duration-500">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 text-xs font-black tracking-widest text-[#e10600] hover:text-white transition-colors"
            >
              [ FERMER X ]
            </button>

            <header className="mb-12">
              <span className="text-violet-400 text-[10px] font-black tracking-[0.4em]">FICHE TECHNIQUE</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 leading-none text-white italic">{selectedProject.title}</h2>
            </header>

            <div className="grid grid-cols-1 gap-10 mb-14">
              <div className="border-b border-white/5 pb-6">
                <h3 className="text-violet-400/50 text-[9px] font-black tracking-widest mb-3 uppercase">Technologies</h3>
                <p className="text-xl font-bold tracking-tight text-white">{selectedProject.technos}</p>
              </div>
              <div>
                <h3 className="text-white/30 text-[9px] font-black tracking-widest mb-3 uppercase">Contexte & Objectif</h3>
                <p className="not-italic text-gray-400 normal-case leading-relaxed text-base md:text-lg text-pretty">
                  {selectedProject.context || selectedProject.objective}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={selectedProject.github_repo} target="_blank" className="flex-1 bg-white/5 border border-white/10 py-5 text-center text-xs font-black hover:bg-white hover:text-black transition-all duration-300">
                VOIR LE CODE
              </a>
              {selectedProject.github_pages && (
                <a href={selectedProject.github_pages} target="_blank" className="flex-1 bg-violet-600 py-5 text-center text-xs font-black hover:bg-violet-500 transition-all duration-300 shadow-lg shadow-violet-900/20">
                  LANCER LA DÉMO
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}