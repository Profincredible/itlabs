
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
    { name: 'iOS/Android', icon: <Smartphone size={20} /> },
    { name: 'Cloud Native', icon: <Globe size={20} /> },
  ];

  return (
    <div className="space-y-32 pb-32 overflow-hidden">
      {/* Immersive Hero Section */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center min-h-[90vh] relative pt-12">
        <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000 z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border-indigo-500/30 text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            2026 Digital Mastery Campaign
          </div>
          
          <h1 className="text-6xl md:text-[6.5rem] font-black leading-[0.8] tracking-tighter text-white">
            Infinite <br />
            <span className="gradient-text">Engineering.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
            ITLabs Ghana is a premier software development lab based in Abetifi. We architect highly-resilient digital systems for the global elite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link 
              to="/services" 
              className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
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
          <div className="relative z-10 rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl group">
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
               alt="Advanced Software Lab" 
               className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-[8s]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
             
             <div className="absolute bottom-12 left-12 right-12 glass p-10 rounded-[3rem] border-white/20 backdrop-blur-3xl animate-tech-float">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center border border-white/30 shadow-inner">
                    <Code className="text-white w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-2xl tracking-tight leading-none">Enterprise Forge</h3>
                    <p className="text-slate-400 text-[11px] uppercase tracking-[0.3em] font-bold mt-3">Abetifi High-Tech District</p>
                  </div>
                </div>
             </div>
          </div>
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[150px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] -z-10" />
        </div>
      </section>

      {/* Tech Stack Horizontal Scroll */}
      <section className="border-y border-white/5 py-16 bg-white/5 relative overflow-hidden">
        <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-6 text-slate-400 font-black text-lg uppercase tracking-[0.2em] grayscale hover:grayscale-0 transition-all cursor-default group">
              <span className="text-indigo-500 group-hover:scale-150 transition-transform duration-500">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Section: Scaling for 2026 */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <div className="relative rounded-[4rem] overflow-hidden border border-white/10 group order-2 lg:order-1 shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" 
               alt="Code Terminal Architecture" 
               className="w-full h-[650px] object-cover transition-transform duration-[6s] group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-all duration-700" />
             <div className="absolute top-12 left-12 glass px-8 py-4 rounded-2xl border-white/10 text-white font-black text-xs uppercase tracking-[0.3em]">
               2026 Engineering Standards
             </div>
           </div>
           <div className="space-y-10 order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.85]">Engineered for <br /><span className="gradient-text">Absolute Scale.</span></h2>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                Our code is engineered to survive. From Abetifi to the world, we deploy systems that handle millions of requests with zero friction and military-grade encryption.
              </p>
              <div className="grid grid-cols-2 gap-10">
                {[
                  { label: 'Latency', val: '< 50ms' },
                  { label: 'Availability', val: '99.99%' },
                  { label: 'Security', val: 'Zero-Trust' },
                  { label: 'Development', val: 'Native ES6' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2 group">
                    <p className="text-[10px] text-indigo-400 uppercase tracking-[0.3em] font-black group-hover:text-white transition-colors">{stat.label}</p>
                    <p className="text-white font-bold text-2xl tracking-tighter">{stat.val}</p>
                  </div>
                ))}
              </div>
              <div className="pt-8">
                <Link to="/services" className="inline-flex items-center gap-4 text-white font-black text-xs uppercase tracking-[0.4em] border-b-2 border-indigo-500 pb-4 hover:gap-8 transition-all">
                  Our 2026 Capabilities <ArrowRight size={16} />
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Global Campaign Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative p-12 md:p-24 glass rounded-[4rem] border-white/10 overflow-hidden">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] -z-10" />
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">Join the <br /><span className="gradient-text">Digital Elite.</span></h2>
                <p className="text-slate-400 text-lg md:text-xl font-medium">
                  We are now accepting project briefs for the 2026 New Year cycle. Secure your development slot in the most advanced software forge in Ghana.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 glass rounded-xl text-indigo-300 font-bold text-xs uppercase tracking-widest">Free Dev Labor</div>
                  <div className="px-6 py-3 glass rounded-xl text-indigo-300 font-bold text-xs uppercase tracking-widest">24/7 Priority</div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center md:items-end">
                 <Link to="/services" className="w-full md:w-auto px-12 py-7 bg-white text-slate-950 font-black text-xl rounded-2xl shadow-3xl hover:scale-110 active:scale-95 transition-all text-center">
                    Claim 2026 Offer
                 </Link>
                 <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Campaign Slots: 12/20 Remaining</p>
              </div>
           </div>
        </div>
      </section>

      {/* Contact Forge */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <ContactForm />
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Home;
