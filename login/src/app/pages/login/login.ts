import { Component, inject, signal } from '@angular/core';
import { InputType, ValidatorType } from '../../enums/input.enum';
import { ButtonStyle, ButtonType } from '../../enums/button.enum';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputErrorMessage } from '../../models/input-error-message';
import { CustomInput } from '../../components/input/input';
import { CustomButton } from '../../components/custom-button/custom-button';
import { Router } from '@angular/router';
import { Constants, REGEX } from '../../core/constants';
import { SessionStorageKeys } from '../../enums/session-storage.enum';
import { RouterPath } from '../../core/router-paths';

@Component({
  selector: 'app-login',
  imports: [CustomButton, CustomInput, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login {
  submitted = signal(false);

  router = inject(Router);

  readonly InputType = InputType;
  readonly ButtonType = ButtonType;
  readonly ButtonStyle = ButtonStyle;

  form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.pattern(REGEX.NUMBERS)],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(Constants.PASSWORD_MIN_LENGTH)],
    }),
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

    sessionStorage.setItem(SessionStorageKeys.LOGGED_IN, 'true');
    sessionStorage.setItem(SessionStorageKeys.USERNAME, this.form.value.username ?? '');

    void this.router.navigateByUrl(RouterPath.Pages.HOME);
  }
}
