import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Send } from 'lucide-react';
import { askOllie } from '../services/ollieclient.ts';

/**
 * TS-Λ3 // ASK OLLIE INTERFACE [v7.1.0]
 * Path: src/components/askollie.tsx
 * Mission: Reference-Based UI Latch // New Corner Card
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Point-locked to bottom-right coordinate (bottom-32 right-8).
 * Fix: recalibrated to 400px width per code.html reference.
 * Fix: Liquidated centered modal architecture.
 */

interface AskOllieProps {
  onClose: () => void;
}

export const AskOllie: React.FC<AskOllieProps> = ({ onClose }) => {
  const { t, i18n } = useTranslation('harborA');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ollie' | 'user'; content: string }[]>([]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        role: 'ollie',
        content: t('ollie.greeting', 'HOW CAN I HELP YOU TODAY?').toUpperCase()
      }]);
    }
  }, [t, messages.length]);

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const query = input.toUpperCase();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: query }]);
    setIsLoading(true);

    try {
      const response = await askOllie(query, i18n.language);
      setMessages(prev => [...prev, { role: 'ollie', content: response.toUpperCase() }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ollie', content: "SUBSTRATE_ERROR: PLEASE RETRY HANDSHAKE." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /* 📐 CORNER POSITION: Anchored above the launcher button */
    <div className="fixed bottom-32 right-8 z-[200] w-full max-w-[400px] flex flex-col animate-in slide-in-from-bottom-10 duration-500">

      {/* 🛡️ MAIN PILL CARD (New Style) */}
      <div className="bg-white dark:bg-[#0c0c0e] border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-cyan-500/10">

        {/* 🚥 TELEMETRY HEADER: White Robot on Cyan Axis */}
        <div className="px-8 py-5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.3)]">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1046 2 14 2.89543 14 4V5H10V4C10 2.89543 10.8954 2 12 2Z" fill="currentColor"></path>
                <path d="M4 11C4 7.13401 7.13401 4 11 4H13C16.866 4 20 7.13401 20 11V15C20 18.866 16.866 22 13 22H11C7.13401 22 4 18.866 4 15V11Z" fill="currentColor" fillOpacity="0.3"></path>
                <path d="M7 9H17M7 13H17M7 17H11" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                <circle cx="8.5" cy="7.5" fill="currentColor" r="1"></circle>
                <circle cx="15.5" cy="7.5" fill="currentColor" r="1"></circle>
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none">Ollie_Command</p>
              <p className="text-[8px] font-mono text-cyan-500 uppercase tracking-widest mt-1">Status: Active</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors text-slate-400"
          >
            <X size={18} />
          </button>
        </div>

        {/* 📜 CHAT SUBSTRATE */}
        <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-6 custom-scrollbar bg-white dark:bg-[#0c0c0e]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                max-w-[85%] px-5 py-3 rounded-2xl text-[12px] leading-relaxed
                ${m.role === 'user'
                  ? 'bg-cyan-500 text-white font-bold shadow-md rounded-tr-none'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-tl-none border border-transparent dark:border-white/5 italic'
                }
              `}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="px-5 py-3 rounded-2xl rounded-tl-none bg-slate-100 dark:bg-white/5 text-cyan-500 font-mono text-[10px] animate-pulse">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* ⌨️ INPUT AXIS */}
        <div className="p-6 pt-2 bg-white dark:bg-[#0c0c0e]">
          <div className="flex items-center bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl pl-5 pr-2 py-2 focus-within:ring-1 ring-cyan-500/30 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t('ollie.placeholder', 'WHAT IS THE MISSION?')}
              className="flex-1 bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 text-[11px] font-mono uppercase placeholder:text-slate-400"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-400 transition-all disabled:opacity-20"
            >
              <Send size={14} />
            </button>
          </div>
        </div>

        {/* 📊 FOOTER TELEMETRY */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-100 dark:border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Ollie standing by</span>
          </div>
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">12ms</span>
        </div>
      </div>
    </div>
  );
};

export default AskOllie;