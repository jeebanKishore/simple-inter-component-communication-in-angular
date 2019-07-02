import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-sender1></app-sender1><hr><app-sender2></app-sender2><hr><app-receiver></app-receiver>'
})
export class AppComponent {

  // This is a very basic example for component communication via a service, using an event emitter (RxJS Subject).

  // You could achieve data exchange much easier, by making the data object in the service public
  // and setting the component's data objects equal to the service's data object
  // (benefiting from the fact that arrays and objects are reference types). - Basic example:
  // https://stackblitz.com/edit/angular-example-component-communication-via-service-simple

  // But in complex apps this would always be risky, since in this way the data could be modified
  // unintentionally by other parts of the app.

}
