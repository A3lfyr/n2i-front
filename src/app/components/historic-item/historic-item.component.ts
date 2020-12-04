import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historic-item',
  templateUrl: './historic-item.component.html',
  styleUrls: ['./historic-item.component.scss']
})
export class HistoricItemComponent implements OnInit {
    @Input() ridePlace: string;
    @Input() rideCountry: string;
    @Input() rideDate: Date;
    @Input() rideTime: Date;
  constructor() {

  }

  ngOnInit() {

  }

}
