export class InputModel {
  value: string;
  placeholder: string;
  disabled: boolean;
  readOnly: boolean;
  level: number;

  constructor(value: string, placeholder: string, disabled?: boolean, readOnly?: boolean, level?: number) {
    this.value = value || '';
    this.placeholder = placeholder;
    this.disabled = disabled;
    this.readOnly = readOnly;
    this.level = level;
  }
}
