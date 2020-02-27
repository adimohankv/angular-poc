import { Component, OnInit } from '@angular/core';

import { CounterStatsService } from '../services/counter-stats.service';
import { Stats } from '../models/counter-stats.model';

@Component({
  selector: 'app-counter-stats-display',
  templateUrl: './counter-stats-display.component.html',
  styleUrls: ['./counter-stats-display.component.scss']
})
export class CounterStatsDisplayComponent implements OnInit {
  stats: Stats;

  constructor(private counterStatsService: CounterStatsService) { }

  ngOnInit(): void {
    this.counterStatsService.stats$.subscribe(stats => this.stats = stats);
  }

}
