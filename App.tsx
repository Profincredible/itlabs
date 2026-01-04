import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Phone,
  Gift,
  ChevronRight,
  MapPin
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

  const mainPaddingTop = isBannerVisible ? 'pt-[105px] md:pt-[130px]' : 'pt-[65px] md:pt-[80px]';

  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white flex flex-col">
      <ScrollToTop />
      <div className="mesh-bg" />
      
      <header className="fixed w-full top-0 z-[100] transition-transform duration-300">
        {isBannerVisible && (
          <div className="bg-indigo-600 relative overflow-hidden border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-[9px] md:text-xs font-bold text-white relative z-10">
              <div className="flex-1 flex justify-center items-center gap-2">
                <Gift className="w-3 h-3 text-yellow-400" />
                <span className="tracking-wide text-center uppercase">{BRAND.promo}</span>
              </div>
              <button onClick={() => setIsBannerVisible(false)} className="text-white/60 hover:text-white p-1 ml-4 transition-colors">
                <X size={14} />
              </button>
            </div>
          </div>
        )}

        <nav className={`transition-all duration-500 ${
          isScrolled 
            ? 'glass py-2 border-white/10 shadow-2xl backdrop-blur-3xl' 
            : 'bg-transparent py-4 border-transparent'
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

            <div className="hidden md:flex items-center gap-8">
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
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg transition-all shadow-lg active:scale-95"
              >
                Inquiry
              </a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`md:hidden p-2 z-[101] rounded-lg transition-all ${
                isMenuOpen ? 'bg-white/10 text-white' : 'text-white hover:bg-white/5'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Compact Mobile Nav - Dropdown Style */}
          <div className={`md:hidden absolute top-full left-0 w-full glass backdrop-blur-3xl border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[85vh] opacity-100 py-10' : 'max-h-0 opacity-0 py-0'
          }`}>
            <div className="flex flex-col gap-8 px-10 items-center text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-2xl font-black text-white hover:text-indigo-400 transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/5 w-full max-w-[100px]" />
              <div className="flex flex-col gap-4">
                <a href={`tel:${BRAND.phone}`} className="text-xs text-slate-400 font-bold flex items-center justify-center gap-2">
                  <Phone size={14} className="text-indigo-500" /> {BRAND.phone}
                </a>
                <a href={`mailto:${BRAND.emails.general}`} className="text-xs text-slate-400 font-bold flex items-center justify-center gap-2">
                  <Mail size={14} className="text-indigo-500" /> info@itlabsghana.com
                </a>
              </div>
              <Link 
                to="/services"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-black rounded-xl shadow-xl uppercase tracking-widest active:scale-95"
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

      <footer className="glass border-t border-white/5 pt-16 pb-12 mt-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link to="/" className="flex items-center justify-center md:justify-start gap-2.5">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-sm">IL</span>
                </div>
                <span className="text-lg font-black tracking-tighter text-white uppercase brand-logo">{BRAND.name}</span>
              </Link>
              <p className="text-slate-500 text-[10px] leading-relaxed max-w-xs mx-auto md:mx-0 font-bold uppercase tracking-widest">
                Elite software engineering from the Kwahu hills. Architecting the digital economy of 2026.
              </p>
              <div className="flex justify-center md:justify-start gap-3">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all hover:bg-indigo-500/10">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden sm:block">
              <h4 className="text-white font-black mb-6 text-[10px] uppercase tracking-[0.2em]">Navigations</h4>
              <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                {navLinks.map(link => (
                  <li key={link.path}><Link to={link.path} className="hover:text-indigo-400 transition-colors flex items-center justify-center md:justify-start gap-2 group"><ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />{link.name}</Link></li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <h4 className="text-white font-black mb-6 text-[10px] uppercase tracking-[0.2em]">Engineering</h4>
              <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <li>Web Architectures</li>
                <li>Custom SaaS Engines</li>
                <li>Fintech Mobiles</li>
                <li>Logic Optimization</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.2em]">Kwahu HQ</h4>
              <div className="text-[10px] text-slate-400 font-bold space-y-3">
                <p className="flex items-center justify-center md:justify-start gap-3"><MapPin size={14} className="text-indigo-500 shrink-0" /> {BRAND.location}</p>
                <p className="flex items-center justify-center md:justify-start gap-3"><Phone size={14} className="text-indigo-500 shrink-0" /> {BRAND.phone}</p>
                <p className="flex items-center justify-center md:justify-start gap-3"><Mail size={14} className="text-indigo-500 shrink-0" /> info@itlabsghana.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-slate-600 font-black uppercase tracking-[0.15em]">
            <p>&copy; 2026 {BRAND.name}. Established Since 2024. All Assets Protected.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Root: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default Root;