import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  // messages: string[] = [];
  onAlert$ = new Subject();

  add(message: string) {
    // this.messages.push(message);
    this.onAlert$.next(message);
  }

}
