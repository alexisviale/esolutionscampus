import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sandbox';

  sombraVioleta  = true;

  get sombra() {
    if(this.sombraVioleta){
      return 'black-box-shadow';
    } else {
      return 'pink-box-shadow';
    }
  }
}
