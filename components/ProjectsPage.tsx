
import React from 'react';

interface ProjectsPageProps {
  t: any;
  onBack: () => void;
  onAuditClick: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ t, onBack, onAuditClick }) => {
  const projectImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", // Medical/Data UI
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop", // Legal/Professional UI
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop", // Real Estate/Corp UI
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // E-commerce/Stats UI
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop", // Business/SaaS UI
    "https://images.unsplash.com/photo-1522542550221-31fd195d5fe7?q=80&w=800&auto=format&fit=crop"  // Education/Platform UI
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#18181b] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(204,255,0,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-3 text-white/40 hover:text-[#ccff00] transition-colors font-bold uppercase tracking-widest text-xs"
        >
          <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {t.back}
        </button>

        <div className="mb-24 text-start">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none italic">
            {t.title} <br /> <span className="text-[#ccff00]">{t.titleAccent}</span>
          </h1>
          <p className="text-white/40 text-xl font-medium max-w-2xl">
            {t.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.items.map((p: any, i: number) => (
            <div key={i} className="group cursor-pointer">
               <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-6 border border-white/5 bg-white/5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <img 
                    src={projectImages[i]} 
                    alt={p.title} 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 right-6">
                     <div className="bg-[#ccff00] text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg">
                        {p.result}
                     </div>
                  </div>
               </div>
               <div className="text-start px-4">
                  <div className="text-[#ccff00] text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    {p.field}
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:text-[#ccff00] transition-colors">
                    {p.title}
                  </h3>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-32 glass-card p-12 md:p-20 rounded-[60px] text-center border-[#ccff00]/10">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-8">{t.ctaTitle}</h2>
           <p className="text-white/40 text-xl font-medium mb-12 max-w-2xl mx-auto italic">
             {t.ctaSub}
           </p>
           <button onClick={onAuditClick} className="btn-primary px-16 py-7 rounded-full text-2xl neon-glow">
             {t.ctaBtn}
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
