import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { SERVICES, BRAND, SERVICE_ROUTES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-24">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-sm font-bold tracking-[0.3em] text-indigo-400 uppercase">Expert Engineering</h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Elite Services.</h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            We don't just write code; we architect digital assets. Our methodology ensures your business stays ahead of the curve.
          </p>
        </div>
        <div className="hidden md:block">
           <div className="glass px-6 py-4 rounded-2xl border-slate-800 text-indigo-300 font-bold flex items-center gap-2">
             <LucideIcons.ShieldCheck className="w-5 h-5" /> Enterprise Quality Guaranteed
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = (LucideIcons as any)[service.iconName];
          const serviceLink = SERVICE_ROUTES[service.id] || '/services';
          return (
            <Link
              key={service.id}
              to={serviceLink}
              className="glass p-10 rounded-[2.5rem] border-slate-700/50 hover:border-indigo-500/50 transition-all group relative overflow-hidden flex flex-col min-h-[400px] cursor-pointer"
            >
              <div className="absolute top-6 right-6">
                <span className="text-[10px] font-black uppercase tracking-widest bg-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full border border-indigo-500/30">
                  {service.deliveryBadge}
                </span>
              </div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                {Icon && <Icon className="text-indigo-400 w-8 h-8" />}
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-8 flex-1">
                {service.description}
              </p>
              
              <div className="text-white text-sm font-black flex items-center gap-2 group/btn bg-white/5 self-start px-6 py-3 rounded-xl group-hover:bg-white/10 transition-all">
                Learn More <LucideIcons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* High Impact Call to Action */}
      <div className="relative p-10 md:p-20 glass rounded-[3rem] border-indigo-500/30 overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80" 
          alt="Modern Office" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-[2s]"
        />
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
               New Year <br />
               <span className="gradient-text">Gift Offer 🎁</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-medium">
               Kickstart 2026 with a professional online presence. We build the site, you just handle the hosting. No development fees.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
             <a 
               href={`tel:${BRAND.phone}`}
               className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-xl hover:bg-slate-200 transition-all shadow-2xl active:scale-95 flex items-center gap-3"
             >
               <LucideIcons.Phone className="w-6 h-6" /> Call: {BRAND.phone}
             </a>
             <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Limited slots available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
