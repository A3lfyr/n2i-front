import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-plage',
  templateUrl: './info-plage.component.html',
  styleUrls: ['./info-plage.component.scss']
})
export class InfoPlageComponent implements OnInit {

  temperatureC: number = 17;
  houleD: number = 4.8;
  houleT: number = 13;
  hauteurVagueMin: number = 2.9;
  hauteurVagueMax: number = 5.3;
  direction: string = "OSO";
  vent: number = 22;
  constructor() { }

  ngOnInit() {
  }

}
