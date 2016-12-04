import { Component, Input } from '@angular/core';

import { List }	      from './list';

@Component({
    selector: 'list',
    templateUrl:	'/app/list/list.template.html'
})
export class ListComponent {
  @Input()
  list: List;
}
