import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { BRAND, PROMO_TEXT } from '../../constants';

const AIIntegration: React.FC = () => {
  const features = [
    'Custom AI Models - Tailored to your needs',
    'Natural Language Processing - Chatbots & assistants',
    'Machine Learning - Predictive analytics',
    'Computer Vision - Image recognition',
    'AI-powered Automation - Streamline workflows',
    'Data Analytics - Extract insights',
    'Recommendation Systems - Personalized experiences',
    'AI API Integration - Connect to GPT, Claude, etc.'
  ];

  const technologies = ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Python', 'FastAPI'];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-16">
      {/* Back Button */}
      <Link 
        to="/services" 
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Services
      </Link>

      {/* Header */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center">
            <Cpu className="text-indigo-400 w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            AI Integration
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Harness the power of artificial intelligence to automate processes, gain insights, and deliver 
            exceptional user experiences. We bring cutting-edge AI to your business.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
            <a 
              href={`tel:${BRAND.phone}`}
              className="px-8 py-4 glass text-white font-bold rounded-xl border-slate-700 hover:bg-white/10 transition-all"
            >
              Call {BRAND.phone}
            </a>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" 
            alt="AI Integration" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* Features */}
      <div className="glass p-10 md:p-16 rounded-[3rem] border-slate-700/50">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8">What You Get</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="text-indigo-400 w-4 h-4" />
              </div>
              <span className="text-slate-300 text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center">Technologies We Use</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="glass px-6 py-3 rounded-xl border-slate-700 text-indigo-300 font-bold"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Timeline */}
      <div className="glass p-10 md:p-16 rounded-[3rem] border-indigo-500/30 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-white">Typical Delivery</h2>
        <p className="text-6xl font-black gradient-text">4-8 Weeks</p>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          AI implementation requires careful planning, model training, and testing. 
          Timeline varies based on complexity and data availability.
        </p>
      </div>

      {/* CTA */}
      <div className="glass p-10 md:p-16 rounded-[3rem] border-slate-700/50 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-white">Ready to Embrace AI?</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Stay ahead of the competition with intelligent automation and data-driven decision making.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-xl hover:bg-slate-200 transition-all shadow-2xl"
        >
          Contact Us Now
          <ArrowRight size={24} />
        </Link>
      </div>
    </div>
  );
};

export default AIIntegration;
