import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BorderStyle]'
})
export class BorderStyleDirective implements OnChanges {

  @Input('BorderStyle') mouseOutshadowColor: string = 'yellow';
  constructor(private elem: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.elem.nativeElement.style.shadow = `4px ${this.mouseOutshadowColor}`;
  }
  
  @HostListener('mouseover') mouseOverFunc() {
    this.elem.nativeElement.style.shadow = `10px ${this.mouseOutshadowColor}`;
  }
  
  @HostListener('mouseout') mouseOutFunc() {
    this.elem.nativeElement.style.shadow = `4px ${this.mouseOutshadowColor}`;
  }

}
