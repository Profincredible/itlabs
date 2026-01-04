import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
      <div className="max-w-3xl space-y-6">
        <h2 className="text-xs font-black tracking-[0.4em] text-indigo-400 uppercase">2026 Build Cycle</h2>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">Elite Software <br /> Showcases.</h1>
        <p className="text-slate-400 text-xl font-medium leading-relaxed">
          Explore our collection of high-performance digital tools, from financial gateways to enterprise management systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group flex flex-col h-full">
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl mb-8 bg-slate-900">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                loading="lazy"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-sm">
                 <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <a href={project.link} className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                      <ExternalLink size={24} />
                    </a>
                    <a href={project.link} className="w-14 h-14 glass text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                      <Github size={24} />
                    </a>
                 </div>
              </div>
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 glass rounded-full text-[9px] font-black uppercase tracking-widest text-white border-white/20">
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="px-2 space-y-4 flex-1 flex flex-col">
              <h3 className="text-3xl font-black text-white tracking-tight">{project.title}</h3>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed flex-1">
                {project.description}
              </p>
              
              <div className="pt-6">
                <button className="flex items-center gap-2 text-indigo-400 font-black text-[10px] uppercase tracking-widest group/link">
                  Request Build Specs <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2026 Campaign Callout */}
      <section className="glass rounded-[4rem] p-12 md:p-24 border-indigo-500/20 relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">Your 2026 Roadmap <br /><span className="gradient-text">Starts with Mastery.</span></h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium">Join the digital elite. We are accepting major project briefs for the 2026 build cycle.</p>
            <div className="flex flex-wrap gap-4">
               <div className="px-6 py-3 glass rounded-2xl text-white font-bold text-xs uppercase tracking-widest border-white/5">High Scalability</div>
               <div className="px-6 py-3 glass rounded-2xl text-white font-bold text-xs uppercase tracking-widest border-white/5">Swift Delivery</div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link to="/services" className="px-14 py-7 bg-white text-slate-950 font-black text-xl rounded-2xl shadow-3xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter">
              Claim 2026 Offer
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px]" />
      </section>
    </div>
  );
};

export default Portfolio;