import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstComponentComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adabnb';
}
