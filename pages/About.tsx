
import React from 'react';
import { Mail, MapPin, Award, Users, Target, Code, Cpu, Smartphone } from 'lucide-react';
import { BRAND } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      {/* Intro */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-xs font-black tracking-[0.4em] text-indigo-400 uppercase">Our Story</h2>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white">Engineering the Future from Abetifi.</h1>
          <p className="text-slate-400 leading-relaxed text-lg font-medium">
            Founded in 2024, ITLabs Ghana was born out of a desire to centralize world-class software engineering in the serene heights of the Eastern Region. We believe geography shouldn't limit innovation.
          </p>
          <div className="flex items-center gap-3 text-slate-300 bg-white/5 self-start px-5 py-3 rounded-xl border border-white/5">
            <MapPin className="text-indigo-400 w-5 h-5" />
            <span className="font-black text-xs uppercase tracking-widest">{BRAND.location}</span>
          </div>
        </div>
        <div className="relative">
           <div className="absolute inset-0 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
           <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative z-10">
             <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
              alt="Tech Team Coding" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
             />
           </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Our Mission", desc: "To provide high-performance digital tools that empower businesses to scale infinitely with precision." },
          { icon: Users, title: "Our Community", desc: "Nurturing local tech talent in the Eastern Region through intensive mentorship programs." },
          { icon: Award, title: "Quality Standards", desc: "We adhere to ISO-grade software standards for every deployment we manage." }
        ].map((item, i) => (
          <div key={i} className="glass p-10 rounded-[2.5rem] space-y-6 border-white/5 hover:bg-white/5 transition-all group">
            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <item.icon className="text-indigo-400 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Leadership */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-[10px] font-black tracking-[0.4em] text-indigo-400 uppercase">The Founders</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">The Masterminds</h1>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[
            { name: "The Professor", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" },
            { name: "System Architect", role: "Chief Tech Officer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80" },
            { name: "Operations Lead", role: "Head of Growth", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80" },
          ].map((leader, i) => (
            <div key={i} className="group space-y-6 text-center">
              <div className="aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-indigo-500/50 transition-all shadow-xl">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-black text-white tracking-tight">{leader.name}</h3>
                <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest">{leader.role}</p>
              </div>
              {leader.name === "The Professor" && (
                <a href={`mailto:${BRAND.emails.ceo}`} className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
                  <Mail className="w-3 h-3" /> Direct Office
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
