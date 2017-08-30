import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'slug'
})
export class SlugPipe implements PipeTransform {

  // by mathewbyrne https://gist.github.com/mathewbyrne/1280286
  static slugify(text: string) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  transform(value: string, args?: any): any {
    return `${SlugPipe.slugify(value)}${args?'-'+args:''}`;
  }

}
