import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">about</a></li>
  </ul>
  <router-outlet> </router-outlet>`,
})
export class AppComponent  { 
  
}
