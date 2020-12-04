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
  vent: number;
  constructor() { }

  ngOnInit() {
    this.loadingValue();
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
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Question 1',
        text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
    ]).then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value)
        Swal.fire({
          title: 'All done!',
          html: `
            Your answers:
            <pre><code>${answers}</code></pre>
          `,
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }
}
