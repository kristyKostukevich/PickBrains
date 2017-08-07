export class InputModel {
  value: string;
  placeholder: string;
  disabled: boolean;
  field: string;
  itemNumber: number;

  constructor(value: string, placeholder: string, disabled?: boolean, field?: string, itemNumber?: number) {
    this.value = value || '';
    this.placeholder = placeholder;
    this.disabled = disabled;
    this.field = field;
    this.itemNumber = itemNumber;
  }
}
