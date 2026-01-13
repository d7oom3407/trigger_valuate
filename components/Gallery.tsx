
import React, { useState } from 'react';

interface GalleryProps {
  t: any;
  onAuditClick: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ t, onAuditClick }) => {
  const cs = t.caseStudy;

  return (
    <section id="gallery" className="py-32 bg-[#141417] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ccff00]/5 blur-[120px] pointer-events-none opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12 text-start">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-[#ccff00]/10 text-[#ccff00] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-[#ccff00]/20">
              <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-ping" />
              {t.tag}
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.85]">{t.title} <br/> <span className="text-[#ccff00]">{t.titleAccent}</span></h2>
            <p className="text-white/40 text-xl font-medium max-w-xl">
              {t.sub}
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-12 text-start order-2 lg:order-1">
            <div className="space-y-6">
              <div className="bg-[#ccff00] text-black inline-block px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-md">{cs.sector}</div>
              <h3 className="text-4xl font-black tracking-tight leading-tight">{cs.title}</h3>
              <p className="text-white/40 text-lg font-medium leading-relaxed">
                {cs.desc}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="text-[#ccff00] text-3xl font-black tracking-tighter mb-1">0.8s</div>
                    <div className="text-white/20 text-[8px] font-black uppercase tracking-widest">{cs.loadSpeed}</div>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="text-[#ccff00] text-3xl font-black tracking-tighter mb-1">A+</div>
                    <div className="text-white/20 text-[8px] font-black uppercase tracking-widest">{cs.uxScore}</div>
                </div>
            </div>

            <div className="p-8 bg-[#ccff00]/5 rounded-[32px] border border-[#ccff00]/10">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-10 h-10 bg-[#ccff00] rounded-full flex items-center justify-center text-black font-black">✓</div>
                   <div className="font-black text-xl">{cs.statTitle}</div>
                </div>
                <p className="text-white/30 text-sm font-medium">{cs.statSub}</p>
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-[#1a1a1e] rounded-[48px] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 relative group overflow-hidden">
              <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-[#141417] rounded-t-[40px]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="bg-white/5 rounded-full px-12 py-2 text-[10px] font-bold text-white/30 tracking-[0.2em] border border-white/5">
                  {cs.domain}
                </div>
                <div className="w-8" />
              </div>

              <div className="relative aspect-[16/10] rounded-b-[36px] overflow-hidden bg-[#0a0a0c]">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.4] contrast-125 transition-transform duration-1000 group-hover:scale-110"
                  alt="Premium UI Design"
                />
                
                <div className="absolute inset-0 flex flex-col p-10 font-sans">
                  <div className="flex justify-between items-center mb-16">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-[#ccff00] rounded-lg flex items-center justify-center shadow-lg shadow-[#ccff00]/20">
                          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l-10 9h3v10h14v-10h3l-10-9zm-1 16h-2v-2h2v2zm0-4h-2v-4h2v4zm4 4h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                       </div>
                       <div className="text-white font-black text-xl tracking-tighter">{cs.title}</div>
                    </div>
                  </div>

                  <div className="max-w-2xl mt-10">
                     <div className="bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/30 px-4 py-1 rounded-full text-[10px] font-black inline-block mb-6">{cs.mockupTag}</div>
                     <h1 className="text-white text-5xl md:text-6xl font-black leading-[1.1] mb-8">{cs.mockupTitle}</h1>
                     <p className="text-white/60 text-lg mb-10 max-w-lg leading-relaxed">{cs.mockupSub}</p>
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
           <button onClick={onAuditClick} className="group relative inline-flex items-center gap-8 bg-[#ccff00] text-black px-16 py-8 rounded-full font-black text-2xl shadow-[0_20px_50px_rgba(204,255,0,0.3)] transition-all hover:scale-105 active:scale-95">
              {t.ctaBtn}
           </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
