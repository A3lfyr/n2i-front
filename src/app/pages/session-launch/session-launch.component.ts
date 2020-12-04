import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-launch',
  templateUrl: './session-launch.component.html',
  styleUrls: ['./session-launch.component.scss']
})
export class SessionLaunchComponent implements OnInit {

  items: Array<String> = ["Creme Solaire", "Parfum/Déo", "Cigarette", "Peinture", "Essence"];

  constructor() { }

  ngOnInit() {
  }

}
