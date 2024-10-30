import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-first-component',
  standalone: true,
  imports: [NgClass, NgStyle, NgFor, NgIf, FormsModule],
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

  // Event Binding
  enableButton = false;
  enableTitle = "Exibir Pessoas";

  onClickButton() {
    this.enableButton = !this.enableButton;
    this.enableTitle = this.enableButton? "Ocultar Pessoas" : "Exibir Pessoas";
  }

  // Two-way
  randomText = "texto inicial";
  changeText() {
    this.randomText = "Texto foi alterado pelo clique do botão";
  }

}
