
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase">Case Studies</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold">Our Portfolio</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Explore our latest builds, from complex enterprise software to elegant user interfaces.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group glass rounded-3xl overflow-hidden border-slate-700/50 hover:border-indigo-500/30 transition-all">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.link} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/20 transition-all">
                  <ExternalLink className="text-white w-5 h-5" />
                </a>
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/20 transition-all">
                  <Github className="text-white w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-2">
              <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-widest">{project.category}</span>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              
              <div className="pt-4 flex items-center justify-between">
                <button className="text-sm font-semibold text-white/60 hover:text-white transition-colors">
                  View Live Build
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <div className="inline-block p-1 rounded-full glass border-slate-700">
          <div className="flex items-center gap-4 px-6 py-2">
            <span className="text-slate-400 text-sm">Have a vision?</span>
            <button className="text-indigo-400 text-sm font-bold hover:underline">Let's build it together</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
