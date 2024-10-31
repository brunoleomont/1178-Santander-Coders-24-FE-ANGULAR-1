import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  @Output()
  itemChild = new EventEmitter<string>();

  inputText = "";

  addNewItem() {
    this.itemChild.emit(this.inputText);
  }
}
