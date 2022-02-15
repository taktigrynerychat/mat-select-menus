import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { OptionTemplateDirective } from '../option-template.directive';
import { IOption, ISelectWithOptions, SelectOptionEvent } from './actions.entity';

type ISelectedOption<T> = {
  selected: IOption<T>
}

@Component({
  selector: 'mtest-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent<T> implements OnInit, OnChanges {
  @Input()
  public data: ISelectWithOptions<T, ISelectedOption<T>>[];

  @Output()
  public onOptionSelection: EventEmitter<SelectOptionEvent<T>> = new EventEmitter();

  @ContentChildren(OptionTemplateDirective)
  private readonly _options: QueryList<OptionTemplateDirective<IOption<T>>> = new QueryList<OptionTemplateDirective<IOption<T>>>();

  public options$: Observable<Record<string, OptionTemplateDirective<IOption<T>>>>;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']?.currentValue) {
      this.data.forEach(item => {
        if (item.selectedOptionId) {
          item.selected = item.options.find((o: IOption<T>) => o.id === item.selectedOptionId);
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
        this._options.reduce<Record<string, OptionTemplateDirective<IOption<T>>>>(
          (record: Record<string, OptionTemplateDirective<IOption<T>>>, item: OptionTemplateDirective<IOption<T>>) => ({
            ...record,
            [item.optionTemplateName]: item,
          }),
          {},
        ),
      ),
    );
  }

  public onSelection(selectItem: ISelectWithOptions<T, ISelectedOption<T>>, selectedOption: IOption<T>): void {
    selectItem.selected = selectedOption;

    this.onOptionSelection.emit({
      type: selectItem.type,
      value: selectedOption,
    })
  }

}
