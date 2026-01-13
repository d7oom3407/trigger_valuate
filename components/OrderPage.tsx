
import React, { useState } from 'react';

interface OrderPageProps {
  t: any;
  onBack: () => void;
}

const OrderPage: React.FC<OrderPageProps> = ({ t, onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    contact: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here we would normally send to an API or WhatsApp
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-[#18181b] flex items-center justify-center">
        <div className="text-center animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-[#ccff00] rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(204,255,0,0.4)]">
            <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">{t.success.title}</h1>
          <p className="text-white/40 text-xl max-w-md mx-auto mb-12">
            {t.success.sub}
          </p>
          <button onClick={onBack} className="text-[#ccff00] font-black uppercase tracking-widest text-xs hover:opacity-70 transition-opacity">
            {t.success.back}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#18181b] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ccff00]/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-3 text-white/40 hover:text-[#ccff00] transition-colors font-bold uppercase tracking-widest text-xs"
        >
          <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {t.back}
        </button>

        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            {t.title} <span className="text-[#ccff00]">{t.titleAccent}</span>
          </h1>
          <p className="text-white/40 text-xl font-medium max-w-2xl italic">
            {t.sub}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-16 rounded-[60px] border-white/5 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]">{t.labels.company}</label>
              <input 
                required
                type="text" 
                placeholder={t.labels.companyPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ccff00] transition-all font-bold placeholder:text-white/10"
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div className="space-y-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]">{t.labels.website}</label>
              <input 
                type="url" 
                placeholder="https://yourwebsite.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ccff00] transition-all font-bold placeholder:text-white/10"
                value={formData.website}
                onChange={e => setFormData({...formData, website: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]">{t.labels.contact}</label>
              <input 
                required
                type="text" 
                placeholder={t.labels.contactPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ccff00] transition-all font-bold placeholder:text-white/10"
                value={formData.contact}
                onChange={e => setFormData({...formData, contact: e.target.value})}
              />
            </div>
            <div className="space-y-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]">{t.labels.phone}</label>
              <input 
                required
                type="tel" 
                placeholder="05xxxxxxxx"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ccff00] transition-all font-bold placeholder:text-white/10"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]">{t.labels.budget}</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.budgetRanges.map((range: string) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setFormData({...formData, budget: range})}
                  className={`py-4 rounded-xl border font-bold text-xs transition-all ${formData.budget === range ? 'bg-[#ccff00] border-[#ccff00] text-black shadow-lg shadow-[#ccff00]/20' : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20'}`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 mb-16">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]">{t.labels.goals}</label>
            <textarea 
              placeholder={t.labels.goalsPlaceholder}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ccff00] transition-all font-bold placeholder:text-white/10 resize-none"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="w-full btn-primary py-8 rounded-3xl text-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(204,255,0,0.2)]"
          >
            {t.btn}
          </button>
          
          <p className="mt-8 text-center text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
            {t.labels.privacy}
          </p>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
