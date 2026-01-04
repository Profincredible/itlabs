import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-8">
      <h1 className="text-4xl font-extrabold gradient-text">Terms of Service</h1>
      <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Last Updated: January 2026</p>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
        <p className="text-slate-400 leading-relaxed">
          By accessing or using ITLabs Ghana's services in 2026, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Services</h2>
        <p className="text-slate-400 leading-relaxed">
          ITLabs Ghana provides a range of software development services including web development, mobile applications, cloud solutions, and AI integration. The scope of each project will be defined in a separate statement of work.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. New Year 2026 Promo: Free Website Development</h2>
        <p className="text-slate-400 leading-relaxed">
          Our New Year 2026 promotional offer includes complimentary website development services. This offer is subject to the following terms and conditions:
        </p>
        <ul className="list-disc list-inside text-slate-400 leading-relaxed space-y-2 ml-4">
          <li><strong className="text-white">Domain Name Purchase Required:</strong> Clients must purchase their own domain name from a domain registrar of their choice. ITLabs Ghana can provide recommendations but does not include domain registration in the free development offer.</li>
          <li><strong className="text-white">Hosting Fees Apply:</strong> Clients are responsible for all web hosting costs. A minimum 12-month hosting plan is required to qualify for the free development offer. ITLabs Ghana can recommend suitable hosting providers based on your project requirements.</li>
          <li><strong className="text-white">Project Eligibility:</strong> This offer applies to standard business websites and small e-commerce sites. Complex enterprise applications, custom software, or projects requiring extensive backend development may not qualify or may require additional fees.</li>
          <li><strong className="text-white">Limited Availability:</strong> This promotional offer is available for a limited time and limited number of projects. ITLabs Ghana reserves the right to end this promotion at any time.</li>
          <li><strong className="text-white">No Cash Alternative:</strong> The free development offer has no cash value and cannot be exchanged for other services or products.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Intellectual Property</h2>
        <p className="text-slate-400 leading-relaxed">
          The content, features, and functionality of this website are owned by ITLabs Ghana and are protected by international copyright and trademark laws. Established Since 2024.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
        <p className="text-slate-400 leading-relaxed">
          ITLabs Ghana shall not be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use our software or services.
        </p>
      </section>
    </div>
  );
};

export default Terms;