import { Injectable } from '@angular/core';
import { Observable, interval, defer, BehaviorSubject } from 'rxjs';
import { take, filter, map, share, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  subject: BehaviorSubject<any>;
  timer$: Observable<any>;

  start(counterInput: number): {subject: BehaviorSubject<any>, timer$: Observable<any>} {
      this.createIntervalObservable(counterInput);

      return { subject: this.subject, timer$: this.timer$};
  }

  createIntervalObservable(counterInput: number) {
    this.subject = new BehaviorSubject<boolean>(false);
    this.timer$ = defer(() => {
    let seconds = 1;
    return interval(1000).pipe(
      withLatestFrom(this.subject),
      filter(([v, paused]) => !paused),
      take(counterInput),
      map(() => seconds++)
    );
    }).pipe(share());
  }
}
