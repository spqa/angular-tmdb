import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[background-image]'
})
export class BackgroundImageDirective implements OnInit{

  @Input('background-image') url: string;
  constructor(
    private el: ElementRef
  ) {

  }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundImage=`url(${this.url})`;
    this.el.nativeElement.style.backgroundSize='cover';
  }

}
