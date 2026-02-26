import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputStyle, InputType } from './enums/input.enum';
import { ButtonStyle, ButtonType } from './enums/button.enum';
import { CustomButton } from './components/custom-button/custom-button';
import { Input } from './components/input/input';
import { Message } from './components/message/message';
import { MessageStyle } from './enums/message.enum';
@Component({
  selector: 'app-root',
  imports: [CustomButton, Input, ReactiveFormsModule, Message],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('login');

  submitted = signal(false);
  readonly InputType = InputType;
  readonly InputStyle = InputStyle;
  readonly ButtonType = ButtonType;
  readonly ButtonStyle = ButtonStyle;
  readonly MessageStyle = MessageStyle;
  form = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
    rememberMe: new FormControl(false, { validators: [Validators.requiredTrue] }),
  });
  onSubmit(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
  }
}
