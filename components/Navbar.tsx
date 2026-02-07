import React, { useState, useEffect } from 'react';

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

const Navbar: React.FC<NavbarProps> = ({ 
  isScrolled, 
  toggleLang, 
  lang, 
  t, 
  onNavigateHome, 
  onNavigateAudit, 
  onNavigateAbout, 
  onNavigateProjects, 
  onNavigateOrder 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const nav = t.nav;

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMobileNav = (action: () => void) => {
    setIsMobileMenuOpen(false);
    action();
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-[#18181b]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center group cursor-pointer" onClick={() => handleMobileNav(onNavigateHome)}>
            <span className="brand-font text-2xl md:text-3xl font-[900] tracking-tighter text-white uppercase transition-all group-hover:text-[#ccff00]">
              TRIGGER<span className="opacity-40">.</span>WEB
            </span>
          </div>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-[70] p-2 text-white hover:text-[#ccff00] transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 translate-y-2 -rotate-45' : 'w-6'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -translate-y-2 rotate-45' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-[#18181b] transition-all duration-500 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-32 pb-10 px-8">
          <div className="flex flex-col gap-10 text-start">
            <button 
              onClick={() => handleMobileNav(onNavigateAudit)} 
              className="text-4xl font-black text-white hover:text-[#ccff00] transition-colors tracking-tighter"
            >
              {nav.problem}
            </button>
            <button 
              onClick={() => handleMobileNav(onNavigateProjects)} 
              className="text-4xl font-black text-white hover:text-[#ccff00] transition-colors tracking-tighter"
            >
              {nav.gallery}
            </button>
            <button 
              onClick={() => handleMobileNav(onNavigateAbout)} 
              className="text-4xl font-black text-white hover:text-[#ccff00] transition-colors tracking-tighter"
            >
              {nav.method}
            </button>
          </div>

          <div className="mt-auto flex flex-col gap-6">
            <button 
              onClick={() => handleMobileNav(onNavigateOrder)} 
              className="btn-primary w-full py-6 rounded-2xl text-xl shadow-2xl shadow-[#ccff00]/20"
            >
              {nav.book}
            </button>
            
            <div className="flex justify-between items-center pt-8 border-t border-white/5">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-3 text-white/40 font-black uppercase tracking-widest text-xs"
              >
                <span className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[10px] text-white/80">
                  {lang === 'en' ? 'AR' : 'EN'}
                </span>
                {lang === 'en' ? 'Switch to Arabic' : 'تغيير للإنجليزية'}
              </button>
              
              <div className="flex gap-4">
                <a href="https://x.com/Trigger_ksa" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                  <span className="text-sm italic">X</span>
                </a>
                <a href="https://www.instagram.com/trigger_ksa/" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                  <span className="text-sm italic">IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;