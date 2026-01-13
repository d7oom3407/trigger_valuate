import React from 'react';

interface SolutionProps {
  t: any;
}

const Solution: React.FC<SolutionProps> = ({ t }) => {
  const features = [
    { title: t.s1, desc: t.sd1, icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { title: t.s2, desc: t.sd2, icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" },
    { title: t.s3, desc: t.sd3, icon: "M13 10V3L4 14h7v7l9-11h-7z" }
  ];

  return (
    <section id="process" className="py-32 bg-[#18181b]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-20 tracking-tighter">{t.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div key={idx} className="p-12 text-center flex flex-col items-center group">
              <div className="w-20 h-20 bg-white/5 text-[#ccff00] flex items-center justify-center rounded-[30px] mb-10 group-hover:rotate-12 group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-6 text-white">{f.title}</h3>
              <p className="text-white/40 font-medium leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;