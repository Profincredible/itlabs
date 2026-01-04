import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, ChevronRight, Play, Globe, Code, Layers, Cpu, Database, Smartphone } from 'lucide-react';
import { STATS, BRAND } from '../constants';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const techStack = [
    { name: 'React 19', icon: <Layers size={20} /> },
    { name: 'Node.js', icon: <Cpu size={20} /> },
    { name: 'GoLang', icon: <Code size={20} /> },
    { name: 'Kubernetes', icon: <Shield size={20} /> },
    { name: 'PostgreSQL', icon: <Database size={20} /> },
    { name: 'iOS/Android', icon: <Smartphone size={20} /> },
    { name: 'Cloud Native', icon: <Globe size={20} /> },
  ];

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
        <div className="space-y-10 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-indigo-500/30 text-indigo-300 text-[9px] font-black uppercase tracking-[0.2em]">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            2026 Digital Innovation Campaign
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-white">
            Software <br />
            <span className="gradient-text">Architected.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
            ITLabs Ghana is an elite engineering forge in Abetifi. We build high-resiliency digital assets for the global economy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link 
              to="/services" 
              className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/portfolio" 
              className="px-10 py-5 glass text-white rounded-2xl font-bold hover:bg-white/10 transition-all border-slate-700 flex items-center justify-center gap-3"
            >
              The 2026 Roadmap
            </Link>
          </div>

          <div className="flex items-center gap-12 pt-8 border-t border-white/5">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1 group">
                <div className="text-4xl font-black text-white tracking-tighter group-hover:text-indigo-400 transition-colors">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right duration-1000 hidden lg:block">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl group">
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
               alt="Resilient Infrastructure" 
               className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-[4s]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
             
             <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-2xl border-white/20 backdrop-blur-3xl animate-tech-float">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center border border-white/20 shadow-inner">
                    <Code className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-lg tracking-tight">Enterprise Stack</h3>
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Resiliency Guaranteed</p>
                  </div>
                </div>
             </div>
          </div>
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
        </div>
      </section>

      {/* Full Width Tech Visual Section */}
      <section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80" 
          alt="Tech Innovation" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        
        <div className="relative z-10 max-w-4xl px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Code that lives and <span className="gradient-text">breathes.</span></h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">Our engineering philosophy combines rigorous logic with artistic design to deliver products that perform under any load.</p>
          <div className="flex justify-center gap-12 pt-8">
             <div className="text-center">
                <div className="text-3xl font-black text-white tracking-tighter">0%</div>
                <div className="text-[9px] uppercase tracking-widest text-indigo-400 font-black">Technical Debt</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-black text-white tracking-tighter">200ms</div>
                <div className="text-[9px] uppercase tracking-widest text-indigo-400 font-black">Latency Ceiling</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-black text-white tracking-tighter">100%</div>
                <div className="text-[9px] uppercase tracking-widest text-indigo-400 font-black">Ownership</div>
             </div>
          </div>
        </div>
      </section>

      {/* Scrolling Tech Stack */}
      <section className="border-y border-white/5 py-12 bg-white/5 overflow-hidden">
        <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-300 font-black text-xs uppercase tracking-widest grayscale hover:grayscale-0 transition-all cursor-default">
              <span className="text-indigo-500">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </section>

      {/* Mobile-Heavy Tech Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">Engineered for <br /><span className="gradient-text">Absolute Scale.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">From multi-tenant SaaS platforms to high-frequency fintech apps, we build on resilient infrastructures that handle millions of requests.</p>
            <ul className="space-y-4">
              {['Auto-Scaling Cloud Infrastructure', 'CI/CD Automated Pipelines', 'Military Grade Encryption', 'Edge-Optimized Content Delivery'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-bold text-sm">
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-indigo-500">
                    <Zap size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="rounded-[3rem] overflow-hidden border border-white/10 relative z-10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" 
                alt="Software Dev Lab" 
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-white z-20 shadow-3xl rotate-[-6deg]">
               <div className="text-center">
                 <div className="text-4xl font-black">2026</div>
                 <div className="text-[9px] uppercase tracking-widest font-black">Standard</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="max-w-7xl mx-auto px-6">
        <ContactForm />
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Home;