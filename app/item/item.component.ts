import { Component, Input }  from '@angular/core';

import { Item }       from './item'

@Component({
    selector:     'item',
    templateUrl:	'/app/item/item.template.html'
})
export class ItemComponent {
  @Input()
  item: Item;
}
