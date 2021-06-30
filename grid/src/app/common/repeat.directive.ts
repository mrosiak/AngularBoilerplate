import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeat]'
})
export class RepeatDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set repeat(times: number|undefined) {
    let count=this.viewContainer.length;
    if(times===undefined){
      times = 0;
    }
    for (let i=this.viewContainer.length;i>times;i--)
      this.viewContainer.remove(i-1);

    for (let i = count ; i < times ; i++) 
    
      this.viewContainer.createEmbeddedView(this.templateRef,
      {
        $implicit:i
      });

  }
}