import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubstrPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    if(value && value.length>args){
     return value.substr(0,args)+'...';
    }
    return value;
  }

}
