import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'posterPipe'
})
export class PosterPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value){
      return 'assets/imgs/no-image.png';
    }
    return `https://image.tmdb.org/t/p/${args?args:'w500'}${value}`;
  }

}
