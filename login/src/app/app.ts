import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { SessionStorageKeys } from './enums/session-storage.enum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('login');

  get isLoggedIn() {
    return sessionStorage.getItem(SessionStorageKeys.LOGGED_IN) === 'true';
  }
  get userName() {
    return sessionStorage.getItem(SessionStorageKeys.USERNAME) || '';
  }
}
