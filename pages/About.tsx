
import React from 'react';
import { Mail, MapPin, Award, Users, Target } from 'lucide-react';
import { BRAND } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      {/* Intro */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase">Our Story</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Engineering the Future from Kwahu.</h1>
          <p className="text-slate-400 leading-relaxed text-lg">
            Founded in 2024, ITLabs Ghana was born out of a desire to centralize world-class software engineering in the serene heights of Abetifi, Kwahu. We believe geography shouldn't limit innovation.
          </p>
          <div className="flex items-center gap-3 text-slate-300">
            <MapPin className="text-indigo-400 w-5 h-5" />
            <span className="font-medium">{BRAND.location}</span>
          </div>
        </div>
        <div className="relative aspect-square">
           <div className="absolute inset-0 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
           <img 
            src="https://picsum.photos/seed/kwahu/800/800" 
            alt="Kwahu Landscape" 
            className="w-full h-full object-cover rounded-[3rem] glass border-slate-700 relative z-10 opacity-70"
           />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Our Mission", desc: "To provide high-performance digital tools that empower businesses to scale infinitely." },
          { icon: Users, title: "Our Community", desc: "Nurturing local tech talent in the Eastern Region through mentorship and collaboration." },
          { icon: Award, title: "Quality Standards", desc: "We adhere to international best practices in code quality, security, and performance." }
        ].map((item, i) => (
          <div key={i} className="glass p-8 rounded-3xl space-y-4 border-slate-700/50">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center">
              <item.icon className="text-indigo-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Leadership */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4">Leadership</h2>
          <h1 className="text-4xl font-extrabold">The Masterminds</h1>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* CEO */}
          <div className="group space-y-4 text-center">
            <div className="aspect-square rounded-[2rem] overflow-hidden glass border-slate-700 group-hover:border-indigo-500/50 transition-all">
              <img src="https://picsum.photos/seed/ceo/500/500" alt="CEO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
            </div>
            <div>
              <h3 className="text-xl font-bold">The Professor</h3>
              <p className="text-indigo-400 font-medium text-sm">Founder & CEO</p>
            </div>
            <a href={`mailto:${BRAND.emails.ceo}`} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> {BRAND.emails.ceo}
            </a>
          </div>

          <div className="group space-y-4 text-center">
            <div className="aspect-square rounded-[2rem] overflow-hidden glass border-slate-700 group-hover:border-indigo-500/50 transition-all">
              <img src="https://picsum.photos/seed/cto/500/500" alt="CTO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Tech Lead</h3>
              <p className="text-indigo-400 font-medium text-sm">System Architect</p>
            </div>
          </div>

          <div className="group space-y-4 text-center">
            <div className="aspect-square rounded-[2rem] overflow-hidden glass border-slate-700 group-hover:border-indigo-500/50 transition-all">
              <img src="https://picsum.photos/seed/ops/500/500" alt="Operations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Head of Growth</h3>
              <p className="text-indigo-400 font-medium text-sm">Operations Lead</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
