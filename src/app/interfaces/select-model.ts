export class SelectModel {
  value: string;
  placeholder: string;
  options: string[];
  level: number;
  id: number;
  field: string;
  itemNumber: number;

  constructor(value: string, placeholder: string, options: string[], level?: number, id?: number,field?: string, itemNumber?:number) {
    this.value = value;
    this.placeholder = placeholder;
    this.options = options;
    this.level = level || 10;
    this.id = id || 0;
    this.field = field;
    this.itemNumber = itemNumber;
  }
}
