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
import { MenuOption, MenuWithOptions, MenuOptionEvent } from './menus-with-options.entity';

type SelectedMenuOption<T> = {
  selected: MenuOption<T>
}

@Component({
  selector: 'mtest-menus-with-options',
  templateUrl: './menus-with-options.component.html',
  styleUrls: ['./menus-with-options.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenusWithOptionsComponent<T> implements OnInit, OnChanges {
  @Input()
  public data: MenuWithOptions<T, SelectedMenuOption<T>>[];

  @Output()
  public onOptionSelection: EventEmitter<MenuOptionEvent<T>> = new EventEmitter();

  @ContentChildren(OptionTemplateDirective)
  private readonly _options: QueryList<OptionTemplateDirective<MenuOption<T>>> = new QueryList<OptionTemplateDirective<MenuOption<T>>>();

  public options$: Observable<Record<string, OptionTemplateDirective<MenuOption<T>>>>;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']?.currentValue) {
      this.data.forEach(item => {
        if (item.selectedOptionId) {
          item.selected = item.options.find((o: MenuOption<T>) => o.id === item.selectedOptionId);
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
        this._options.reduce<Record<string, OptionTemplateDirective<MenuOption<T>>>>(
          (record: Record<string, OptionTemplateDirective<MenuOption<T>>>, item: OptionTemplateDirective<MenuOption<T>>) => ({
            ...record,
            [item.optionTemplateName]: item,
          }),
          {},
        ),
      ),
    );
  }

  public onSelection(selectItem: MenuWithOptions<T, SelectedMenuOption<T>>, selectedOption: MenuOption<T>): void {
    selectItem.selected = selectedOption;

    this.onOptionSelection.emit({
      type: selectItem.type,
      value: selectedOption,
    })
  }

}
