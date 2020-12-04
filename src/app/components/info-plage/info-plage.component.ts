import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
  selectedLocation: any;
  autoCompPlaces; any;
  city: string;
  country: string;

  constructor() { }

  ngOnInit() {
    this.getRemoteCityInformation();
  }

  searchAlert() {
    Swal.fire({
      html: 'Choisis ton lieu de glisse:</br><input placeholder="Waikiki" id="autoComp">',
      showConfirmButton: false
    });

    this.autoCompPlaces = places({
      appId: 'plTCXSX0DKW4',
      apiKey: '913a88fb22a9fb4aa574362ebfd63d72',
      container: document.querySelector('#autoComp'),
      countries: ['fr', 'en']
    });
    this.autoCompPlaces.on('change', e => this.updateLocation(e));
    this.autoCompPlaces.on('change', e => Swal.close());
  }

  updateLocation(e) {
    this.selectedLocation = e.suggestion;
    this.country = this.selectedLocation.country;
    this.city = this.selectedLocation.name;
  }

  getRemoteCityInformation() {
    this.city = "Waikiki";
    this.country = "France";
  }

}
