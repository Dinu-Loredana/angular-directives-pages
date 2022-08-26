import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef) {}
  @Input('appClass') set classesName(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
    //this.element.nativeElement.style.color = 'orange';
    // this.element.nativeElement.style.color = choseColor;
  }
}

//ElementRef - used to access the DOM element from the template file
