import { Component } from '@angular/core';
import { MenuOption, MenuWithOptions, MenuOptionEvent } from './actions/menus-with-options.entity';

@Component({
  selector: 'mtest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'material-testing-project';

  public onActionSelection(event: MenuOptionEvent): void {
    console.log(event);
  }

  public data: MenuWithOptions<{ kek: string }>[] = [
    {
      type: 'filter',
      options: [
        {id: 1, value: 'All Lists'},
        {id: 2, value: 'Some Lists'},
      ],
    },
    {
      type: 'sort',
      options: [
        {id: 1, value: 'By Created Date'},
        {id: 2, value: 'By Last Logon Date'},
        {id: 3, value: 'By Items Count'},
      ],
    },
    {
      type: 'group',
      selectedOptionId: 3,
      options: [
        {id: 1, value: 'No Grouping'},
        {id: 2, value: 'By Tag'},
        {id: 3, value: 'By Owner'},
        {id: 4, value: 'By Project'},
      ],
    },
  ];
}
