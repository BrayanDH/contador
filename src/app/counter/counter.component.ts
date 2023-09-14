import { Component } from '@angular/core';

@Component ({
  selector: 'app-counter',
  templateUrl: './counter.component.html',

})
export class CounterComponent {

  counter: number  = 5;

  handleCounterChange(value: number) {
    this.counter = value;
  }


}
