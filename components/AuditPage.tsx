
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface AuditPageProps {
  t: any;
  onBack: () => void;
}

const AuditPage: React.FC<AuditPageProps> = ({ t, onBack }) => {
  const [url, setUrl] = useState('');
  const [sector, setSector] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshot(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudit = async () => {
    if (!url || !sector) {
      setError(t.error);
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const promptText = `Analyze this website for business growth in the [${sector}] sector: ${url}. 
      If a screenshot is provided, analyze its visual hierarchy and trust signals.
      Provide a professional audit in Arabic.
      Rate it (0-100) for: Conversion Rate, UI/UX, and Trust.
      List 3 critical actionable improvements.
      Add a "Automation Opportunity" section specifically for ${sector}.
      Format as JSON: {conversionScore, designScore, trustScore, summary, improvements: [], automationAdvice: ""}`;

      const contents: any[] = [{ text: promptText }];
      
      if (screenshot) {
        const base64Data = screenshot.split(',')[1];
        contents.push({
          inlineData: {
            mimeType: 'image/jpeg',
            data: base64Data
          }
        });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: { parts: contents },
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              conversionScore: { type: Type.NUMBER },
              designScore: { type: Type.NUMBER },
              trustScore: { type: Type.NUMBER },
              summary: { type: Type.STRING },
              improvements: { type: Type.ARRAY, items: { type: Type.STRING } },
              automationAdvice: { type: Type.STRING },
            },
            required: ["conversionScore", "designScore", "trustScore", "summary", "improvements", "automationAdvice"],
          },
        },
      });

      const data = JSON.parse(response.text || '{}');
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(t.apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#18181b] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(204,255,0,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-3 text-white/40 hover:text-[#ccff00] transition-colors font-bold uppercase tracking-widest text-xs"
        >
          <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {t.back}
        </button>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter italic">
            {t.title} <span className="text-[#ccff00]">{t.titleAccent}</span>
          </h1>
          <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto">
            {t.sub}
          </p>
        </div>

        {!result && (
          <div className="glass-card p-4 md:p-10 rounded-[40px] border-[#ccff00]/10 mb-20 shadow-2xl shadow-black">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3">{t.urlLabel}</label>
                <input 
                  type="text" 
                  placeholder="https://yourwebsite.com" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#ccff00]/50 transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3">{t.sectorLabel}</label>
                <select 
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#ccff00]/50 transition-all font-medium appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#18181b]">{t.sectorPlaceholder}</option>
                  <option value={t.sectors.medical} className="bg-[#18181b]">{t.sectors.medical}</option>
                  <option value={t.sectors.realestate} className="bg-[#18181b]">{t.sectors.realestate}</option>
                  <option value={t.sectors.legal} className="bg-[#18181b]">{t.sectors.legal}</option>
                  <option value={t.sectors.ecommerce} className="bg-[#18181b]">{t.sectors.ecommerce}</option>
                  <option value={t.sectors.consultancy} className="bg-[#18181b]">{t.sectors.consultancy}</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-3">{t.screenshotLabel}</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`w-full border-2 border-dashed rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all ${screenshot ? 'border-[#ccff00]/50 bg-[#ccff00]/5' : 'border-white/10 hover:border-white/20 bg-white/5'}`}
              >
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                {screenshot ? (
                  <div className="text-center">
                    <div className="text-[#ccff00] font-black mb-2">{t.screenshotSuccess}</div>
                    <div className="text-white/40 text-xs">{t.screenshotChange}</div>
                  </div>
                ) : (
                  <>
                    <svg className="w-10 h-10 text-white/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <div className="text-white/40 font-bold">{t.screenshotPlaceholder}</div>
                  </>
                )}
              </div>
            </div>

            <button 
              onClick={handleAudit}
              disabled={loading || !url || !sector}
              className="w-full btn-primary py-6 rounded-2xl text-xl flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed neon-glow"
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin" />
                  {t.loading}
                </>
              ) : t.btn}
            </button>
            {error && <p className="mt-4 text-red-500 font-bold text-center">{error}</p>}
          </div>
        )}

        {result && (
          <div id="report-content" className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* Score Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: t.scores.conversion, score: result.conversionScore },
                { label: t.scores.design, score: result.designScore },
                { label: t.scores.trust, score: result.trustScore }
              ].map((s, i) => (
                <div key={i} className="glass-card p-10 rounded-[32px] text-center border-white/5">
                  <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">{s.label}</div>
                  <div className="text-6xl font-black text-[#ccff00] mb-2 tracking-tighter">{s.score}%</div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ccff00]" style={{ width: `${s.score}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Card */}
            <div className="glass-card p-12 rounded-[40px] border-white/5 relative overflow-hidden">
              <h3 className="text-3xl font-black text-white mb-8 tracking-tight">{t.reportTitle} {sector}</h3>
              <p className="text-white/60 text-xl leading-relaxed font-medium">
                {result.summary}
              </p>
            </div>

            {/* Improvements Card */}
            <div className="bg-[#ccff00] p-12 rounded-[40px] text-black border border-black/5">
              <h3 className="text-3xl font-black mb-10 tracking-tight">{t.improvementsTitle}</h3>
              <div className="grid md:grid-cols-1 gap-6">
                {result.improvements.map((imp: string, i: number) => (
                  <div key={i} className="flex gap-6 items-start border-b border-black/10 pb-6 last:border-0">
                    <div className="w-8 h-8 bg-black text-[#ccff00] rounded-full flex items-center justify-center font-black flex-shrink-0 mt-1">{i+1}</div>
                    <p className="text-xl font-bold leading-relaxed">{imp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Opportunity */}
            <div className="glass-card p-12 rounded-[40px] border-[#ccff00]/30 bg-[#ccff00]/5">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#ccff00] rounded-xl flex items-center justify-center text-black font-black">⚡</div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{t.automationTitle}</h3>
               </div>
               <p className="text-[#ccff00] text-xl leading-relaxed font-bold mb-8">
                 {result.automationAdvice}
               </p>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-white/40 text-sm italic">
                    {t.automationSub}
                  </p>
               </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center pt-10">
               <a href="https://www.morasla.com/" target="_blank" className="bg-[#ccff00] text-black px-12 py-6 rounded-2xl font-black text-xl flex items-center gap-4 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#ccff00]/20">
                 {t.automationBtn}
                 <svg className="w-6 h-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </a>
            </div>

            <button 
              onClick={() => setResult(null)} 
              className="block mx-auto text-white/20 hover:text-white transition-colors font-bold text-xs uppercase tracking-[0.3em] pt-10"
            >
              {t.anotherAudit}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditPage;
