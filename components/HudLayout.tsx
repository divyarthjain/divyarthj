import React, { ReactNode } from 'react';
import { Radio } from 'lucide-react';

interface HudLayoutProps {
  children: ReactNode;
}

export const HudLayout: React.FC<HudLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-os-bg text-os-text font-sans grid-bg cursor-crosshair-custom selection:bg-os-cyan selection:text-black overflow-x-hidden">
      
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 z-40 flex items-center justify-between px-4 md:px-8 border-b border-os-panel/50 backdrop-blur-sm bg-os-bg/80">
        <div className="flex items-center gap-4">
          <h1 className="font-orbitron font-bold text-xl tracking-widest text-white">
            DIVYARTH<span className="text-os-amber">_OS</span>
          </h1>
          <span className="hidden md:inline-block text-xs font-mono px-2 py-0.5 bg-os-panel rounded text-os-cyan border border-os-cyan/20">
            v1.0.0-STABLE
          </span>
        </div>

        {/* Stats section removed */}
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
        {children}
      </main>

      {/* Decorative HUD Corners */}
      <div className="fixed top-20 left-4 w-4 h-4 border-t-2 border-l-2 border-os-cyan/50 opacity-50 pointer-events-none hidden md:block"></div>
      <div className="fixed top-20 right-4 w-4 h-4 border-t-2 border-r-2 border-os-cyan/50 opacity-50 pointer-events-none hidden md:block"></div>
      <div className="fixed bottom-8 left-4 w-4 h-4 border-b-2 border-l-2 border-os-amber/50 opacity-50 pointer-events-none hidden md:block"></div>
      <div className="fixed bottom-8 right-4 w-4 h-4 border-b-2 border-r-2 border-os-amber/50 opacity-50 pointer-events-none hidden md:block"></div>
      
      {/* Bottom Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 h-8 z-40 bg-os-bg/90 border-t border-os-panel flex items-center px-4 justify-between text-[10px] md:text-xs font-mono text-os-muted uppercase tracking-wider">
        <div className="flex items-center gap-4">
          <span className="animate-pulse text-os-amber">● REC</span>
          <span>COORD: 23.2599° N, 77.4126° E (BHOPAL_NODE)</span>
        </div>
        <div className="flex items-center gap-2">
           <Radio className="w-3 h-3" />
           <span>FREQ: 2.4GHz</span>
        </div>
      </footer>
    </div>
  );
};