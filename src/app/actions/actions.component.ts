import { Component, ContentChildren, forwardRef, Input, OnInit, QueryList, ViewEncapsulation } from '@angular/core';
import { map, Observable, startWith, tap } from 'rxjs';
import { OptionTemplateDirective } from '../option-template.directive';

@Component({
  selector: 'mtest-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ActionsComponent implements OnInit {
  @Input()
  data: any[];

  @ContentChildren(OptionTemplateDirective)
  private readonly templates: QueryList<OptionTemplateDirective> = new QueryList<OptionTemplateDirective>();

  public actions$: Observable<Record<string, OptionTemplateDirective>>;

  public ngOnInit(): void {
    this.actions$ = this.templates.changes.pipe(
      startWith(null),
      map(() =>
        this.templates.reduce<Record<string, OptionTemplateDirective>>(
          (record: Record<string, OptionTemplateDirective>, item: OptionTemplateDirective) => ({
            ...record,
            [item.optionTemplateName]: item,
          }),
          {},
        )
      )
    );
  }


}
