import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef) {}
  @Input() set textColor(choseColor: string) {
    //this.element.nativeElement.style.color = 'orange';
    this.element.nativeElement.style.color = choseColor;
  }
}

//ElementRef - used to access the DOM element from the template file
