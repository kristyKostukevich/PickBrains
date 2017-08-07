export class InputModel {
  value: string;
  placeholder: string;
  disabled: boolean;
  field: string;
  itemNumber: number;
  readOnly: boolean;
  level: number;

  constructor(value: string, placeholder: string, disabled?: boolean,field?: string, itemNumber?: number, readOnly?: boolean, level?: number) {
    this.value = value || '';
    this.placeholder = placeholder;
    this.disabled = disabled;
    this.field = field;
    this.itemNumber = itemNumber;
    this.readOnly = readOnly;
    this.level = level;
  }
}
