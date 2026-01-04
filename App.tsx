import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  Mail,
  Phone,
  Gift,
  ChevronRight
} from 'lucide-react';
import { BRAND } from './constants';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AIChatbot from './components/AIChatbot';

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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  const mainPaddingTop = isBannerVisible ? 'pt-[110px] md:pt-[130px]' : 'pt-[60px] md:pt-[80px]';

  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white flex flex-col">
      <ScrollToTop />
      <div className="mesh-bg" />
      
      <header className="fixed w-full top-0 z-[100] transition-transform duration-300">
        {isBannerVisible && (
          <div className="bg-indigo-600 relative overflow-hidden border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-[10px] md:text-xs font-bold text-white relative z-10">
              <div className="flex-1 flex justify-center items-center gap-2">
                <Gift className="w-3.5 h-3.5 text-yellow-400" />
                <span className="tracking-wide text-center">{BRAND.promo}</span>
              </div>
              <button onClick={() => setIsBannerVisible(false)} className="text-white/60 hover:text-white p-1 ml-4">
                <X size={14} />
              </button>
            </div>
          </div>
        )}

        <nav className={`transition-all duration-500 ${
          isScrolled 
            ? 'glass py-1.5 border-white/10 shadow-2xl backdrop-blur-3xl' 
            : 'bg-transparent py-3 border-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group z-50">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-indigo-500/20">
                <span className="text-white font-black text-sm md:text-base tracking-tighter">IL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-black tracking-tight text-white uppercase leading-none brand-logo">{BRAND.name}</span>
                <span className="text-[7px] font-bold text-indigo-400 tracking-[0.2em] uppercase mt-0.5">Digital Mastery</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path} 
                  className={({ isActive }) => 
                    `text-[9px] font-black uppercase tracking-widest transition-all relative group nav-link ${
                      isActive ? 'text-indigo-400' : 'text-slate-300 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
                </NavLink>
              ))}
              <a 
                href={`mailto:${BRAND.emails.general}`}
                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg transition-all shadow-lg"
              >
                Inquiry
              </a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`md:hidden p-1.5 z-[101] rounded-lg transition-all ${
                isMenuOpen ? 'bg-white/10 text-white' : 'text-white hover:bg-white/5'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Compact Mobile Nav Dropdown */}
          <div className={`md:hidden absolute top-full left-0 w-full glass backdrop-blur-3xl border-b border-white/10 transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-[80vh] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'
          }`}>
            <div className="flex flex-col gap-6 px-8 items-center text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-xl font-black text-white hover:text-indigo-400 transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 w-full" />
              <div className="flex flex-col gap-3">
                <a href={`tel:${BRAND.phone}`} className="text-xs text-slate-400 font-bold flex items-center justify-center gap-2">
                  <Phone size={14} className="text-indigo-500" /> {BRAND.phone}
                </a>
                <a href={`mailto:${BRAND.emails.general}`} className="text-xs text-slate-400 font-bold flex items-center justify-center gap-2">
                  <Mail size={14} className="text-indigo-500" /> support@itlabsghana.com
                </a>
              </div>
              <Link 
                to="/services"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-black rounded-xl shadow-xl uppercase tracking-widest"
              >
                Claim Free Website
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className={`flex-1 transition-all duration-300 ${mainPaddingTop}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <AIChatbot />

      <footer className="glass border-t border-white/5 pt-12 pb-8 mt-12 relative">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <Link to="/" className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xs">IL</span>
                </div>
                <span className="text-base font-black tracking-tight text-white uppercase brand-logo">{BRAND.name}</span>
              </Link>
              <p className="text-slate-500 text-[10px] leading-relaxed max-w-xs mx-auto md:mx-0 font-bold uppercase tracking-widest">
                Software engineered for growth. Built in Abetifi, deployed globally.
              </p>
              <div className="flex justify-center md:justify-start gap-3">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden sm:block">
              <h4 className="text-white font-black mb-4 text-[9px] uppercase tracking-[0.2em]">Quick Links</h4>
              <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                {navLinks.map(link => (
                  <li key={link.path}><Link to={link.path} className="hover:text-indigo-400 transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <h4 className="text-white font-black mb-4 text-[9px] uppercase tracking-[0.2em]">Capabilities</h4>
              <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <li>Web Creation</li>
                <li>Custom SaaS</li>
                <li>Mobile Logic</li>
                <li>CRM Systems</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-black text-[9px] uppercase tracking-[0.2em]">Headquarters</h4>
              <div className="text-[10px] text-slate-400 font-bold space-y-2">
                <p className="flex items-center justify-center md:justify-start gap-2"><MapPin size={12} className="text-indigo-500" /> {BRAND.location}</p>
                <p className="flex items-center justify-center md:justify-start gap-2"><Phone size={12} className="text-indigo-500" /> {BRAND.phone}</p>
                <p className="flex items-center justify-center md:justify-start gap-2"><Mail size={12} className="text-indigo-500" /> support@itlabsghana.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] text-slate-600 font-black uppercase tracking-[0.2em]">
            <p>&copy; 2026 {BRAND.name}. Established Since 2024. All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Re-using some generic icons not imported but available in lucide-react through the provided code
const MapPin = ({ size, className }: any) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;

const Root: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default Root;