
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  Mail,
  Phone,
  Gift
} from 'lucide-react';
import { BRAND } from './constants';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import AIChatbot from './components/AIChatbot';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-indigo-500 selection:text-white">
        <div className="mesh-bg" />
        
        {/* Header System */}
        <header className="fixed w-full z-40 transition-all duration-300">
          {/* Promo Banner */}
          {isBannerVisible && (
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 py-2 relative overflow-hidden group">
              <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4 text-xs md:text-sm font-bold text-white relative z-10">
                <Gift className="w-4 h-4 animate-bounce" />
                <span>{BRAND.promo}</span>
                <button className="underline hover:no-underline ml-2">Claim Now</button>
              </div>
              <button 
                onClick={() => setIsBannerVisible(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          )}

          {/* Sticky Navbar */}
          <nav className={`transition-all duration-300 ${
            isScrolled ? 'glass py-3 border-b border-white/10' : 'bg-transparent py-5'
          }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/20">
                  <span className="text-white font-black text-xl">IL</span>
                </div>
                <span className="text-xl font-black tracking-tight text-white">{BRAND.name}</span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
                <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-all active:scale-95 shadow-lg shadow-indigo-600/20">
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isMenuOpen && (
              <div className="md:hidden fixed inset-0 top-[100%] bg-slate-900/95 backdrop-blur-lg flex flex-col p-8 gap-6 animate-in slide-in-from-top duration-300 h-screen border-t border-white/10">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-white hover:text-indigo-400"
                  >
                    {link.name}
                  </Link>
                ))}
                <button className="mt-4 px-6 py-4 bg-indigo-600 text-white font-bold rounded-xl text-center">
                  Consultation
                </button>
              </div>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main className={`transition-all duration-300 ${isBannerVisible ? 'pt-24' : 'pt-16'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Floating Chatbot */}
        <AIChatbot />

        {/* Global Footer */}
        <footer className="glass border-t border-slate-800 pt-20 pb-10 mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <Link to="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                    <span className="text-white font-black text-sm">IL</span>
                  </div>
                  <span className="text-lg font-black tracking-tight text-white">{BRAND.name}</span>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Leading the digital transformation in Ghana with high-performance software engineering and innovative cloud solutions.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-white transition-all"><Twitter size={18} /></a>
                  <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-white transition-all"><Linkedin size={18} /></a>
                  <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-white transition-all"><Github size={18} /></a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6">Explore</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li><Link to="/" className="hover:text-indigo-400 transition-colors">Digital Mastery</Link></li>
                  <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Our Stack</Link></li>
                  <li><Link to="/portfolio" className="hover:text-indigo-400 transition-colors">Client Builds</Link></li>
                  <li><Link to="/about" className="hover:text-indigo-400 transition-colors">Leadership</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6">Quick Contact</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-center gap-2 italic">{BRAND.location}</li>
                  <li><a href={`mailto:${BRAND.emails.general}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors"><Mail size={16} /> {BRAND.emails.general}</a></li>
                  <li><a href={`mailto:${BRAND.emails.support}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors"><Mail size={16} /> Support Desk</a></li>
                  <li className="flex items-center gap-2"><Phone size={16} /> +233 (0) 555-TECH-IL</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-white font-bold">Newsletter</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Stay updated with the latest tech trends from our engineering lab.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="Your email" className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 outline-none" />
                  <button className="p-2 bg-indigo-600 rounded-lg text-white"><ArrowRight size={18} /></button>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
              <p>&copy; {BRAND.established} {BRAND.name}. Established Since {BRAND.established}.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-slate-300">Privacy Policy</a>
                <a href="#" className="hover:text-slate-300">Terms of Service</a>
                <a href="#" className="hover:text-slate-300">Abetifi HQ</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
