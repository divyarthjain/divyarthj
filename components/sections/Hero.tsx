import React from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import { VivChat } from '../VivChat';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 py-12">
      
      {/* Left Column: Identity */}
      <div className="flex-1 w-full max-w-xl z-10 flex flex-col gap-8">
        
        <div className="space-y-2">
           <div className="inline-flex items-center gap-2 text-os-amber font-mono text-xs tracking-widest border border-os-amber/30 px-2 py-1 rounded bg-os-amber/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              STATUS: ONLINE
              <span className="text-os-muted">|</span>
              LOCATION: NODE_1 (BHOPAL, INDIA)
           </div>
           
           <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white tracking-tight leading-none">
             DIVYARTH <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-os-cyan to-blue-600">JAIN</span>
           </h1>
           
           <div className="h-1 w-24 bg-os-amber"></div>
           
           <h2 className="text-lg md:text-xl font-rajdhani font-medium text-os-text tracking-wide pt-4">
             Hardware-Native AI Engineer <span className="text-os-cyan">|</span> Embedded Systems Architect <span className="text-os-amber">|</span> Robotics Developer
           </h2>
        </div>

        <div className="text-sm text-os-muted max-w-md leading-relaxed">
          Bridging the gap between physical matter and neural networks. 
          Building systems that perceive, think, and act.
        </div>

        <div className="flex flex-wrap gap-4">
          <a 
            href="mailto:divyarthj24@gmail.com"
            className="group relative px-6 py-3 bg-os-cyan/10 hover:bg-os-cyan/20 border border-os-cyan text-os-cyan font-mono text-sm tracking-wider uppercase transition-all overflow-hidden flex items-center gap-2"
          >
             <Mail className="w-4 h-4" />
             <span>Initiate Collaboration</span>
             <div className="absolute inset-0 bg-os-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/divyarth-jain-116361283/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-transparent hover:bg-os-panel border border-os-muted text-os-text font-mono text-sm tracking-wider uppercase transition-all flex items-center gap-2"
          >
             <Linkedin className="w-4 h-4" />
             <span>Signal (LinkedIn)</span>
          </a>

          <a 
            href="https://github.com/divyarthjain"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-transparent hover:bg-os-panel border border-os-muted text-os-text font-mono text-sm tracking-wider uppercase transition-all flex items-center gap-2"
          >
             <Github className="w-4 h-4" />
             <span>Repo (GitHub)</span>
          </a>
        </div>
      </div>

      {/* Right Column: The Core / Viv */}
      <div className="flex-1 w-full flex flex-col items-center justify-center relative">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-os-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
         
         <div className="relative z-10 w-full flex justify-center">
            <VivChat />
         </div>

         {/* Decorative SVG Lines connecting to chat */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 400 400">
             <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                   <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                   <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
             </defs>
             <circle cx="200" cy="200" r="150" stroke="url(#lineGrad)" strokeWidth="1" fill="none" strokeDasharray="10 20" className="animate-spin-slow" />
             <circle cx="200" cy="200" r="100" stroke="#f59e0b" strokeWidth="0.5" fill="none" className="opacity-50" />
         </svg>
      </div>
    </section>
  );
};