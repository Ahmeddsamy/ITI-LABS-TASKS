import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card',
  standalone: true,
})
export class CardPipe implements PipeTransform {
  transform(value: string): string {
    const formatted = value.replace(/(.{4})/g, '$1-');
    return formatted.endsWith('-') ? formatted.slice(0, -1) : formatted;
  }
}
