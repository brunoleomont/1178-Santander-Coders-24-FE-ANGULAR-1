import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { ParentComponent } from "./parent/parent.component";
import { FormularioReactiveFormsComponent } from "./formulario-reactive-forms/formulario-reactive-forms.component";
import { FormularioTemplateDrivenComponent } from "./formulario-template-driven/formulario-template-driven.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstComponentComponent, ParentComponent, FormularioReactiveFormsComponent, FormularioTemplateDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adabnb';
}
