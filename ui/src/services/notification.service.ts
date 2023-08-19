import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

constructor() { }
private readonly errorsSubject$ = new Subject<string>();

public errors$() {
  return this.errorsSubject$.asObservable();
}

public showError(message: string) : void {
  this.errorsSubject$.next(message);
}
}
