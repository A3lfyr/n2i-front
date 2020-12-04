import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'info-plage',
  templateUrl: './info-plage.component.html',
  styleUrls: ['./info-plage.component.scss']
})
export class InfoPlageComponent implements OnInit {

  temperature: number;
  temperatureC: number;
  houleD: number;
  houleT: number;
  hauteurVagueMin: number;
  hauteurVagueMax: number;
  direction: string = "OSO";
  vent: number = 22;
  selectedLocation: any;
  autoCompPlaces; any;
  city: string;
  country: string;

  constructor() { }

  ngOnInit() {
    this.loadingValue();
    this.getRemoteCityInformation();
    //TODO: chercher la plage la plus proche
  }

  // Be replaced by request on API
  loadingValue() {
    this.temperature = this.getRandom(10,33);
    this.temperatureC = this.getRandom(6,15);
    this.houleD = this.getRandom(1,5);
    this.houleT = this.getRandom(6,16);
    this.hauteurVagueMin = this.getRandom(0.5,4);
    this.hauteurVagueMax = this.hauteurVagueMin + this.getRandom(0.5,3);
    this.vent = this.getRandom(5,60);
    let d = ['O', 'ONO', 'NNO', 'N', 'NNE', 'ENE', 'E', 'ESE', 'SSE', 'S', 'SSO', 'NO', 'NE', 'SE', 'SO'];
    this.direction = d[Math.floor(Math.random() * Math.floor(d.length))];
  }

  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min + 1)) + min;
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
