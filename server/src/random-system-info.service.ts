import { Injectable } from '@nestjs/common';
import { SystemInfoService } from './system-info-service';
import { SystemInfo, Cores, Memory, Tasks, Uptime, Load } from './types';

@Injectable()
export class RandomSystemInfoService implements SystemInfoService {
  startup = Date.now();

  async getSystemInfo(): Promise<SystemInfo> {
    const systemInfo = {
      cores: await this.getCores(),
      memory: await this.getMemory(),
      tasks: await this.getTasks(),
      uptime: await this.getUptime(),
      load: await this.getLoad(),
    };

    return systemInfo;
  }

  async getCores(): Promise<Cores> {
    const randomCores: Cores = {};

    for (let i = 0; i < 4; i++) {
      randomCores[i] = Math.random();
    }

    return randomCores;
  }

  async getMemory(): Promise<Memory> {
    return {
      total: 16.0,
      free: Math.random() * 16 + 1,
    };
  }

  async getTasks(): Promise<Tasks> {
    return {
      tasks: Math.floor(Math.random() * 200),
      threads: Math.floor(Math.random() * 1000),
      running: Math.floor(Math.random() * 4),
    };
  }

  async getUptime(): Promise<Uptime> {
    return {
      uptime: Math.floor((Date.now() - this.startup) / 1000),
    };
  }

  async getLoad(): Promise<Load> {
    return {
      load1: Math.random(),
      load5: Math.random(),
      load15: Math.random(),
    };
  }
}
