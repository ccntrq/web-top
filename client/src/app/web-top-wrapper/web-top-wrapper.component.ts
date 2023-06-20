import { Component } from '@angular/core';
import { SystemInfo } from '../types';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-web-top-wrapper',
  templateUrl: './web-top-wrapper.component.html',
  styleUrls: ['./web-top-wrapper.component.scss'],
})
export class WebTopWrapperComponent {
  systemInfo: SystemInfo | undefined = undefined;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.listenForEvents().subscribe((data: SystemInfo) => {
      this.systemInfo = data;
    });
  }
}
