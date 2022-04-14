import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  values: any = [];
  constructor() { }

  ngOnInit(): void { }

  removevalue(i: any) {
    this.values.splice(i, 1);
  }

  addNew() {
    this.values.push({ value: "" });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.values, event.previousIndex, event.currentIndex);
  }
}  
