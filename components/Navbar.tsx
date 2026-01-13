
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
  toggleLang: () => void;
  lang: 'en' | 'ar';
  t: any;
  onNavigateHome: () => void;
  onNavigateAudit: () => void;
  onNavigateAbout: () => void;
  onNavigateProjects: () => void;
  onNavigateOrder: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, toggleLang, lang, t, onNavigateHome, onNavigateAudit, onNavigateAbout, onNavigateProjects, onNavigateOrder }) => {
  const nav = t.nav;
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#18181b]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={onNavigateHome}>
          <div className="w-12 h-12 bg-[#ccff00] rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg shadow-[#ccff00]/20">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex flex-col leading-[1.1] pt-1">
            <span className="text-2xl font-black tracking-tighter text-white uppercase">{t.brand}</span>
            <span className="text-[10px] font-black text-[#ccff00] tracking-[0.3em] uppercase opacity-90">Redesign Studio</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-bold text-xs uppercase tracking-widest">
          <button onClick={onNavigateAudit} className="text-white/60 hover:text-[#ccff00] transition-colors">{nav.problem}</button>
          <button onClick={onNavigateProjects} className="text-white/60 hover:text-[#ccff00] transition-colors">{nav.gallery}</button>
          <button onClick={onNavigateAbout} className="text-white/60 hover:text-[#ccff00] transition-colors">{nav.method}</button>
          
          <button 
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-lg border border-white/10 text-white/80 hover:bg-white/5 transition-all text-[10px]"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>

          <button onClick={onNavigateOrder} className="btn-primary px-6 py-3 rounded-full text-[11px] shadow-lg shadow-[#ccff00]/10 transition-all">
            {nav.book}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
