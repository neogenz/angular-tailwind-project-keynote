import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div class="container h-screen flex justify-center mx-auto items-center">
      <router-outlet />
  </div>
  `,
  styles: [
    `:host {
      display: block;
      height: 100vh;
      background-image: linear-gradient(to right bottom, #ff007e, #e25cd0, #9f8fff, #45b3ff, #00cbff);
    }`
  ],
})
export class AppComponent {
  title = 'angular-tailwind-project-keynote';
}
