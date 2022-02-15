import { Component } from '@angular/core';

@Component({
  selector: 'mtest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-testing-project';

  public data = [
    {
      type: 'filter',
      options: [
        {id: 1, value: 'All Lists'},
      ],
    },
    {
      type: 'sort',
      options: [
        {id: 1, value: 'By Created Date'},
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
