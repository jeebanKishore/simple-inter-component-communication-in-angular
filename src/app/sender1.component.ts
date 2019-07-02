import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sender1',
  template: 'Sender1Component: <input (input)="onInput($event.target.value)">'
})
export class Sender1Component {

  constructor(private dataService: DataService) {}

  onInput(value) {
    this.dataService.setData(value);
  }

}
