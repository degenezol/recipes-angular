import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTitle'
})
export class ShortTitlePipe implements PipeTransform {

  transform(value: string, titleSize?: number): string {
    const endSymbolPosition = titleSize || 60;
    return value.length > endSymbolPosition ? `${value.slice(0, endSymbolPosition)}...` : value;
  }

}
