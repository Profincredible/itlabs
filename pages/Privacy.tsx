import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-8">
      <h1 className="text-4xl font-extrabold gradient-text">Privacy Policy</h1>
      <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Last Updated: January 2026</p>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
        <p className="text-slate-400 leading-relaxed">
          Welcome to ITLabs Ghana. We value your privacy and are committed to protecting your personal data in our 2026 roadmap and beyond. This privacy policy explains how we handle your information when you visit our website or use our premium services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Data We Collect</h2>
        <p className="text-slate-400 leading-relaxed">
          We collect information that you provide directly to us, such as when you fill out a contact form or interact with our Gemini-powered AI consultant. This may include your name, email address, and any project details you share.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>To provide and maintain our engineering services.</li>
          <li>To notify you about changes to our 2026 promo offers.</li>
          <li>To provide customer support and technical advice.</li>
          <li>To improve our website functionality and user experience.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Contact Us</h2>
        <p className="text-slate-400 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at support@itlabsghana.com.
        </p>
      </section>
    </div>
  );
};

export default Privacy;