export class DatePickerModel {
  value: Date;
  placeholder: string;
  disabled: boolean;
  field: string;
  readOnly: boolean;
  pickerDisabled: boolean;

  constructor(value: Date,
              placeholder: string,
              disabled?: boolean,
              field?: string,
              readOnly?: boolean,
              pickerDisabled?: boolean) {
    this.value = value;
    this.placeholder = placeholder;
    this.disabled = disabled;
    this.field = field;
    this.readOnly = readOnly;
    this.pickerDisabled = pickerDisabled;
  }
}
