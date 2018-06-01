import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'], // External styles
  styles: [`
  h3 {
    color:green;
  }
  `], // Inline styles
})
export class AppComponent {
  title = 'app';
}
