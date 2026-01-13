import React from 'react';

interface ProblemProps {
  t: any;
}

const Problem: React.FC<ProblemProps> = ({ t }) => {
  return (
    <section id="problem" className="py-32 bg-[#18181b] relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
              {t.title}
            </h2>
            <p className="text-white/40 text-2xl font-medium max-w-lg">{t.subtitle}</p>
          </div>
          <div className="w-full lg:w-1/3 glass-card p-10 rounded-3xl border-[#ccff00]/20">
             <div className="text-[#ccff00] text-5xl font-black mb-2">{t.metric}</div>
             <div className="text-xs font-bold uppercase tracking-widest text-white/60">{t.metricSub}</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: t.p1, desc: t.d1, icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }, // Reassurance/Security icon
            { title: t.p2, desc: t.d2, icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }, // Clear path/Goal icon
            { title: t.p3, desc: t.d3, icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" } // Focus/Distraction icon
          ].map((p, idx) => (
            <div key={idx} className="glass-card p-12 rounded-[40px] group hover:border-[#ccff00]/40 transition-all">
              <div className="w-16 h-16 bg-white/5 text-[#ccff00] flex items-center justify-center rounded-2xl mb-10 group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={p.icon} />
                </svg>
              </div>
              <h3 className="text-3xl font-black mb-6 text-white tracking-tight">{p.title}</h3>
              <p className="text-white/40 text-lg leading-relaxed font-medium">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;