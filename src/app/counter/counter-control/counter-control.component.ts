import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Stats } from '../models/counter-stats.model';
import { CounterStatsService } from '../services/counter-stats.service';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss']
})
export class CounterControlComponent implements OnInit {
  counterInput = 0;
  timer;
  intervalSubject: BehaviorSubject<any>;
  isStarted = false;
  isPaused = false;
  stats: Stats;
  currentCount: number;

  @Output()
  timeUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private counterService: CounterService,
    private counterStatsService: CounterStatsService
    ) { }

  ngOnInit(): void {
    this.counterStatsService.stats$.subscribe(stats => this.stats = stats);
  }

  onCounterStartClick = (counterInput: number): void => {
    if (!this.isStarted) {
      this.startCounter(counterInput);
    } else {
      this.pauserCounter(!this.isPaused);
      this.isPaused = !this.isPaused;
    }
  }

  startCounter(counterInput: number) {
    const counterObsevable = this.counterService.start(counterInput);

    this.intervalSubject = counterObsevable.subject;
    this.timer = counterObsevable.timer$.subscribe(time => {
      this.currentCount = time;
      this.timeUpdated.emit(time);
    });

    this.counterStatsService.updateActionsTracker('Started');
    this.counterStatsService.updateStartedCounter();
    this.isStarted = true;
  }

  pauserCounter(isPaused: boolean) {
    this.intervalSubject.next(isPaused);

    if (isPaused) {
      this.counterStatsService.updatePauseTracker(this.currentCount);
      this.counterStatsService.updatePausedCounter();
    }

    this.counterStatsService.updateActionsTracker('Paused');
  }

  onResentClick() {
    this.isStarted = false;
    this.counterStatsService.resetPauseTarcker();
    this.timer.unsubscribe();
  }
}
