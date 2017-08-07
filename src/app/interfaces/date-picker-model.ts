export class DatePickerModel {
  value: Date;
  placeholder: string;
  disabled: boolean;
  field: string;

  constructor(value: Date, placeholder: string, disabled?: boolean,field?: string) {
    this.value = value;
    this.placeholder = placeholder;
    this.disabled = disabled;
    this.field = field;
  }
}
