import React from 'react';
import { Trophy, Target, Wind, GraduationCap, BookOpen, Cpu } from 'lucide-react';

export const Peripherals: React.FC = () => {
  return (
    <section className="py-20 pb-32">
      
      {/* Main System Container */}
      <div className="relative border-2 border-dashed border-os-panel/50 rounded-xl p-6 md:p-10 bg-os-panel/5">
        
        {/* Corner Accents */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-os-amber"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-os-amber"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-os-amber"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-os-amber"></div>

        {/* Section Header */}
        <div className="absolute -top-4 left-6 bg-os-bg px-4 flex items-center gap-2 text-os-amber">
           <Trophy className="w-5 h-5" />
           <span className="font-orbitron font-bold tracking-wider">PERIPHERAL_DATA</span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          
          {/* Sailing Gauge */}
          <div className="group bg-os-bg border border-os-panel hover:border-blue-500/50 transition-colors p-6 rounded-lg flex items-center gap-6 relative overflow-hidden">
             <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>
             
             <div className="relative">
               <div className="w-16 h-16 rounded-full border-4 border-os-panel flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                  <Wind className="text-blue-400 w-8 h-8" />
               </div>
               {/* Orbital Ring */}
               <div className="absolute -inset-1 border border-blue-500/20 rounded-full scale-110 animate-[spin_10s_linear_infinite]"></div>
             </div>

             <div>
               <h3 className="font-bold text-white font-rajdhani text-xl group-hover:text-blue-400 transition-colors">SAILING_MODE</h3>
               <div className="inline-block px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-mono border border-blue-500/20 rounded mb-1">
                 STATUS: INTERNATIONAL
               </div>
               <p className="text-sm text-os-muted leading-tight">Represented India In India International Regata. 3x National Championship Competitor.</p>
             </div>
          </div>

          {/* Snooker Target */}
          <div className="group bg-os-bg border border-os-panel hover:border-red-500/50 transition-colors p-6 rounded-lg flex items-center gap-6 relative overflow-hidden">
             <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-red-500/10 to-transparent pointer-events-none"></div>
             
             <div className="relative">
               <div className="w-16 h-16 rounded-full border-2 border-os-panel bg-black flex items-center justify-center relative group-hover:border-red-500/30 transition-colors">
                  <Target className="text-red-500 w-8 h-8 z-10" />
                  <div className="absolute w-full h-[1px] bg-red-500/50"></div>
                  <div className="absolute h-full w-[1px] bg-red-500/50"></div>
               </div>
               <div className="absolute -inset-1 border border-dashed border-red-500/20 rounded-full scale-110 animate-[spin_8s_linear_infinite_reverse]"></div>
             </div>

             <div>
               <h3 className="font-bold text-white font-rajdhani text-xl group-hover:text-red-400 transition-colors">PRECISION_STRIKE</h3>
               <div className="inline-block px-2 py-0.5 bg-red-500/10 text-red-400 text-[10px] font-mono border border-red-500/20 rounded mb-1">
                 STATUS: NATIONAL & STATE
               </div>
               <p className="text-sm text-os-muted leading-tight">Snooker & Billiards Championships.</p>
             </div>
          </div>

        </div>

        {/* Firmware / Education Section - Full Width */}
        <div className="mt-8 pt-8 border-t border-os-panel/50">
           <div className="flex flex-col md:flex-row gap-8">
              
              {/* Column 1: Courses */}
              <div className="flex-1">
                 <h3 className="text-sm font-mono text-os-cyan mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    INSTALLED_MODULES (EDUCATION)
                 </h3>
                 <div className="space-y-4">
                    <div className="bg-os-bg/50 p-4 rounded border-l-2 border-os-cyan">
                        <div className="flex justify-between items-start">
                           <span className="text-white font-medium font-rajdhani text-lg">Applied Machine Learning in Python</span>
                           <span className="text-[10px] font-mono text-os-muted border border-os-panel px-1 rounded">v2024.12</span>
                        </div>
                        <div className="text-xs text-os-muted font-mono mt-1">University of Michigan (Coursera)</div>
                    </div>

                    <div className="bg-os-bg/50 p-4 rounded border-l-2 border-os-cyan">
                        <div className="flex justify-between items-start">
                           <span className="text-white font-medium font-rajdhani text-lg">B.Tech in Electronics & Comm.</span>
                           <span className="text-[10px] font-mono text-green-500 border border-green-900/50 px-1 rounded bg-green-900/20">LOADING...</span>
                        </div>
                        <div className="text-xs text-os-muted font-mono mt-1">VIT Bhopal University - Present</div>
                    </div>
                 </div>
              </div>

              {/* Column 2: Certifications */}
              <div className="flex-1">
                 <h3 className="text-sm font-mono text-os-amber mb-4 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    LICENSE_KEYS (CERTS)
                 </h3>
                 <div className="grid grid-cols-2 gap-3">
                    {['MATLAB', 'Simulink', 'AI/ML Certification', 'Python Certification'].map((cert, i) => (
                       <div key={i} className="bg-os-bg/50 p-3 rounded border border-os-panel/50 flex items-center gap-2 hover:border-os-amber/50 transition-colors">
                          <div className="w-1.5 h-1.5 bg-os-amber rounded-full"></div>
                          <span className="text-xs text-os-text font-mono uppercase">{cert}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* Ticker */}
      <div className="mt-16 w-full bg-os-panel/30 border-y border-os-panel py-2 overflow-hidden relative opacity-70">
         <div className="whitespace-nowrap animate-[scroll_40s_linear_infinite] font-mono text-xs text-os-cyan/70">
            "MY METHOD IS DIFFERENT. I DO NOT RUSH INTO ACTUAL WORK. WHEN I GET AN IDEA I START AT ONCE BUILDING IT UP IN MY IMAGINATION. I CHANGE THE CONSTRUCTION, MAKE IMPROVEMENTS AND OPERATE THE DEVICE IN MY MIND." — NIKOLA TESLA  ///  SYSTEM_OPTIMAL  ///  DIVYARTH_OS RUNNING  ///  MEMORY_INTEGRITY: 100%  ///
         </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
};