import React, { useState } from 'react';
import { Send, Mail, Phone, Loader2, CheckCircle } from 'lucide-react';
import { BRAND } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Dual-Logic Email Engine
    try {
      // Step 1: Try to send via Formspree or equivalent API
      const response = await fetch('https://formspree.io/f/mnqkglon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New ITLabs Inquiry: ${formData.subject}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('API failed');
      }
    } catch (err) {
      console.error('API Error, falling back to mailto:', err);
      // Step 2: Fallback to mailto link
      const mailtoLink = `mailto:${BRAND.emails.general}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setStatus('idle');
    }
  };

  return (
    <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl -z-10" />
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-black text-white tracking-tight mb-4">Let's build something <span className="gradient-text">legendary.</span></h2>
            <p className="text-slate-400">Have a project in mind? Our team in Abetifi is ready to bring your vision to life.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Call Us</p>
                <p className="text-white font-bold">{BRAND.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Support</p>
                <p className="text-white font-bold">{BRAND.emails.support}</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              type="text"
              placeholder="Full Name"
              className="bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <input
            required
            type="text"
            placeholder="Subject (e.g., SaaS Development)"
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={formData.subject}
            onChange={e => setFormData({ ...formData, subject: e.target.value })}
          />
          <textarea
            required
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
          />
          
          <button
            disabled={status === 'loading'}
            className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black rounded-xl shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 active:scale-95 transition-all disabled:opacity-50"
          >
            {status === 'loading' ? (
              <Loader2 className="animate-spin" />
            ) : status === 'success' ? (
              <><CheckCircle /> Message Sent!</>
            ) : (
              <><Send size={20} /> Send Inquiry</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;