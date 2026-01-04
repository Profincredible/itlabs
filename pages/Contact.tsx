import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BRAND } from '../constants';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-sm font-bold tracking-[0.3em] text-indigo-400 uppercase">Get In Touch</h2>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Contact Us</h1>
        <p className="text-slate-400 text-xl leading-relaxed">
          Ready to transform your digital presence? Our team in Abetifi is here to help bring your vision to life.
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass p-8 rounded-3xl border-slate-700/50 space-y-4 hover:border-indigo-500/50 transition-all">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
            <MapPin className="text-indigo-400 w-7 h-7" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Location</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{BRAND.location}</p>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border-slate-700/50 space-y-4 hover:border-indigo-500/50 transition-all">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
            <Phone className="text-indigo-400 w-7 h-7" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
            <a href={`tel:${BRAND.phone}`} className="text-slate-400 text-sm hover:text-white transition-colors">
              {BRAND.phone}
            </a>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border-slate-700/50 space-y-4 hover:border-indigo-500/50 transition-all">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
            <Mail className="text-indigo-400 w-7 h-7" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Email</h3>
            <div className="space-y-1">
              <a href={`mailto:${BRAND.emails.general}`} className="block text-slate-400 text-sm hover:text-white transition-colors">
                {BRAND.emails.general}
              </a>
              <a href={`mailto:${BRAND.emails.support}`} className="block text-slate-400 text-sm hover:text-white transition-colors">
                {BRAND.emails.support}
              </a>
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border-slate-700/50 space-y-4 hover:border-indigo-500/50 transition-all">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
            <Clock className="text-indigo-400 w-7 h-7" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Business Hours</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mon - Fri: 9:00 AM - 6:00 PM<br />
              Sat: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
