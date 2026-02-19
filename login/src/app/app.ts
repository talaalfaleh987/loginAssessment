import { Component, signal } from '@angular/core';
import { Message } from './components/message/message';
import { MessageStyle, MessageType } from './enums/message.enum';
@Component({
  selector: 'app-root',
  imports: [Message],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('login');
  readonly MessageType = MessageType;
  readonly MessageStyle = MessageStyle;
}
