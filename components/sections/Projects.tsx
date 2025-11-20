import React from 'react';
import { Project } from '../../types';
import { Bot, Database, Activity, PenTool, Cpu } from 'lucide-react';

const PROJECTS: Project[] = [
  {
    id: 'VIV_01',
    label: 'PROJECT_ID: VIV_01',
    title: 'VIV - Enterprise AI Server',
    description: "Self-hosted Generative AI ecosystem. Runs locally as a ChatGPT alternative. Integrates SQL & GraphDB via RAG for advanced reasoning. Features full voice interaction.",
    tech: ['OpenWebUI', 'Ollama', 'ComfyUI', 'N8N', 'Qdrant'],
    icon: Database
  },
  {
    id: 'HEX_02',
    label: 'PROJECT_ID: HEX_02',
    title: 'ArcheoHex Robot',
    description: "Bio-inspired Hexapod designed for Archaeological Exploration. Contorts limbs to navigate tight spaces. Uses CV for object detection (88.7% acc).",
    tech: ['ROS2', 'Computer Vision', 'Inv. Kinematics', 'Raspberry Pi'],
    stats: '88.7% Detection Acc.',
    icon: Bot
  },
  {
    id: 'JEEVAN_03',
    label: 'PROJECT_ID: JEEVAN_03',
    title: 'JEEVAN Response System',
    description: "Trauma victim ID system (<20s) using multi-modal biometrics & Aadhaar API. AI routing for hospital bed availability.",
    tech: ['React Native', 'Node.js', 'MongoDB', 'Biometrics'],
    icon: Activity
  },
  {
    id: 'QUAD_04',
    label: 'PROJECT_ID: QUAD_04',
    title: 'QuadrapedMax',
    description: "Dynamic 3D-printed quadruped robot running custom gait algorithms on ESP32 Xiao. Features ultrasonic obstacle avoidance.",
    tech: ['ESP32 Xiao', 'C++', '3D Printing', 'Gait Algos'],
    icon: Cpu
  },
  {
    id: 'LAB_05',
    label: 'PROJECT_ID: LAB_05',
    title: 'Embedded Lab Suite',
    description: "Custom Arch Linux builds for Pi, RPi Flight Controllers, DIY VPNs, and Mesh-networked home automation nodes.",
    tech: ['Arch Linux', 'Zigbee', 'VPN', 'PCB Design'],
    icon: PenTool
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="py-20 border-t border-os-panel/50">
       <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white">
          MISSION <span className="text-os-muted">///</span> LOGS
        </h2>
        <div className="h-px flex-1 bg-os-panel"></div>
        <div className="text-os-cyan font-mono text-xs">[DEPL_STATUS: ACTIVE]</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative bg-os-bg border border-os-panel hover:border-os-cyan/50 transition-all duration-300 overflow-hidden rounded-lg">
            
            {/* Hover Reveal Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-os-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="p-6 md:p-8 space-y-4">
               <div className="flex justify-between items-start">
                 <span className="font-mono text-xs text-os-cyan bg-os-cyan/10 px-2 py-1 rounded border border-os-cyan/20">
                   {project.label}
                 </span>
                 {project.icon && <project.icon className="w-5 h-5 text-os-muted group-hover:text-os-cyan transition-colors" />}
               </div>

               <h3 className="text-2xl font-rajdhani font-bold text-white group-hover:text-os-cyan transition-colors">
                 {project.title}
               </h3>

               <p className="text-sm text-os-text leading-relaxed">
                 {project.description}
               </p>

               {project.stats && (
                  <div className="py-2 border-y border-os-panel border-dashed">
                     <span className="font-mono text-xs text-green-500">>> STATS: {project.stats}</span>
                  </div>
               )}

               <div className="pt-2 flex flex-wrap gap-2">
                 {project.tech.map((t, i) => (
                   <span key={i} className="text-xs font-mono text-os-muted">#{t}</span>
                 ))}
               </div>
            </div>

            {/* Corner decorative bracket */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-os-panel group-hover:border-os-cyan transition-colors"></div>
          </div>
        ))}
      </div>
    </section>
  );
};