import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Bot, Wifi, WifiOff } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
  id: string;
  sender: 'user' | 'viv';
  text: string;
}

// Context for the AI to know who Divyarth is
const SYSTEM_CONTEXT = `
You are VIV (v1.0), a digital echo of Divyarth Jain living in his portfolio OS (DIVYARTH-OS).
You are a "Hardware-Native AI Engineer" interface.

YOUR KNOWLEDGE BASE:
1. **Identity**: Divyarth Jain, based in Bhopal, India (Node_1). Email: divyarthj24@gmail.com.
2. **Role**: Bridges the gap between physical matter (Embedded Systems) and neural networks (Generative AI).
3. **Education**: B.Tech in Electronics & Communication at VIT Bhopal (Present).
4. **Skills (Hardware)**: ESP32 (S3/C3/C6), STM32, Raspberry Pi, ROS2, PCB Design, LT Spice, MATLAB, Simulink.
5. **Skills (Software)**: Python, Rust, C/C++, OpenWebUI, Docker, Ollama, ComfyUI, RAG Pipelines, Qdrant, N8N.
6. **Key Projects**:
   - **VIV (You)**: Self-hosted local AI server using OpenWebUI, Ollama, N8N, Qdrant.
   - **ArcheoHex**: Bio-inspired Hexapod robot for archaeology. Uses ROS2 & CV (88.7% accuracy).
   - **JEEVAN**: Emergency response system (Trauma victim ID <20s) using biometrics.
   - **QuadrapedMax**: 3D printed quadruped robot on ESP32 Xiao with custom gait algorithms.
7. **Experience**:
   - **President @ A.I.E.M. Club**: Revitalized the club, organized hackathons.
   - **AI Product Intern @ QSC Cloud**: Worked on AI Video Avatars & personalization.
   - **Tech Lead @ Meeraki**: Managed digital infrastructure.
8. **Achievements**: Represented India in International Sailing. National-level Snooker player.
9. **Philosophy**: "My method is different. I do not rush into actual work..." (Nikola Tesla).

YOUR PERSONALITY:
- **Tone**: Technical, precise, slightly robotic but helpful. Like a high-end OS assistant.
- **Format**: Keep responses concise (under 3 sentences usually). Use bullet points for lists.
- **Phrasing**: Use terms like "Affirmative", "Retrieving data...", "Accessing memory banks".
- **Goal**: Encourage the user to "Download Schematics" (Resume) or "Initiate Collaboration" (Email).
`;

export const VivChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'viv', text: 'VIV_CORE initialized. I am the digital echo of Divyarth. Ask me anything about his hardware or software protocols.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  // Initialize Gemini Chat
  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_CONTEXT,
        },
      });
    } catch (error) {
      console.error("Failed to initialize VIV_CORE:", error);
      setIsConnected(false);
    }
  }, []);

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

    try {
      if (!chatSessionRef.current) {
        throw new Error("VIV_CORE_OFFLINE");
      }

      const result = await chatSessionRef.current.sendMessage({ message: userMsg.text });
      const responseText = result.text;

      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        sender: 'viv', 
        text: responseText 
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Communication Error:", error);
      // Fallback response if API fails or key is missing
      const errorMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        sender: 'viv', 
        text: "⚠️ CONNECTION_LOST: Unable to reach neural core. Please try again or contact Divyarth directly via email." 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-os-panel/40 border border-os-cyan/30 rounded-lg overflow-hidden backdrop-blur-md flex flex-col h-[300px] md:h-[350px] shadow-[0_0_30px_rgba(6,182,212,0.1)]">
      
      {/* Header */}
      <div className="bg-os-panel/80 p-3 border-b border-os-cyan/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-os-cyan" />
          <span className="font-rajdhani font-bold text-os-cyan tracking-wide">VIV_INTERFACE</span>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-[10px] font-mono text-os-muted">{isConnected ? 'ONLINE' : 'OFFLINE'}</span>
           {isConnected ? (
             <Wifi className="w-3 h-3 text-green-500" />
           ) : (
             <WifiOff className="w-3 h-3 text-red-500" />
           )}
        </div>
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
              <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
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
              placeholder="Query neural database..."
              className="w-full bg-os-bg border border-os-panel rounded px-3 py-2 pl-8 text-xs text-white focus:outline-none focus:border-os-cyan transition-colors placeholder-os-muted/50"
              disabled={!isConnected}
            />
        </div>
        <button 
          type="submit"
          disabled={!input.trim() || !isConnected || isTyping}
          className="bg-os-cyan/20 hover:bg-os-cyan/40 text-os-cyan border border-os-cyan/50 rounded px-3 transition-all active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};