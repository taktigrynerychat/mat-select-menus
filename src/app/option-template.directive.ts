import { Directive, Inject, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[optionTemplate]',
})
export class OptionTemplateDirective<T = any> {

  @Input('optionTemplate')
  optionTemplateName: string = '';

  constructor(
    @Inject(TemplateRef) public readonly template: TemplateRef<{ option: T }>
  ) {
  }
}
