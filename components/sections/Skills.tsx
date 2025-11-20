import React from 'react';
import { Cpu, Network, Database, PenTool, Zap, Layers } from 'lucide-react';
import { SkillGroup } from '../../types';

const HARDWARE_SKILLS: SkillGroup = {
  category: 'Hardware',
  icon: Cpu,
  skills: [
    "ESP32 (S3/C3/C6)", "STM32", "Raspberry Pi 4/Pico", "Arduino Uno/Nano",
    "ROS2", "Embedded ML", "SMD Soldering", "Circuit Design",
    "PCB Design", "LT Spice", "MATLAB", "Simulink"
  ]
};

const SOFTWARE_SKILLS: SkillGroup = {
  category: 'Software',
  icon: Network,
  skills: [
    "Python", "Rust", "C/C++", "OpenWebUI",
    "Docker", "Ollama", "ComfyUI", "LangChain/LangGraph",
    "RAG Pipelines", "Qdrant", "PostgreSQL", "N8N"
  ]
};

export const Skills: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white">
          SYSTEM <span className="text-os-muted">///</span> ARCHITECTURE
        </h2>
        <div className="h-px flex-1 bg-os-panel"></div>
        <div className="text-os-cyan font-mono text-xs">[DIAGNOSTICS_MODE]</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Board A: Hardware */}
        <div className="relative group">
          {/* PCB Trace Decor */}
          <div className="absolute -inset-1 border border-os-amber/30 rounded-lg opacity-50"></div>
          <div className="absolute -inset-[2px] bg-os-amber/10 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative bg-os-bg/80 border border-os-panel p-6 md:p-8 rounded-lg backdrop-blur overflow-hidden h-full">
             {/* Corner Screws */}
             <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-os-muted/50 border border-os-text/30"></div>
             <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-os-muted/50 border border-os-text/30"></div>
             <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-os-muted/50 border border-os-text/30"></div>
             <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-os-muted/50 border border-os-text/30"></div>

             <div className="flex items-center gap-3 mb-6 border-b border-os-amber/20 pb-4">
                <div className="p-2 bg-os-amber/10 rounded border border-os-amber/30">
                  <Cpu className="w-6 h-6 text-os-amber" />
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-xl text-white">BOARD_A: THE SILICON</h3>
                  <p className="text-xs text-os-amber font-mono">EMBEDDED_SYSTEMS_MODULE</p>
                </div>
             </div>

             <div className="flex flex-wrap gap-3">
                {HARDWARE_SKILLS.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-os-panel/50 border border-os-panel text-sm text-os-text hover:border-os-amber hover:text-os-amber hover:bg-os-amber/10 cursor-default transition-colors duration-300 font-mono"
                  >
                    {skill}
                  </span>
                ))}
             </div>

             {/* Decorative Traces */}
             <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
               <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-os-amber">
                 <path d="M10 90 H 40 V 60 H 70 V 30 H 90" strokeWidth="2" />
                 <circle cx="10" cy="90" r="2" fill="currentColor" />
                 <circle cx="90" cy="30" r="2" fill="currentColor" />
               </svg>
             </div>
          </div>
        </div>

        {/* Board B: Software */}
        <div className="relative group">
          <div className="absolute -inset-1 border border-os-cyan/30 rounded-lg opacity-50"></div>
          <div className="absolute -inset-[2px] bg-os-cyan/10 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative bg-os-bg/80 border border-os-panel p-6 md:p-8 rounded-lg backdrop-blur overflow-hidden h-full">
             <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-os-muted/50 border border-os-text/30"></div>
             <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-os-muted/50 border border-os-text/30"></div>
             <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-os-muted/50 border border-os-text/30"></div>
             <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-os-muted/50 border border-os-text/30"></div>

             <div className="flex items-center gap-3 mb-6 border-b border-os-cyan/20 pb-4">
                <div className="p-2 bg-os-cyan/10 rounded border border-os-cyan/30">
                  <Network className="w-6 h-6 text-os-cyan" />
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-xl text-white">BOARD_B: THE SYNAPSE</h3>
                  <p className="text-xs text-os-cyan font-mono">NEURAL_NETWORKS_MODULE</p>
                </div>
             </div>

             <div className="flex flex-wrap gap-3">
                {SOFTWARE_SKILLS.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-os-panel/50 border border-os-panel text-sm text-os-text hover:border-os-cyan hover:text-os-cyan hover:bg-os-cyan/10 cursor-default transition-colors duration-300 font-mono"
                  >
                    {skill}
                  </span>
                ))}
             </div>
             
             {/* Decorative Network */}
             <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-os-cyan">
                  <circle cx="20" cy="80" r="2" fill="currentColor" />
                  <circle cx="50" cy="50" r="2" fill="currentColor" />
                  <circle cx="80" cy="20" r="2" fill="currentColor" />
                  <circle cx="80" cy="80" r="2" fill="currentColor" />
                  <path d="M20 80 L 50 50 L 80 20 M 50 50 L 80 80" strokeWidth="1" />
                </svg>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};