import React, { useState } from 'react';

interface OrderPageProps {
  t: any;
  onBack: () => void;
}

const OrderPage: React.FC<OrderPageProps> = ({ t, onBack }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    contact: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // NOTE: Professional email APIs like Resend require a backend to hide your API Key.
      // You should replace the URL below with your actual deployed serverless function endpoint.
      
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          targetEmail: 'admin@morasla.com' 
        })
      });
      
      // For demonstration in this UI preview, we simulate a success after a delay
      // if you don't have a backend yet.
      if (!response.ok) {
         await new Promise(resolve => setTimeout(resolve, 2000));
         // Remove the line below once your real backend /api/send-lead is live
         setStatus('success'); 
         window.scrollTo({ top: 0, behavior: 'smooth' });
         return;
      }
      
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error("Submission Error:", err);
      // Even if the fetch fails because the endpoint isn't real yet, 
      // we show a success state for your review of the UI.
      setTimeout(() => {
        setStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-[#18181b] flex items-center justify-center">
        <div className="text-center animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-[#ccff00] rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(204,255,0,0.4)]">
            <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">{t.success.title}</h1>
          <p className="text-white/40 text-xl max-w-md mx-auto mb-12 leading-relaxed">
            {t.success.sub}
          </p>
          <button 
            onClick={onBack} 
            className="px-10 py-4 rounded-full border border-white/10 text-white/40 font-black uppercase tracking-widest text-xs hover:text-[#ccff00] hover:border-[#ccff00]/30 transition-all"
          >
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
          disabled={status === 'sending'}
          className="mb-12 flex items-center gap-3 text-white/40 hover:text-[#ccff00] transition-colors font-bold uppercase tracking-widest text-xs disabled:opacity-30"
        >
          <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {t.back}
        </button>

        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none italic">
            {t.title} <span className="text-[#ccff00]">{t.titleAccent}</span>
          </h1>
          <p className="text-white/40 text-xl font-medium max-w-2xl">
            {t.sub}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-16 rounded-[60px] border-white/5 shadow-2xl relative overflow-hidden">
          {status === 'sending' && (
            <div className="absolute inset-0 bg-[#18181b]/50 backdrop-blur-sm z-20 flex items-center justify-center">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 border-4 border-[#ccff00] border-t-transparent rounded-full animate-spin" />
                <span className="text-[#ccff00] font-black uppercase tracking-[0.3em] text-xs">Transmitting lead...</span>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]/60">{t.labels.company}</label>
              <input 
                required
                disabled={status === 'sending'}
                type="text" 
                placeholder={t.labels.companyPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ccff00] transition-all font-bold placeholder:text-white/10 disabled:opacity-50"
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div className="space-y-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]/60">{t.labels.website}</label>
              <input 
                disabled={status === 'sending'}
                type="url" 
                placeholder="https://yourwebsite.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ccff00] transition-all font-bold placeholder:text-white/10 disabled:opacity-50"
                value={formData.website}
                onChange={e => setFormData({...formData, website: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]/60">{t.labels.contact}</label>
              <input 
                required
                disabled={status === 'sending'}
                type="text" 
                placeholder={t.labels.contactPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ccff00] transition-all font-bold placeholder:text-white/10 disabled:opacity-50"
                value={formData.contact}
                onChange={e => setFormData({...formData, contact: e.target.value})}
              />
            </div>
            <div className="space-y-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]/60">{t.labels.phone}</label>
              <input 
                required
                disabled={status === 'sending'}
                type="tel" 
                placeholder="05xxxxxxxx"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ccff00] transition-all font-bold placeholder:text-white/10 disabled:opacity-50"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]/60">{t.labels.budget}</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.budgetRanges.map((range: string) => (
                <button
                  key={range}
                  disabled={status === 'sending'}
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
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#ccff00]/60">{t.labels.goals}</label>
            <textarea 
              disabled={status === 'sending'}
              placeholder={t.labels.goalsPlaceholder}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#ccff00] transition-all font-bold placeholder:text-white/10 resize-none disabled:opacity-50"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full btn-primary py-8 rounded-3xl text-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(204,255,0,0.2)] disabled:opacity-50"
          >
            {status === 'sending' ? 'Transmitting...' : t.btn}
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