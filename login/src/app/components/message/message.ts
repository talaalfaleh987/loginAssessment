import { Component, input } from '@angular/core';
import { MessageStyle } from '../../enums/message.enum';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.html',
})
export class Message {
  textMessage = input.required<string>();
  messageStyle = input<MessageStyle>(MessageStyle.ERROR);
}
