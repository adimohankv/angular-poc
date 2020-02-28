import { Component, OnInit, Input } from '@angular/core';

import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {
  @Input()
  time: number;

  constructor() {
  }

  ngOnInit(): void {}
}
