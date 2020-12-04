import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/utils/classes';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  member: Member;
  public isLoggedIn: boolean = false;

  constructor(
    //private mService: MemberService
  ) { }

  ngOnInit() {
    /*this.member = new Member;
    this.isLoggedIn = false;*/
    /*this.mService.getCurrentMember().subscribe(def => {
      if(def.success === undefined)
      {
        this.member = def;
        this.isLoggedIn = true;
      }
    });*/
  }

}
