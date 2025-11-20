import { LucideIcon } from "lucide-react";

export enum BootPhase {
  OFFLINE = 0,
  HARDWARE_CHECK = 1,
  NEURAL_HANDSHAKE = 2,
  ONLINE = 3
}

export interface LogEntry {
  id: string;
  text: string;
  // Changed status from restricted union to string to allow values like "34°C"
  status: string;
  timestamp: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  label: string;
  stats?: string;
  icon?: LucideIcon;
}

export interface Experience {
  date: string;
  role: string;
  company: string;
  log: string;
}

export interface SkillGroup {
  category: 'Hardware' | 'Software';
  skills: string[];
  icon: LucideIcon;
}