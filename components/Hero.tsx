
import React from 'react';

interface HeroProps {
  t: any;
  onAuditClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ t, onAuditClick }) => {
  const integrations = [
    { name: 'Salla', icon: '🛒', scale: 'scale-100' },
    { name: 'Zid', icon: '📦', scale: 'scale-125 md:scale-150' },
    { name: 'Zapier', icon: '⚡', scale: 'scale-100' },
    { name: 'WhatsApp', icon: '💬', scale: 'scale-100' },
    { name: 'Notion', icon: '📝', scale: 'scale-100' },
    { name: 'Slack', icon: '👥', scale: 'scale-100' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#18181b] hero-gradient">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Side */}
          <div className="lg:w-1/2 text-center lg:text-start">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1] text-white">
              {t.title} <br />
              <span className="text-[#ccff00]">{t.titleAccent}</span>
            </h1>
            
            <p className="text-white/50 text-lg md:text-xl max-w-xl mb-12 font-medium leading-relaxed mx-auto lg:mx-0">
              {t.sub}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-20">
              <button onClick={onAuditClick} className="btn-primary px-12 py-6 rounded-full text-xl flex items-center justify-center neon-glow">
                {t.cta}
              </button>
            </div>

            {/* Integrations Row */}
            <div className="pt-10 border-t border-white/5">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-10 lg:text-start text-center">
                {t.integrationsTitle}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500 items-center">
                {integrations.map((item) => (
                  <div key={item.name} className={`flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default transform ${item.scale}`}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-base font-black text-white tracking-tight">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Large Mockup Side */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative z-10 float-anim w-full max-w-[680px]">
              <div className="bg-[#222] rounded-[45px] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10">
                <div className="bg-[#111] rounded-[32px] overflow-hidden aspect-[4/3] relative group border border-white/5">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop" alt="Premium Business UI" className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-95" />
                  
                  <div className="absolute bottom-10 left-0 right-0 px-10 text-start">
                     <div className="inline-block bg-[#ccff00] text-black px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-[0_5px_15px_rgba(204,255,0,0.3)]">{t.mockupTag}</div>
                     <div className="text-white font-black text-4xl mb-2 tracking-tighter">{t.mockupTitle}</div>
                     <div className="text-white/40 font-bold text-sm tracking-widest uppercase">{t.mockupSub}</div>
                  </div>
                </div>
              </div>

              {/* Decorative data cards */}
              <div className="absolute -top-10 -left-10 glass-card bg-[#18181b]/90 border-white/10 backdrop-blur-2xl px-10 py-8 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] hidden xl:block transition-transform hover:scale-105">
                <div className="text-[10px] font-black text-[#ccff00] uppercase tracking-widest mb-2">{t.card1Title}</div>
                <div className="text-4xl font-black text-white tracking-tighter">٦٤٪-</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-card bg-[#18181b]/90 border-white/10 backdrop-blur-2xl px-10 py-8 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] hidden xl:block border-[#ccff00]/30 transition-transform hover:scale-105">
                <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">{t.card2Title}</div>
                <div className="text-4xl font-black text-[#ccff00] tracking-tighter">A+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
