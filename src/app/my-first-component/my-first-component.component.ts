import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GramasTransformPipe } from '../pipes/gramas-transform.pipe';
import { LocalStorageService } from '../utils/local-storage.service';

@Component({
  selector: 'my-first-component',
  standalone: true,
  imports: [NgClass, NgStyle, NgFor, NgIf, FormsModule, RouterLink, GramasTransformPipe],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {
  title = "My First Component #1178";
  name!: string;
  showSuccessMessage = false;
  fator = 3;
  
  items = [
    {name: "bruno", cpf: "123456789", value: 3},
    {name: "Julia", cpf: "123456789", value: 5},
    {name: "João", cpf: "123456789", value: 7}
  ];

  itensMarket = [
    {name: "Maça", weight: 1250},
    {name: "Pão", weight: 1500},
    {name: "Café", weight: 300}
  ];

  // Event Binding
  enableButton = false;
  enableTitle = "Exibir Pessoas";

  localStorageService = inject(LocalStorageService);

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'] != undefined ? this.route.snapshot.params['name'] : 'User';
  }

  onClickButton() {
    this.enableButton = !this.enableButton;
    this.enableTitle = this.enableButton? "Ocultar Pessoas" : "Exibir Pessoas";
  }

  // Two-way
  randomText = "texto inicial";
  changeText() {
    this.randomText = "Texto foi alterado pelo clique do botão";
  }

  saveItems() {
    this.localStorageService.setItem('items', JSON.stringify(this.itensMarket));
  }

  deleteItems() {
    this.localStorageService.removeItem('items');
  }
}
