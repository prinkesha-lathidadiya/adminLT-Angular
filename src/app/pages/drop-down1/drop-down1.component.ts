import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down1',
  templateUrl: './drop-down1.component.html',
  styleUrls: ['./drop-down1.component.scss']
})
export class DropDown1Component implements OnInit {
@Input() value:any;
  constructor() { }

  ngOnInit(): void {
  }

}
