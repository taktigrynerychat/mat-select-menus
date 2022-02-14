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
      type: 'first',
      options: [
        {id: 1, text: 'bla bla'},
        {id: 2, text: 'hello'},
      ],
    },
    {
      type: 'second',
      options: [
        {id: 1, text: 'second'},
        {id: 1, text: 'options'},
      ],
    },
    {
      type: 'default',
      options: [
        {id: 1, text: 'just'},
        {id: 2, text: 'default'},
        {id: 2, text: 'options'},
      ],
    },
  ];
}
