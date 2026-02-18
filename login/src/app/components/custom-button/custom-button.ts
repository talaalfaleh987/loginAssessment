import { Component, input, output } from '@angular/core';
import { ButtonStyle, ButtonType } from '../../enums/button.enum';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.html',
})
export class CustomButton {
  buttonType = input<ButtonType>(ButtonType.BUTTON);
  style = input<ButtonStyle>(ButtonStyle.PRIMARY);
  tirggerCallBack = output<void>();

  readonly ButtonType = ButtonType;

  onClick(): void {
    this.tirggerCallBack.emit();
  }
}
