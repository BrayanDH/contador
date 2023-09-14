import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-remove',
  templateUrl: './button-remove.component.html',
  styleUrls: ['./button-remove.component.css']
})
export class ButtonRemoveComponent {

  @Input () 
  counter: number = 0;

  @Output () 
  removeNumber = new EventEmitter<number>();

    rmNumber(){
    if (this.counter > 0) {
      this.counter--;
      this.removeNumber.emit(this.counter); 
    }
    else {
      this.counter == 0;
    }
  }



}
