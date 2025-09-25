'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { formatChatResponse } from './ChatService';
import { usePathname } from 'next/navigation';
import { FaRegMessage } from "react-icons/fa6";

// Use local types to avoid conflicts
type Role = 'user' | 'bot';
type Message = { role: Role; content: string };

const BOT_NAME = process.env.NEXT_PUBLIC_CHATBOT_BOTNAME || 'Gemini Assistant';

export default function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: `Hi! I'm Meditrack AI. You can ask me what all things you need to know about this platform.` },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, typing, open]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || typing) return;

    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');
    setTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
        }),
      });

      if (!res.ok) {
        // Try to read error details from the API
        let apiErrText = '';
        try {
          const errJson = await res.json();
          apiErrText = typeof errJson?.text === 'string' ? errJson.text : '';
        } catch {
          // ignore JSON parse errors
        }
        const msg = apiErrText || `API error: ${res.status}`;
        throw new Error(msg);
      }
      const data = await res.json();
      
      // Check if we have text in the response
      if (!data || typeof data.text === 'undefined') {
        const msg = 'Invalid response from API';
        throw new Error(msg);
      }
      
      // Format the response text
      const reply = formatChatResponse(data.text) || 'Sorry, I had trouble understanding that.';
      setMessages(prev => [...prev, { role: 'bot', content: reply }]);
    } catch (error) {
      console.error('Chat API error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'bot', content: 'Oops! I could not reach the server. Please try again.' },
      ]);
    } finally {
      setTyping(false);
    }
  }, [input, typing]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Hide on auth page
  if (pathname?.startsWith('/auth')) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* wave glow behind button */}
        <div className="absolute -bottom-3 -right-3 w-28 h-28 rounded-full bg-green-500/10 blur-2xl animate-wave pointer-events-none" />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close chat' : 'Open chat'}
          className="relative grid place-items-center w-14 h-14 rounded-full shadow-xl text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 overflow-hidden"
          style={{ background: 'radial-gradient(120% 120% at 0% 0%, #16a34a, #065f46)' }}
        >
          {/* subtle pulsing glow */}
          <span className="absolute inset-0 rounded-full bg-green-400/30 blur-xl animate-pulse-slow" />
          <span className="relative">
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <FaRegMessage size={24} aria-hidden="true" />
            )}
          </span>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-[380px] rounded-2xl shadow-2xl border border-white/50 bg-white/60 backdrop-blur-lg"
            role="dialog"
            aria-modal="true"
            aria-label="Chat window"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-t-2xl">
              <div className="font-semibold">{BOT_NAME}</div>
              <button
                className="w-8 h-8 grid place-items-center rounded-md bg-white/15 border border-white/25 hover:bg-white/25 transition"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-3 pb-3 pt-2">
              <ul
                ref={listRef}
                className="h-[380px] overflow-y-auto rounded-xl border border-gray-200 bg-white p-3 space-y-2"
              >
                {messages.map((m, i) => (
                  <li key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm shadow-sm ${
                        m.role === 'user'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-900 border border-gray-200'
                      }`}
                    >
                      {m.content}
                    </div>
                  </li>
                ))}

                {typing && (
                  <li className="flex justify-start">
                    <div className="rounded-2xl px-3.5 py-2.5 text-sm bg-gray-100 text-gray-900 border border-gray-200 shadow-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="cb-dot" />
                        <span className="cb-dot" />
                        <span className="cb-dot" />
                      </span>
                    </div>
                  </li>
                )}
              </ul>

              {/* Footer */}
              <div className="mt-2 flex items-end gap-2">
                <textarea
                  rows={1}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Type a message…"
                  className="flex-1 min-h-[44px] max-h-[120px] resize-y rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-900 outline-none ring-0 focus:border-green-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"
                />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={sendMessage}
                  disabled={typing || !input.trim()}
                  className="h-[44px] min-w-[44px] rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-3.5 text-white shadow-md transition hover:brightness-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label="Send"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}