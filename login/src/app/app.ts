import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputType, ValidatorType } from './enums/input.enum';
import { ButtonStyle, ButtonType } from './enums/button.enum';
import { CustomButton } from './components/custom-button/custom-button';
import { CustomInput } from './components/input/input';
import { Message } from './components/message/message';
import { MessageStyle } from './enums/message.enum';
import { InputErrorMessage } from './models/InputErrorMessage ';
@Component({
  selector: 'app-root',
  imports: [CustomButton, CustomInput, ReactiveFormsModule, Message],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('login');

  submitted = signal(false);

  readonly InputType = InputType;
  readonly ButtonType = ButtonType;
  readonly ButtonStyle = ButtonStyle;
  readonly MessageStyle = MessageStyle;

  form = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required, Validators.minLength(8)] }),
    rememberMe: new FormControl(false),
  });
  usernameErrors: InputErrorMessage[] = [
    new InputErrorMessage('Username is required', [ValidatorType.required]),
  ];
  passwordErrors: InputErrorMessage[] = [
    new InputErrorMessage('Password is required', [ValidatorType.required]),
    new InputErrorMessage('Password must be at least 8 characters', [ValidatorType.minlength]),
  ];
  onSubmit(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
  }
}
