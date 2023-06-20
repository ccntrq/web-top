import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime',
})
export class SecondsToTimePipe implements PipeTransform {
  transform(value: number): string {
    const days = Math.floor(value / 86400);
    const hours = Math.floor((value % 86400) / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    let result = '';
    if (days > 0) {
      result += `${days}d `;
    }
    result += `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;

    return result;
  }

  private pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
