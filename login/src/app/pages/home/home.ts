import { Component, OnInit } from '@angular/core';
import { Card } from '../../components/card/card';
import { NavBar } from '../../components/nav-bar/nav-bar';

@Component({
  selector: 'app-home',
  imports: [Card, NavBar],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  username = '';

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username') || '';
  }
}
