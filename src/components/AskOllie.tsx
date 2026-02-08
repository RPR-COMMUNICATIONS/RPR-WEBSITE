/**
 * TS-Λ3 // ASK OLLIE // AI INTERFACE [v1.0.0]
 * RECTIFIED: Switched to Material Symbols Variable Font and White Icons.
 */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { askOllie } from '../services/ollieClient';

export const AskOllie: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'system', content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim() || isLoading) return;

    const userMessage = prompt;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setPrompt('');
    setIsLoading(true);

    const response = await askOllie(userMessage, i18n.language);

    setMessages(prev => [...prev, { role: 'system', content: response.reply }]);
    setIsLoading(false);
  };

  return (
    <section id="chat" className="bg-black py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto border border-zinc-800 rounded-2xl bg-[#0A0A0A] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-black text-[20px]">
                auto_awesome
              </span>
            </div>
            <div>
              <h3 className="text-white text-xs font-black tracking-widest font-mono uppercase">{t('ask_ollie.header')}</h3>
              <p className="text-[8px] text-cyan-500 font-mono uppercase">Status: {t('ask_ollie.status')}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-orange-500 animate-bounce' : 'bg-cyan-500 animate-pulse'}`} />
          </div>
        </div>

        <div className="h-96 p-6 flex flex-col gap-4 overflow-y-auto font-mono text-[10px] tracking-tight text-zinc-500 uppercase custom-scrollbar">
          <div className="flex gap-4">
            <span className="text-cyan-500 flex-shrink-0">[SYSTEM]:</span>
            <p>{t('ask_ollie.system_greeting')}</p>
          </div>

          {messages.map((msg, i) => (
            <div key={i} className="flex gap-4">
              <span className={msg.role === 'user' ? 'text-white' : 'text-cyan-500'}>
                [{msg.role.toUpperCase()}]:
              </span>
              <p className={msg.role === 'user' ? 'text-zinc-300' : 'text-zinc-500'}>
                {msg.content}
              </p>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-4 animate-pulse">
              <span className="text-cyan-500">[SYSTEM]:</span>
              <p>Thinking...</p>
            </div>
          )}
        </div>

        <div className="p-4 bg-zinc-950 border-t border-zinc-800">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={t('ask_ollie.placeholder')}
              disabled={isLoading}
              className="w-full bg-black border border-zinc-800 rounded-lg py-4 px-6 text-xs font-mono text-white placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/50 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className="absolute right-4 p-2 text-zinc-500 hover:text-white transition-colors disabled:opacity-20"
            >
              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};