export class DatePickerModel {
  value: Date;
  placeholder: string;
  disabled: boolean;
  readOnly: boolean;
  pickerDisabled: boolean;

  constructor(value: Date,
              placeholder: string,
              disabled?: boolean,
              readOnly?: boolean,
              pickerDisabled?: boolean) {
    this.value = value;
    this.placeholder = placeholder;
    this.disabled = disabled;
    this.readOnly = readOnly;
    this.pickerDisabled = pickerDisabled;
  }
}
