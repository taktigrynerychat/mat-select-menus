# MatSelectMenus
Component for displaying menus and selected options. Implemented using `mat-select` and a custom structural directive `optionTemplate`.
## Usage examples:
```html
// Usage example:
<mtest-menus-with-options [data]="data" (onOptionSelection)="onActionSelection($event)"></mtest-menus-with-options>

// The example with customized options for 'sort' and 'filter' menus:
// Use *optionTemplate directive in the content of the component to assign the template to a propper menu options
<mtest-menus-with-options [data]="data" (onOptionSelection)="onActionSelection($event)">
  <mtest-custom-option *optionTemplate="'sort'; let option" [data]="option.value"></mtest-custom-option>
  <mark *optionTemplate="'filter'; let option">{{ option.value }}</mark>
</mtest-menus-with-options>
```

```ts
// Data sample: 
public data: MenuWithOptions[] = [
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
```
