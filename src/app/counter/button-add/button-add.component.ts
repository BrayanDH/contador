import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {

  @Input () 
  counter: number = 0;

  @Output () 
  addNumber = new EventEmitter<number>();

  add(){
    this.counter++;
    this.addNumber.emit(this.counter); 
  }



}
