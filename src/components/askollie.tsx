import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { askOllie } from '../services/ollieclient.ts';
import SymbolTile from './icons/symboltile.tsx';

/**
 * TS-Λ3 // ASK OLLIE INTERFACE [v7.1.1]
 * Path: src/components/askollie.tsx
 * Mission: Reference-Based UI Latch // New Corner Card
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Point-locked to bottom-right coordinate (bottom-32 right-8).
 * Fix: Recalibrated to 400px width per geometric reference.
 * Fix: Integrated SymbolTile v5.4.0 for header telemetry.
 */

interface AskOllieProps {
  onClose: () => void;
}

export const AskOllie: React.FC<AskOllieProps> = ({ onClose }) => {
  const { t, i18n } = useTranslation('harborA');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ollie' | 'user'; content: string }[]>([]);

  // 🛰️ SCROLL TELEMETRY
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  // 🚥 INITIAL GREETING LATCH
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        role: 'ollie',
        content: t('ollie.greeting', 'HOW CAN I HELP YOU TODAY?').toUpperCase()
      }]);
    }
  }, [t, messages.length]);

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
    <div className="fixed bottom-32 right-8 z-[200] w-full max-w-[400px] flex flex-col pointer-events-none">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="pointer-events-auto bg-white dark:bg-[#0c0c0e] border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-cyan-500/10"
        >
          {/* 🚥 TELEMETRY HEADER */}
          <header className="px-8 py-5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <SymbolTile
                glyph="smart_toy"
                size={36}
                variant="circle"
                className="bg-cyan-500 shadow-[0_4px_12px_rgba(34,211,238,0.3)]"
                color="#FFFFFF"
                glow={false}
              />
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
          </header>

          {/* 📜 CHAT SUBSTRATE */}
          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-6 custom-scrollbar bg-white dark:bg-[#0c0c0e]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[85%] px-5 py-3 rounded-2xl text-[12px] leading-relaxed
                  ${m.role === 'user'
                    ? 'bg-cyan-500 text-white font-bold shadow-md rounded-tr-none'
                    : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-tl-none border border-transparent dark:border-white/5 italic font-mono'
                  }
                `}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-5 py-3 rounded-2xl rounded-tl-none bg-slate-100 dark:bg-white/5 text-cyan-500 font-mono text-[10px] animate-pulse">
                  THINKING...
                </div>
              </div>
            )}
          </div>

          {/* ⌨️ INPUT AXIS */}
          <footer className="p-6 pt-2 bg-white dark:bg-[#0c0c0e]">
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
                className="p-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-400 transition-all disabled:opacity-20 flex items-center justify-center"
              >
                <Send size={14} />
              </button>
            </div>
          </footer>

          {/* 📊 FOOTER TELEMETRY */}
          <div className="px-6 py-3 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-100 dark:border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Ollie standing by</span>
            </div>
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">SUBSTRATE_READY</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AskOllie;