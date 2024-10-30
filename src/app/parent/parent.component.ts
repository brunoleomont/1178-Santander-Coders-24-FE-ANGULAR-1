import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, NgFor],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  title = "Parente Component Title";

  parentNames = ["Parent", "Parent2", "Parent3", "Parent4", "Parent5"]

}
