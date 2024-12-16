import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe],
  template: `<router-outlet />`
})
export class AppComponent {
}
