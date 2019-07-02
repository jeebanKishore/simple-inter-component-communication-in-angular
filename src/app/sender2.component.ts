import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sender2',
  template: 'Sender2Component: <input (input)="onInput($event.target.value)">'
})
export class Sender2Component {

  constructor(private dataService: DataService) {}

  onInput(value) {
    this.dataService.setData(value);
  }

}
