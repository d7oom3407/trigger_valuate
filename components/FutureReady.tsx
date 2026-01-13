import React from 'react';

interface FutureReadyProps {
  t: any;
}

const FutureReady: React.FC<FutureReadyProps> = ({ t }) => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center border-x border-slate-200 py-16 bg-white/50 backdrop-blur-sm rounded-3xl px-8 shadow-sm">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-slate-900">{t.title}</h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            {t.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureReady;