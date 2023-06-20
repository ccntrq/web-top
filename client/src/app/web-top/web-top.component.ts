import { Component } from '@angular/core';
import { SystemInfo } from '../types';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-web-top',
  templateUrl: './web-top.component.html',
  styleUrls: ['./web-top.component.scss'],
})
export class WebTopComponent {
  systemInfo: SystemInfo | undefined = undefined;
  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.listenForEvents().subscribe((data: SystemInfo) => {
      console.log(data);
      this.systemInfo = data;
    });
  }

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
