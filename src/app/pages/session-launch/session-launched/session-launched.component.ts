import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-launched',
  templateUrl: './session-launched.component.html',
  styleUrls: ['./session-launched.component.scss']
})
export class SessionLaunchedComponent implements OnInit {

  start: Date = new Date();
  now: Date = new Date();


  constructor() { 
    localStorage['sessionStart'] = this.start;
    setInterval(() => {
      this.now = new Date();
      localStorage['sessionTime'] = this.start.getTime() - this.now.getTime();
    }, 1);
  }

  ngOnInit() {
  }

}
