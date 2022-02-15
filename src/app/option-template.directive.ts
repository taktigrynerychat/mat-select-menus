import { Directive, Inject, Input, TemplateRef } from '@angular/core';

export type OptionTemplateContext<T> = { option: T };

@Directive({
  selector: '[optionTemplate]',
})
export class OptionTemplateDirective<T> {

  @Input('optionTemplate')
  public optionTemplateName: string = '';

  constructor(
    @Inject(TemplateRef) public readonly template: TemplateRef<OptionTemplateContext<T>>,
  ) {
  }
}
