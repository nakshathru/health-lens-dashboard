import { Component } from '@angular/core';

declare global {
  interface Window {
    JotformFeedback: any;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
