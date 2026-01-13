import React from 'react';

interface ProcessProps {
  t: any;
}

const Process: React.FC<ProcessProps> = ({ t }) => {
  const steps = [
    { number: "01", title: t.st1, description: t.sd1 },
    { number: "02", title: t.st2, description: t.sd2 },
    { number: "03", title: t.st3, description: t.sd3 }
  ];

  return (
    <section id="process" className="py-32 bg-[#18181b]">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black mb-24 tracking-tighter text-white">{t.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-10 start-0 w-full h-[1px] bg-white/5 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-start group">
              <div className="w-20 h-20 bg-[#18181b] border border-white/10 rounded-full flex items-center justify-center text-[#ccff00] font-black text-3xl mb-10 transition-all group-hover:bg-[#ccff00] group-hover:text-black group-hover:border-transparent">
                {step.number}
              </div>
              <h3 className="text-3xl font-black mb-6 text-white tracking-tight">{step.title}</h3>
              <p className="text-white/30 text-lg font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;