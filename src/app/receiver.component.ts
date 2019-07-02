import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-receiver',
  template: 'ReceiverComponent: The initial value is "{{ initialValue }}", the latest received value is "{{ latestValue }}".'
})
export class ReceiverComponent implements OnInit {

  constructor(private dataService: DataService) {}

  latestValue: string;
  initialValue: string;

  ngOnInit() {
    this.latestValue = this.initialValue = this.dataService.getData().message;
    this.dataService.observeData().subscribe(data => this.latestValue = data.message);
  }

}
