export class CheckBoxModel {
  value: string;
  sendNumber: number;

  constructor(value: string, number: number) {
    this.value = value || '';
    this.sendNumber = number;
  }
}
