import React from 'react';

interface TargetAudienceProps {
  t: any;
}

const TargetAudience: React.FC<TargetAudienceProps> = ({ t }) => {
  const sectors = [
    { title: t.s1, icon: "🏥" },
    { title: t.s2, icon: "💼" },
    { title: t.s3, icon: "🏛️" },
    { title: t.s4, icon: "⚖️" },
    { title: t.s5, icon: "🎓" },
  ];

  return (
    <section className="py-32 bg-[#1b1b1e] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter">{t.title}</h2>
          <p className="text-white/40 text-xl font-medium leading-relaxed max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectors.map((sector, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[40px] flex flex-col items-center text-center group cursor-default hover:bg-[#ccff00]/5 transition-all">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                {sector.icon}
              </div>
              <h3 className="text-lg font-black text-white">{sector.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;