
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Cpu, Zap } from 'lucide-react';
import { STATS, BRAND } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-indigo-500/30 text-indigo-300 text-sm font-medium">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            Revolutionizing Tech in {BRAND.location}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Digital Mastery <br />
            <span className="gradient-text">Redefined.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            At ITLabs Ghana, we engineer high-performance software, websites, and SaaS solutions that drive global impact from the heart of Kwahu.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/services" 
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all hover:translate-y-[-2px] shadow-lg shadow-indigo-600/20"
            >
              Our Solutions <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 glass text-white rounded-xl font-bold hover:bg-white/5 transition-all border-slate-700"
            >
              Meet the Team
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-800">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1 group">
                <div className="text-indigo-400 mb-1 group-hover:animate-tech-float">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          {/* Abstract Tech Visual */}
          <div className="w-full aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative glass border-slate-700/50 p-8 rounded-3xl animate-tech-float">
               <pre className="text-xs text-indigo-400 font-mono leading-relaxed">
{`const ITLabs = {
  mission: "Digital Excellence",
  location: "Abetifi, Kwahu",
  established: 2024,
  core: [
    "Web Engineering",
    "Mobile Systems",
    "SaaS Architecture"
  ],
  isHiring: true
};

function deliverExcellence() {
  return ITLabs.core.map(tech => 
    optimize(tech)
  );
}`}
               </pre>
            </div>
            {/* Floating Icons */}
            <div className="absolute top-10 right-10 p-4 glass rounded-2xl animate-bounce delay-100">
              <Code className="text-sky-400" />
            </div>
            <div className="absolute bottom-10 left-10 p-4 glass rounded-2xl animate-bounce delay-500">
              <Shield className="text-purple-400" />
            </div>
            <div className="absolute top-1/2 -left-10 p-4 glass rounded-2xl animate-pulse">
              <Cpu className="text-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
