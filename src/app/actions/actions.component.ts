import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { OptionTemplateDirective } from '../option-template.directive';

@Component({
  selector: 'mtest-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent implements OnInit, OnChanges {
  @Input()
  data: any[];

  @ContentChildren(OptionTemplateDirective)
  private readonly _options: QueryList<OptionTemplateDirective> = new QueryList<OptionTemplateDirective>();

  public options$: Observable<Record<string, OptionTemplateDirective>>;

  onOptionSelection(item: any, event: any): void {
    item.selected = event;
    console.log(item.type, event);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']?.currentValue) {
      this.data.forEach(item => {
        if (item.selectedOptionId) {
          item.selected = item.options.find((o: any) => o.id === item.selectedOptionId);
        } else if (!item.selected) {
          item.selected = item.options[0];
        }
      });
    }
  }

  public ngOnInit(): void {
    this.options$ = this._options.changes.pipe(
      startWith(null),
      map(() =>
        this._options.reduce<Record<string, OptionTemplateDirective>>(
          (record: Record<string, OptionTemplateDirective>, item: OptionTemplateDirective) => ({
            ...record,
            [item.optionTemplateName]: item,
          }),
          {},
        ),
      ),
    );
  }


}
