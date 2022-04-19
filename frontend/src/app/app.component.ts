import { Component } from '@angular/core';
import { greet } from 'game-of-life-engine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  title = 'frontend';

  constructor(){
    greet();
  }
}

