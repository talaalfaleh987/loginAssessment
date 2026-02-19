import { Component, input } from '@angular/core';
import { MessageStyle, MessageType } from '../../enums/message.enum';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.html',
})
export class Message {
  textMessage = input.required<string>();
  messageType = input<MessageType>(MessageType.INFO);
  messageStyle = input<MessageStyle>(MessageStyle.ERROR);
}
