import React from 'react';

interface FooterProps {
  t: any;
  brand: string;
  onNavigateAbout: () => void;
  onNavigateProjects: () => void;
  onNavigateOrder: () => void;
}

const Footer: React.FC<FooterProps> = ({ t, brand, onNavigateAbout, onNavigateProjects, onNavigateOrder }) => {
  return (
    <footer id="footer" className="bg-[#18181b] pt-32 pb-16 px-6">
      <div className="container mx-auto">
        <div className="glass-card rounded-[60px] p-16 md:p-32 text-center relative overflow-hidden mb-32 border-white/5">
          <div className="absolute inset-0 bg-[#ccff00]/5 opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 text-white">
              {t.cta} <br />
              <span className="text-[#ccff00]">{t.ctaAccent}</span>
            </h2>
            <p className="text-white/40 text-xl md:text-2xl font-medium mb-16 leading-relaxed">
              {t.sub}
            </p>
            <button onClick={onNavigateOrder} className="btn-primary inline-flex items-center gap-6 px-16 py-7 rounded-full text-2xl neon-glow">
              {t.btn}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20 px-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-8">
              <span className="brand-font text-3xl font-[900] tracking-tighter text-white uppercase transition-all hover:text-[#ccff00] cursor-pointer">
                TRIGGER<span className="opacity-40">.</span>WEB
              </span>
            </div>
            <p className="text-white/20 font-bold text-lg max-w-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-10 text-white/40">{t.navTitle}</h4>
            <ul className="space-y-6 text-white/60 font-bold text-sm">
              <li><button onClick={onNavigateOrder} className="hover:text-[#ccff00] transition-colors">{t.links.audit}</button></li>
              <li><button onClick={onNavigateProjects} className="hover:text-[#ccff00] transition-colors">{t.links.projects}</button></li>
              <li><button onClick={onNavigateAbout} className="hover:text-[#ccff00] transition-colors">{t.links.about}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-10 text-white/40">{t.followTitle}</h4>
            <ul className="space-y-6 text-white/60 font-bold text-sm">
              <li><a href="https://www.linkedin.com/company/trigger-ksa/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">LinkedIn</a></li>
              <li><a href="https://x.com/Trigger_ksa" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">X (Twitter)</a></li>
              <li><a href="https://www.instagram.com/trigger_ksa/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 text-white/20 text-[10px] font-black uppercase tracking-[0.2em] px-10 gap-8">
          <span>{t.copyright}</span>
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse" />
            {t.location}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;