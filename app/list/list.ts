import { Item } from '../item/item'

export class List {
  items: Item[];

  constructor(
    public id: number,
    public name: string) {
      this.items = [];
    }
}
