import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomButton } from '../../components/custom-button/custom-button';
import { ButtonStyle, ButtonType } from '../../enums/button.enum';

@Component({
  selector: 'app-login',
  imports: [CustomButton, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login {
  readonly ButtonType = ButtonType;
  readonly ButtonStyle = ButtonStyle;

  userForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    acceptTerms: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  myClick() {
    console.log('triggered onTriggerCallBack');
  }
}
