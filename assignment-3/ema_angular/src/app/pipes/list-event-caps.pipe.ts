import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listEventCaps'
})
export class ListEventCapsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let str = "";

    str = value.toUpperCase()
    return str;
  }

}
