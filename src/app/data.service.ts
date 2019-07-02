import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export interface Data {
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Data = {message: 'example'};
  private subject = new Subject<Data>();

  setData(value) {
    this.data.message = value;
    this.subject.next({...this.data} as Data);
  }

  getData() {
    return this.data;
  }

  observeData() {
    return this.subject.asObservable();
  }

}

// Note: the spread operator used in line 20 creates only a shallow copy.
// Please check if this is sufficient in your case!
