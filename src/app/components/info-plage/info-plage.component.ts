import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'info-plage',
  templateUrl: './info-plage.component.html',
  styleUrls: ['./info-plage.component.scss']
})
export class InfoPlageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
