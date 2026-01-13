
import React from 'react';

interface AboutPageProps {
  t: any;
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ t, onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#18181b] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ccff00]/5 blur-[150px] pointer-events-none opacity-30" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-3 text-white/40 hover:text-[#ccff00] transition-colors font-bold uppercase tracking-widest text-xs"
        >
          <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {t.back}
        </button>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="text-start">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              {t.title} <br /> <span className="text-[#ccff00]">{t.titleAccent}</span>
            </h1>
            <p className="text-white/60 text-xl md:text-2xl font-medium leading-relaxed mb-10">
              {t.sub}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-[60px] border border-white/10 overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop" 
                  alt="Trigger Team" 
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="text-white font-black text-2xl mb-2 tracking-tight">{t.mockupTitle}</div>
                   <div className="text-[#ccff00] font-bold text-sm uppercase tracking-widest">{t.mockupSub}</div>
                </div>
            </div>
          </div>
        </div>

        {/* Parent Agency Section */}
        <div className="glass-card p-12 md:p-20 rounded-[60px] border-white/10 relative overflow-hidden text-center mb-32">
           <div className="absolute top-0 left-0 w-32 h-32 bg-[#ccff00]/10 blur-3xl rounded-full -translate-x-10 -translate-y-10" />
           <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight italic">
                {t.parent.title} <span className="text-[#ccff00]">{t.parent.titleAccent}</span>
              </h2>
              <p className="text-white/50 text-xl font-medium leading-relaxed mb-12">
                {t.parent.sub}
              </p>
              <a 
                href="https://www.morasla.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-black bg-white px-10 py-5 rounded-full font-black text-lg transition-transform hover:scale-105 active:scale-95"
              >
                {t.parent.btn}
                <svg className="w-6 h-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
           </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
           {t.values.map((v: any, i: number) => (
             <div key={i} className="p-10 border border-white/5 bg-white/5 rounded-[40px] group hover:border-[#ccff00]/30 transition-all">
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-[#ccff00] transition-colors">{v.title}</h3>
                <p className="text-white/40 text-lg font-medium leading-relaxed">{v.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
