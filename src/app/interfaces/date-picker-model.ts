export class DatePickerModel {
  value: Date;
  placeholder: string;
  disabled: boolean;

  constructor(value: Date, placeholder: string, disabled?: boolean) {
    this.value = value;
    this.placeholder = placeholder;
    this.disabled = disabled;
  }
}
