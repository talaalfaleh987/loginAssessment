import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputStyle, InputType } from './enums/input.enum';
import { ButtonStyle, ButtonType } from './enums/button.enum';
import { MessageStyle } from './enums/message.enum';
import { CustomButton } from './components/custom-button/custom-button';
import { Input } from './components/input/input';
@Component({
  selector: 'app-root',
  imports: [CustomButton, Input, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('login');

  //   submitted = signal(false);

  submitted = false;
  readonly InputType = InputType;
  readonly ButtonType = ButtonType;
  readonly ButtonStyle = ButtonStyle;
  form = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl(0, {nonNullable: true,   validators: [Validators.required, Validators.min(8)],
    }),
    remember: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
  });

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) return;

    console.log(this.form.value);
  }
}
