import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-first-component',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, NgFor],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {

  title = "My First Component #1178";

  name = "Bruno";

  showSuccessMessage = false;

  fator = 3;
  
  items = [
    {name: "bruno", cpf: "123456789", value: 3},
    {name: "Julia", cpf: "123456789", value: 5},
    {name: "João", cpf: "123456789", value: 7}
  ];

}
