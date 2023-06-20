import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket;
  constructor() {
    this.socket = io('http://localhost:3000'); // TODO: Get from env
  }

  listenForEvents(): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on('events', (data: any) => {
        subscriber.next(data);
      });
    });
  }

  sendEvent(data: any) {
    this.socket.emit('events', data);
  }
}
