import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputModel } from '../../interfaces/input-model';
import { InputTextComponent } from '../input-text/input-text.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'input-numeric-text',
  templateUrl: 'input-numeric-text.component.html',
  styleUrls: ['input-numeric-text.component.scss'],
})
export class InputNumericTextComponent extends InputTextComponent {
  constructor() {
    super();
  }

  emailFormControl = new FormControl('',
    [
      Validators.pattern(/^\+(\d)*/),
    ],
  );
}
