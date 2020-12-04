import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  myMap: MapConstructor;
  markers: any[];

  constructor() {
  }

  ngOnInit() {
    this.myMap = L.map('mapId').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYXhsbWs1IiwiYSI6ImNraTkzanE2NTBid3EycXJvaXhiN3JlOWIifQ.kMqVp2jpRGsThlwQKQ7Ppg'
    }).addTo(this.myMap);
  }

  addMarker(lon: number, lat: number) {
    this.markers.push(L.marker([lon, lat]).addTo(this.myMap));
  }

}
