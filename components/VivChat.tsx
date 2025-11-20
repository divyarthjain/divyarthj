import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'viv';
  text: string;
}

export const VivChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'viv', text: 'VIV_CORE initialized. I am the digital echo of Divyarth. Ask me anything.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate Network/AI Delay
    setTimeout(() => {
      let responseText = "I'm programmed to assist with navigation. Try downloading the schematics (Resume) or initiating collaboration.";
      const lowerInput = userMsg.text.toLowerCase();
      
      if (lowerInput.includes('who are you') || lowerInput.includes('what are you')) {
        responseText = "I am VIV, a locally hosted LLM interface running on Divyarth's server. I bridge the gap between silicon logic and neural reasoning.";
      } else if (lowerInput.includes('robot') || lowerInput.includes('hardware')) {
        responseText = "Divyarth builds bio-inspired robotics like the ArcheoHex (Hexapod) and QuadrapedMax. He uses ESP32, STM32, and ROS2.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
        responseText = "Communication channels open. You can reach Divyarth at divyarthj24@gmail.com.";
      } else if (lowerInput.includes('skills') || lowerInput.includes('stack')) {
        responseText = "Scanning memory banks... Proficiency detected in Rust, Python, C++, OpenWebUI, ComfyUI, and RAG architectures using Qdrant.";
      } else if (lowerInput.includes('education') || lowerInput.includes('college')) {
         responseText = "Divyarth is pursuing B.Tech in Electronics & Communication at VIT Bhopal. He is also certified in Applied ML from UMich.";
      }

      const aiMsg: Message = { id: (Date.now() + 1).toString(), sender: 'viv', text: responseText };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md bg-os-panel/40 border border-os-cyan/30 rounded-lg overflow-hidden backdrop-blur-md flex flex-col h-[300px] md:h-[350px] shadow-[0_0_30px_rgba(6,182,212,0.1)]">
      
      {/* Header */}
      <div className="bg-os-panel/80 p-3 border-b border-os-cyan/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-os-cyan" />
          <span className="font-rajdhani font-bold text-os-cyan tracking-wide">VIV_INTERFACE</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollContainerRef} 
        className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs md:text-sm scrollbar-thin scroll-smooth"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg border ${
              msg.sender === 'user' 
                ? 'bg-os-cyan/10 border-os-cyan/30 text-os-cyan rounded-br-none' 
                : 'bg-os-amber/10 border-os-amber/30 text-os-amber rounded-bl-none'
            }`}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
             <div className="bg-os-amber/10 border border-os-amber/30 p-3 rounded-lg rounded-bl-none flex gap-1">
               <span className="w-1 h-1 bg-os-amber rounded-full animate-bounce"></span>
               <span className="w-1 h-1 bg-os-amber rounded-full animate-bounce delay-75"></span>
               <span className="w-1 h-1 bg-os-amber rounded-full animate-bounce delay-150"></span>
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-3 border-t border-os-cyan/20 bg-os-bg/50 flex gap-2">
        <div className="relative flex-1">
            <Terminal className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-os-muted" />
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Talk to Viv (Local AI)..."
              className="w-full bg-os-bg border border-os-panel rounded px-3 py-2 pl-8 text-xs text-white focus:outline-none focus:border-os-cyan transition-colors"
            />
        </div>
        <button 
          type="submit"
          className="bg-os-cyan/20 hover:bg-os-cyan/40 text-os-cyan border border-os-cyan/50 rounded px-3 transition-all active:scale-95 flex items-center justify-center"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};