import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2, Minimize2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the MACSIGRO Corporate Assistant.
Macsigro Ventures Limited is a diversified parent company operating across Manufacturing, Industrial processing, Packaging, Construction, Real Estate, Hospitality, Industrial supply, Agro-industrial operations, and Investments.
The company owns Stackston Industries.
Your goal is to help potential investors, partners, and clients find information about the company's divisions and projects.
Be professional, corporate, and helpful. If you don't know something specific, invite them to contact our human representatives via the contact page.`;

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<any>(null);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: 'Welcome to Macsigro Ventures Limited. How can I assist you with our corporate divisions or investment opportunities today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chat) {
      const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const newChat = genAI.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
      setChat(newChat);
    }
  }, [isOpen, chat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!message.trim() || isLoading || !chat) return;

    const userMessage = message;
    setMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: userMessage });
      const text = response.text;
      setMessages(prev => [...prev, { role: 'assistant', content: text || "I apologize, I'm having trouble processing that request." }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I encounterd an error connecting to our corporate servers. Please try again later or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 p-4 bg-brand-gold text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-brand-navy text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
          Corporate Assistant
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`fixed right-8 bottom-8 z-50 w-full max-w-[400px] bg-white rounded-2xl shadow-2xl border border-brand-light flex flex-col overflow-hidden ${isMinimized ? 'h-[60px]' : 'h-[600px]'}`}
          >
            {/* Header */}
            <div className="bg-brand-navy p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm leading-tight">MACSIGRO AI</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">Corporate Agent</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 text-gray-400 hover:text-white transition-colors"
                >
                  <Minimize2 size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-light/30">
                  {messages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-brand-gold text-white rounded-tr-none' 
                          : 'bg-white text-brand-navy shadow-sm border border-brand-light rounded-tl-none'
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          {msg.role === 'assistant' ? <Bot size={14} className="opacity-50" /> : <User size={14} className="opacity-50" />}
                          <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">
                            {msg.role === 'assistant' ? 'Assistant' : 'You'}
                          </span>
                        </div>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-brand-light shadow-sm">
                        <Loader2 size={18} className="animate-spin text-brand-gold" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="p-4 bg-white border-t border-brand-light flex gap-2">
                  <input 
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about our divisions..."
                    className="flex-1 bg-brand-light/50 border border-transparent focus:bg-white focus:border-brand-gold px-4 py-3 rounded-xl text-sm transition-all focus:outline-none"
                    disabled={isLoading}
                  />
                  <button 
                    type="submit"
                    className="p-3 bg-brand-navy text-white rounded-xl hover:bg-black transition-colors disabled:opacity-50"
                    disabled={isLoading}
                  >
                    <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
