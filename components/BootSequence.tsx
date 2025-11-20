import React, { useEffect, useState, useRef } from 'react';
import { BootPhase, LogEntry } from '../types';
import { Cpu, Zap, HardDrive, Network } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

const LOGS_PHASE_1: Omit<LogEntry, 'id' | 'timestamp'>[] = [
  { text: "BIOS_REV_1.4.2... CHECK", status: "OK" },
  { text: "Scanning I2C bus... [0x68, 0x76] FOUND", status: "OK" },
  { text: "Calibrating IMU (MPU6050)...", status: "STABLE" },
  { text: "Initializing ESP32-S3 Co-Processors...", status: "DONE" },
  { text: "Mounting internal storage /dev/nvme0n1...", status: "MOUNTED" },
  { text: "Checking thermal telemetry...", status: "34°C" },
];

const LOGS_PHASE_2: Omit<LogEntry, 'id' | 'timestamp'>[] = [
  { text: "Loading VIV_CORE_MODEL (Quantized)...", status: "PENDING" },
  { text: "Allocating Tensor Buffers...", status: "OK" },
  { text: "Connecting to Vector Store (Qdrant)...", status: "CONNECTED" },
  { text: "Hydrating Context Window (128k)...", status: "DONE" },
  { text: "RAG Pipeline... [READY]", status: "ACTIVE" },
  { text: "Transferring control to DIVYARTH_OS...", status: "DONE" },
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [phase, setPhase] = useState<BootPhase>(BootPhase.HARDWARE_CHECK);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // Skip override
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === 'Enter') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onComplete]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let logIndex = 0;

    const addLog = (text: string, status: LogEntry['status']) => {
      setLogs(prev => [...prev, {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        text,
        status
      }]);
    };

    const runPhase1 = () => {
      if (logIndex < LOGS_PHASE_1.length) {
        const log = LOGS_PHASE_1[logIndex];
        addLog(log.text, log.status);
        logIndex++;
        timeoutId = setTimeout(runPhase1, Math.random() * 300 + 150);
      } else {
        timeoutId = setTimeout(() => {
          setPhase(BootPhase.NEURAL_HANDSHAKE);
          logIndex = 0;
          runPhase2();
        }, 800);
      }
    };

    const runPhase2 = () => {
       if (logIndex < LOGS_PHASE_2.length) {
         const log = LOGS_PHASE_2[logIndex];
         
         if (log.text.includes("Loading VIV")) {
           addLog(log.text, "LOADING...");
           setTimeout(() => {
             setLogs(prev => {
                const newLogs = [...prev];
                newLogs[newLogs.length - 1].status = "DONE";
                newLogs[newLogs.length - 1].text += " [100%]";
                return newLogs;
             });
             logIndex++;
             runPhase2();
           }, 1500);
         } else {
           addLog(log.text, log.status);
           logIndex++;
           timeoutId = setTimeout(runPhase2, 600);
         }
       } else {
         timeoutId = setTimeout(() => {
            onComplete();
         }, 1000);
       }
    };

    if (phase === BootPhase.HARDWARE_CHECK) {
      runPhase1();
    }

    return () => clearTimeout(timeoutId);
  }, [phase, onComplete]);

  // Colors based on phase
  const activeColor = phase === BootPhase.HARDWARE_CHECK ? '#f59e0b' : '#06b6d4';
  
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center font-mono text-sm overflow-hidden">
      
      {/* CSS for animations */}
      <style>{`
        @keyframes flow-in {
          0% { stroke-dashoffset: 100; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .trace-line {
          stroke-dasharray: 10 20;
          animation: flow-in 2s linear infinite;
        }
      `}</style>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Circuit Tendrils Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="traceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={activeColor} stopOpacity="0" />
              <stop offset="50%" stopColor={activeColor} stopOpacity="1" />
              <stop offset="100%" stopColor={activeColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <g stroke="url(#traceGradient)" strokeWidth="2" fill="none">
            {/* Left Side Tendrils connecting to center (approx x=300 to x=500, y=200 to y=400) */}
            <path d="M 0 100 L 100 100 L 150 150 L 250 150" className="trace-line" style={{animationDuration: '3s'}} />
            <path d="M 0 300 L 150 300 L 200 250 L 250 250" className="trace-line" style={{animationDuration: '2.5s', animationDelay: '0.5s'}} />
            <path d="M 0 500 L 100 500 L 150 450 L 250 450" className="trace-line" style={{animationDuration: '3.5s', animationDelay: '1s'}} />
            
            {/* Right Side Tendrils */}
            <path d="M 800 100 L 700 100 L 650 150 L 550 150" className="trace-line" style={{animationDuration: '3.2s', animationDelay: '0.2s'}} />
            <path d="M 800 300 L 650 300 L 600 250 L 550 250" className="trace-line" style={{animationDuration: '2.8s', animationDelay: '0.7s'}} />
            <path d="M 800 500 L 700 500 L 650 450 L 550 450" className="trace-line" style={{animationDuration: '3.1s', animationDelay: '1.2s'}} />

            {/* Top Tendrils */}
            <path d="M 300 0 L 300 100 L 350 150" className="trace-line" style={{animationDuration: '4s'}} />
            <path d="M 500 0 L 500 100 L 450 150" className="trace-line" style={{animationDuration: '3.8s', animationDelay: '0.3s'}} />

            {/* Bottom Tendrils */}
            <path d="M 300 600 L 300 500 L 350 450" className="trace-line" style={{animationDuration: '2.9s', animationDelay: '0.4s'}} />
            <path d="M 500 600 L 500 500 L 450 450" className="trace-line" style={{animationDuration: '3.3s', animationDelay: '0.1s'}} />
          </g>

          {/* Connector Nodes at Center Edge */}
          <circle cx="250" cy="150" r="3" fill={activeColor} className="animate-pulse" />
          <circle cx="250" cy="250" r="3" fill={activeColor} className="animate-pulse" />
          <circle cx="250" cy="450" r="3" fill={activeColor} className="animate-pulse" />
          
          <circle cx="550" cy="150" r="3" fill={activeColor} className="animate-pulse" />
          <circle cx="550" cy="250" r="3" fill={activeColor} className="animate-pulse" />
          <circle cx="550" cy="450" r="3" fill={activeColor} className="animate-pulse" />
          
          <circle cx="350" cy="150" r="3" fill={activeColor} className="animate-pulse" />
          <circle cx="450" cy="150" r="3" fill={activeColor} className="animate-pulse" />
          
          <circle cx="350" cy="450" r="3" fill={activeColor} className="animate-pulse" />
          <circle cx="450" cy="450" r="3" fill={activeColor} className="animate-pulse" />

        </svg>
      </div>

      {/* Central Terminal Window */}
      <div className="relative z-20 w-full max-w-2xl mx-4">
        {/* Terminal Glow */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${phase === BootPhase.HARDWARE_CHECK ? 'from-os-amber to-orange-600' : 'from-os-cyan to-blue-600'} rounded-lg blur opacity-20 animate-pulse`}></div>
        
        <div className="relative bg-black/90 border border-os-panel rounded-lg shadow-2xl overflow-hidden flex flex-col min-h-[400px]">
          
          {/* Header */}
          <div className="bg-os-panel/30 px-4 py-2 flex items-center justify-between border-b border-os-panel/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-os-muted uppercase tracking-wider">
              {phase === BootPhase.HARDWARE_CHECK ? (
                <>
                  <Cpu className="w-3 h-3" />
                  <span>HARDWARE_INIT</span>
                </>
              ) : (
                <>
                  <Zap className="w-3 h-3 text-os-cyan" />
                  <span>NEURAL_LINK</span>
                </>
              )}
            </div>
            <div className="text-xs text-os-muted font-mono">PID: {Math.floor(Math.random() * 9000) + 1000}</div>
          </div>

          {/* Terminal Body */}
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto scrollbar-hide font-mono text-sm space-y-2">
             {logs.map((log) => (
                <div key={log.id} className="flex items-start gap-3 opacity-90 group hover:bg-white/5 p-0.5 rounded transition-colors">
                  <span className="text-os-muted whitespace-nowrap text-xs mt-0.5 select-none">
                    [{new Date(log.timestamp).toLocaleTimeString([], {hour12: false, hour:'2-digit', minute:'2-digit', second:'2-digit'})}.{Math.floor(log.timestamp % 1000).toString().padStart(3, '0')}]
                  </span>
                  <div className="flex-1 flex justify-between gap-4">
                     <span className={`${phase === BootPhase.HARDWARE_CHECK ? 'text-gray-300' : 'text-cyan-100'}`}>
                       {log.text}
                     </span>
                     <span className={`font-bold whitespace-nowrap text-xs tracking-wider ${
                        log.status.includes('OK') || log.status.includes('DONE') || log.status.includes('STABLE') || log.status.includes('CONNECTED') || log.status.includes('ACTIVE')
                        ? 'text-green-500' 
                        : log.status.includes('PENDING') || log.status.includes('LOADING')
                          ? 'text-yellow-500'
                          : 'text-os-amber'
                      }`}>
                        {log.status}
                     </span>
                  </div>
                </div>
              ))}
              <div className="animate-pulse text-os-cyan mt-2">_</div>
          </div>
          
          {/* Footer / Status Bar */}
          <div className="bg-os-panel/20 px-4 py-1 border-t border-os-panel/50 flex justify-between text-[10px] text-os-muted uppercase font-mono">
              <span>MEM: {phase === BootPhase.HARDWARE_CHECK ? 'CHECKING...' : '64GB OK'}</span>
              <span>CORE_TEMP: 34°C</span>
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-os-muted animate-pulse">
            [PRESS SPACE TO OVERRIDE BOOT SEQUENCE]
        </div>
      </div>

    </div>
  );
};