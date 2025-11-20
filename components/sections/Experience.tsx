import React from 'react';
import { Experience } from '../../types';

const EXPERIENCES: Experience[] = [
  {
    date: '2025-05',
    role: 'AI Product Intern',
    company: 'QSC Cloud',
    log: 'Spearheaded "AI Video Avatar" initiative. Refined personalization logic and optimized ML training modules for mass communication.'
  },
  {
    date: '2024-07',
    role: 'President',
    company: 'A.I.E.M. Club',
    log: 'Revitalized inactive organization. Deployed hackathons, technical workshops, and student mentorship programs.'
  },
  {
    date: '2025-03',
    role: 'Tech Lead',
    company: 'Meeraki Fine Arts',
    log: 'Managing digital infrastructure and coordinating technical requirements for university events.'
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20">
       <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white">
          DATA <span className="text-os-muted">///</span> LOGS
        </h2>
        <div className="h-px flex-1 bg-os-panel"></div>
      </div>

      <div className="space-y-8 border-l border-os-panel ml-4 md:ml-8 pl-8 relative">
         {EXPERIENCES.map((exp, idx) => (
           <div key={idx} className="relative">
             {/* Timeline Dot */}
             <div className="absolute -left-[39px] top-1 w-5 h-5 bg-os-bg border-2 border-os-cyan rounded-full flex items-center justify-center">
               <div className="w-2 h-2 bg-os-cyan rounded-full animate-pulse"></div>
             </div>

             <div className="space-y-2 group">
                <div className="flex items-baseline gap-3 flex-wrap">
                   <span className="font-mono text-os-cyan text-sm">[{exp.date}]</span>
                   <h3 className="font-rajdhani font-bold text-xl text-white group-hover:text-os-amber transition-colors">
                      {exp.role} <span className="text-os-muted">@</span> {exp.company}
                   </h3>
                </div>
                <div className="bg-os-panel/20 p-4 border-l-2 border-os-panel group-hover:border-os-amber transition-colors">
                   <p className="font-mono text-sm text-os-text">
                     <span className="text-os-muted">{">"}</span> {exp.log}
                   </p>
                </div>
             </div>
           </div>
         ))}
      </div>
    </section>
  );
};