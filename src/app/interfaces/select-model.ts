export class SelectModel {
  value: string;
  placeholder: string;
  options: string[];

  constructor(value: string, placeholder: string, options: string[]) {
    this.value = value;
    this.placeholder = placeholder;
    this.options = options;
  }
}
