// TODO: deduplicate - copy pasted from server

export type Cores = {
  [key: number]: number;
};

export type Memory = {
  total: number;
  free: number;
};

export type Tasks = {
  tasks: number;
  threads: number;
  running: number;
};

export type Uptime = {
  uptime: number;
};

export type Load = {
  load1: number;
  load5: number;
  load15: number;
};

export type SystemInfo = {
  cores: Cores;
  memory: Memory;
  tasks: Tasks;
  uptime: Uptime;
  load: Load;
};
