import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { NgFor, NgIf } from '@angular/common';
import { Child2Component } from "../child2/child2.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, NgFor, NgIf, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  title = "Parente Component Title";
  parentNames: string[] = [];
  // parentNames = ["Parent", "Parent2", "Parent3", "Parent4", "Parent5"]
  textReceived = "";

  ngOnInit(){
    this.parentNames = ["Parent", "Parent2", "Parent3", "Parent4", "Parent5"]
    console.log("Parent init");
  }

  ngDoCheck(){
    console.log("Parent doCheck");
  }


  newItemReceived(item: string) {
    this.textReceived = item;
  }
}
