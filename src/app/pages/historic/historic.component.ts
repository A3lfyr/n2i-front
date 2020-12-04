import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {

  hItems = [
    {
      ridePlace: 'Obahwa',
      rideCountry: 'France',
      rideDate: new Date(),
      rideTime: new Date()
    },
    {
      ridePlace: 'Wikikaka',
      rideCountry: 'Haitii',
      rideDate: new Date(),
      rideTime: new Date()
    },
    {
      ridePlace: 'Biarritz',
      rideCountry: 'France',
      rideDate: new Date(),
      rideTime: new Date()
    },
  ];

  constructor() { }

  ngOnInit() {
  }


}
