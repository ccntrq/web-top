import { Cores, Load, Memory, SystemInfo, Tasks, Uptime } from './types';

export interface SystemInfoService {
  getSystemInfo(): Promise<SystemInfo>;
  getCores(): Promise<Cores>;
  getMemory(): Promise<Memory>;
  getTasks(): Promise<Tasks>;
  getUptime(): Promise<Uptime>;
  getLoad(): Promise<Load>;
}
