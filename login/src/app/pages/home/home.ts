import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
})
export class Home implements OnDestroy {
  ngOnDestroy(): void {
    sessionStorage.clear();
  }
}
