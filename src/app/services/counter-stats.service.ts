import { Injectable } from '@angular/core';
import { Stats } from '../models/counter-stats.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterStatsService {
  counterStats: Stats = {
    pausedCounter: 0,
    startedCounter: 0,
    pauseTracker: [],
    actionsTracker: []
  };

  private statsSubject = new BehaviorSubject<Stats>(this.counterStats);

  stats$: Observable<Stats> = this.statsSubject.asObservable();

  _updateStats(newStats: Stats) {
    this.statsSubject.next(newStats);
  }

  updatePauseTracker(pausedTime: number): void {
    const pausedString = `paused at ${pausedTime}`;
    this.counterStats.pauseTracker.push(pausedString);

    const stats: Stats = {...this.counterStats, pauseTracker: [...this.counterStats.pauseTracker]};

    this._updateStats(stats);
  }

  updateActionsTracker(action: string): void {
    const actionString = `${action} at ${new Date().toLocaleString()}`;
    this.counterStats.actionsTracker.push(actionString);

    const stats: Stats = {...this.counterStats, actionsTracker: [...this.counterStats.actionsTracker]};

    this._updateStats(stats);
  }

  resetPauseTarcker(): void {
    const stats: Stats = {...this.counterStats, pauseTracker: []};

    this._updateStats(stats);
  }

  updateStartedCounter(): void {
    this.counterStats.startedCounter++;

    const stats: Stats = {...this.counterStats};

    this._updateStats(stats);
  }

  updatePausedCounter(): void {
    this.counterStats.pausedCounter++;
    const stats: Stats = {...this.counterStats};

    this._updateStats(stats);
  }
}
