import { Component, computed, input } from '@angular/core';
import { InputStyle, InputType } from '../../enums/input.enum';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MessageStyle } from '../../enums/message.enum';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.html',
})
export class Input {
  control = input.required<FormControl>();
  inputType = input<InputType>(InputType.TEXT);
  style = input<InputStyle>(InputStyle.MESSAGE);
  label = input<string>('');
  placeholder = input<string>('');
  showErrorOnSubmit = input<boolean>(false);

  readonly InputType = InputType;
  readonly MessageStyle = MessageStyle;

  isCheckbox = computed(() => this.inputType() === InputType.CHECKBOX);

  shouldValidate = computed(() => {
    const c = this.control();
    return this.showErrorOnSubmit() || c.touched || c.dirty;
  });

  showError = computed(() => this.shouldValidate() && this.control().invalid);
  errorMessage = computed(() => {
    if (!this.showError()) return '';

    const errors = this.control().errors;
    if (!errors) return '';
    const name = this.label() || this.placeholder() || 'This field';
    if (errors['required']) return `${name} is required`;
    if (errors['requiredTrue']) return `Please check "${name}"`;
    if (errors['minlength']) {
      const req = errors['minlength'].requiredLength;
      return `${name} must be at least ${req} characters`;
    }
    if (errors['maxlength']) {
      const req = errors['maxlength'].requiredLength;
      return `${name} must be less than ${req} characters`;
    }
    if (errors['pattern']) return `${name} format is invalid`;
    return `${name} is invalid`;
  });

  inputClass = computed(() => (this.showError() ? InputStyle.ERROR : this.style()));
}
