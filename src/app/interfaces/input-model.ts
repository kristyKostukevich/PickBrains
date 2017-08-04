export class InputModel {
  value: string;
  placeholder: string;
  disabled: boolean;

  constructor(value: string, placeholder: string, disabled?: boolean) {
    this.value = value || '';
    this.placeholder = placeholder;
    this.disabled = disabled;
  }
}
