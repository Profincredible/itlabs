import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe, Code, Layers, Cpu, Database, Smartphone, Terminal } from 'lucide-react';
import { STATS, BRAND } from '../constants';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const techStack = [
    { name: 'React 19', icon: <Layers size={20} /> },
    { name: 'Node.js', icon: <Cpu size={20} /> },
    { name: 'GoLang', icon: <Terminal size={20} /> },
    { name: 'PostgreSQL', icon: <Database size={20} /> },
    { name: 'Kubernetes', icon: <Shield size={20} /> },
    { name: 'iOS Native', icon: <Smartphone size={20} /> },
    { name: 'Cloud Native', icon: <Globe size={20} /> },
  ];

  return (
    <div className="space-y-32 pb-32">
      {/* High Impact Hero */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center min-h-[85vh] relative">
        <div className="space-y-10 animate-in fade-in slide-in-from-left duration-700 z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-indigo-500/30 text-indigo-300 text-[9px] font-black uppercase tracking-[0.25em]">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            2026 Digital Mastery Campaign
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.85] tracking-tighter text-white">
            Infinite <br />
            <span className="gradient-text">Engineering.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
            ITLabs Ghana is a premier software development forge based in Abetifi. We build highly-resilient digital systems for the global elite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link 
              to="/services" 
              className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Start Build <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/portfolio" 
              className="px-10 py-5 glass text-white rounded-2xl font-bold hover:bg-white/10 transition-all border-slate-700 flex items-center justify-center gap-3"
            >
              The 2026 Roadmap
            </Link>
          </div>

          <div className="flex items-center gap-10 pt-8 border-t border-white/5">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1 group">
                <div className="text-4xl font-black text-white tracking-tighter group-hover:text-indigo-400 transition-colors">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right duration-1000 hidden lg:block">
          <div className="relative z-10 rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl group">
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
               alt="Advanced Software Lab" 
               className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-[6s]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
             
             <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl border-white/20 backdrop-blur-3xl animate-tech-float">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                    <Code className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl tracking-tight leading-none">Enterprise Forge</h3>
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mt-2">Kwahu High Tech District</p>
                  </div>
                </div>
             </div>
          </div>
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
        </div>
      </section>

      {/* Visual Tech Marquee */}
      <section className="border-y border-white/5 py-12 bg-white/5 overflow-hidden relative">
        <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 text-slate-400 font-black text-sm uppercase tracking-widest grayscale hover:grayscale-0 transition-all cursor-default group">
              <span className="text-indigo-500 group-hover:scale-125 transition-transform">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </section>

      {/* Hero 2: The Logic Behind ITLabs */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
           <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group order-2 lg:order-1">
             <img 
               src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" 
               alt="Code Terminal Architecture" 
               className="w-full h-[600px] object-cover transition-transform duration-[4s] group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-all" />
             <div className="absolute top-10 left-10 glass p-6 rounded-2xl border-white/10 text-white font-black text-xs uppercase tracking-widest">
               Established Since 2024
             </div>
           </div>
           <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">Built for <br /><span className="gradient-text">Absolute Scale.</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Our code is engineered to survive. From Abetifi to the world, we deploy systems that handle millions of requests with sub-100ms latency.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Latency', val: '< 60ms' },
                  { label: 'Availability', val: '99.99%' },
                  { label: 'Encryption', val: 'End-to-End' },
                  { label: 'Delivery', val: 'Agile 2.0' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-[10px] text-indigo-400 uppercase tracking-widest font-black">{stat.label}</p>
                    <p className="text-white font-bold text-xl">{stat.val}</p>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link to="/services" className="inline-flex items-center gap-2 text-white font-black text-xs uppercase tracking-[0.2em] border-b-2 border-indigo-500 pb-2 hover:gap-4 transition-all">
                  Explore Capabilities <ArrowRight size={14} />
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6">
        <ContactForm />
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Home;