import { Component } from '@angular/core';

@Component({
  selector: 'nwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobile(){
    return window.innerWidth<=640;
  }
}
