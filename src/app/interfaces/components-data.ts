export class ComponentsData {
  itemType: string;
  type: string;
  id: number;

  constructor(type: string, id: number, itemType?: string) {
    this.itemType = itemType;
    this.type = type;
    this.id = id;
  }

  setItemType(itemType: string) {
    this.itemType = itemType;
  }
}
