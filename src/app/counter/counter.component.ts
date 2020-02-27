import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  time = 0;

  constructor() { }

  ngOnInit(): void {
  }
  onTimeUpdated(time: number) {
    this.time = time;
  }
}
