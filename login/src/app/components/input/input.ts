import { Component, computed, input } from '@angular/core';
import { InputStyle, InputType } from '../../enums/input.enum';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Message } from '../message/message';
import { MessageStyle } from '../../enums/message.enum';

@Component({
  selector: 'app-input',
  imports: [Message, ReactiveFormsModule],
  templateUrl: './input.html',
})
export class Input {
  control = input.required<FormControl>();
  inputType = input<InputType>(InputType.TEXT);
  style = input<InputStyle>(InputStyle.MESSAGE);
  placeholder = input<string>('');
  showErrorOnSubmit = input<boolean>(false);

  readonly InputType = InputType;
  readonly MessageStyle = MessageStyle;

  isCheckbox = computed(() => this.inputType() === InputType.CHECKBOX);

  showEmptyError = computed(() => {
    const c = this.control();
    const shouldCheck = this.showErrorOnSubmit() || c.touched || c.dirty;
    if (!shouldCheck) return false;

    return c.hasError('required') || c.hasError('requiredTrue');
  });

  inputClass = computed(() => (this.showEmptyError() ? InputStyle.ERROR : this.style()));
}
