import { Component, inject, signal } from '@angular/core';
import { InputType, ValidatorType } from '../../enums/input.enum';
import { ButtonStyle, ButtonType } from '../../enums/button.enum';
import { MessageStyle } from '../../enums/message.enum';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputErrorMessage } from '../../models/input-error-message';
import { Message } from '../../components/message/message';
import { CustomInput } from '../../components/input/input';
import { CustomButton } from '../../components/custom-button/custom-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CustomButton, CustomInput, ReactiveFormsModule, Message],
  templateUrl: './login.html',
})
export class Login {
  submitted = signal(false);

  router = inject(Router);

  readonly InputType = InputType;
  readonly ButtonType = ButtonType;
  readonly ButtonStyle = ButtonStyle;
  readonly MessageStyle = MessageStyle;

  form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.pattern('^[0-9]+$')],
    }),
    password: new FormControl('', { validators: [Validators.required, Validators.minLength(8)] }),
    rememberMe: new FormControl(false),
  });

  usernameErrors: InputErrorMessage[] = [
    { message: 'Username is required', types: [ValidatorType.required] },
  ];

  passwordErrors: InputErrorMessage[] = [
    { message: 'Password is required', types: [ValidatorType.required] },
    { message: 'Password must be at least 8 characters', types: [ValidatorType.minlength] },
  ];

  onSubmit(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', this.form.value.username ?? '');

    this.router.navigateByUrl('/home');
  }
}
