import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mtest-custom-option',
  templateUrl: './custom-option.component.html',
  styleUrls: ['./custom-option.component.scss'],
})
export class CustomOptionComponent {

  @Input()
  data: any;
}
