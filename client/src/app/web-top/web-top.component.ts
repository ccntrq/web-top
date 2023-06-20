import { Component, Input } from '@angular/core';
import { SystemInfo } from '../types';

@Component({
  selector: 'app-web-top',
  templateUrl: './web-top.component.html',
  styleUrls: ['./web-top.component.scss'],
})
export class WebTopComponent {
  @Input()
  systemInfo: SystemInfo | undefined = undefined;

  calculateMemoryUsage(): number {
    if (!this.systemInfo) {
      return 0;
    }

    const totalMemory = this.systemInfo.memory.total;
    const freeMemory = this.systemInfo.memory.free;
    const usedMemory = totalMemory - freeMemory;
    return (usedMemory / totalMemory) * 100;
  }
}
