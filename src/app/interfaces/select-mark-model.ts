export class SelectMarkModel {
  value: string;
  placeholder: string;
  options: string[];
  level: number;
  id: number;

  constructor(value: string, placeholder: string, options: string[], level?: number, id?: number) {
    this.value = value;
    this.placeholder = placeholder;
    this.options = options;
    this.level = level || 9;
    this.id = id || 0;
  }
}
