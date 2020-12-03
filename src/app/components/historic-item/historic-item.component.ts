import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historic-item',
  templateUrl: './historic-item.component.html',
  styleUrls: ['./historic-item.component.scss']
})
export class HistoricItemComponent implements OnInit {
    ridePlace = "Omaha Beach";
    rideCountry = "France";
    rideDate = new Date();
    rideTime = new Date();
  constructor() {

  }

  ngOnInit() {

  }

}
