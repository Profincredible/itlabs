
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase">Expert Solutions</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold">Professional Services</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          We leverage cutting-edge technology to build robust systems that scale with your ambitions. 
          Every project includes our quality assurance and post-launch support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = (LucideIcons as any)[service.iconName];
          return (
            <div 
              key={service.id} 
              className="glass p-8 rounded-3xl border-slate-700/50 hover:border-indigo-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/20">
                  {service.deliveryBadge}
                </span>
              </div>
              
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                {Icon && <Icon className="text-indigo-400 w-7 h-7" />}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <button className="text-indigo-400 text-sm font-bold flex items-center gap-2 group/btn">
                Learn more <LucideIcons.ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Special Offer Section */}
      <div className="mt-20 p-8 md:p-12 glass rounded-[2.5rem] border-indigo-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">New Year Gift Offer 🎁</h2>
            <p className="text-slate-300 max-w-xl">
              Start your digital journey for free. We are offering free website development for new clients! You only cover the domain and hosting costs.
            </p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors">
            Claim Your Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
