import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
  @Input('appTimes') set render(times: number) {
    //whenever 'apptimes' property is set on an element, we're going to set  a function called 'render'.
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}

/*
 TemplateRef, ViewContainerRef - used for strucutural directives
 ViewContainerRef - reference to the element that we apply the directive to (<ul>)
                  -  is a kind of custom version of ElementRef that gives us the ability to  add in more or remove elements or  render some other templates inside there.
TemplateRef -  reference to whatever elements are placed inside of the element that we applied our directive to (<li>)
*/
