import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario-template-driven',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './formulario-template-driven.component.html',
  styleUrl: './formulario-template-driven.component.css'
})
export class FormularioTemplateDrivenComponent {

  countries = ['US', 'BR', 'ES']
  user = new User('User 1', 'user@example.com', this.countries[1]);
  onSubmit() {
    alert(JSON.stringify(this.user));
  }

}
