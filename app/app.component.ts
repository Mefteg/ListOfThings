import { Component }	from '@angular/core';

import { Item }	      from './item/item';
import { List }	      from './list/list';

@Component({
    selector:		'list-of-things',
    templateUrl:	'/app/app.template.html'
})
export class AppComponent {
	lists = [
  	new List(0, 'Test'),
  	new List(3, 'Coucou')
	];

  selectedList: List;

  onAddItem(): void {
    if (this.selectedList) {
      this.selectedList.items.push(new Item("urlurl", "content!"));
    }
  }

  onSelect(list: List): void {
    this.selectedList = list;
  }
}
