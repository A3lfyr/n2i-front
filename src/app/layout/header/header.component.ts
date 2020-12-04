import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/utils/classes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  member: Member;
  public isLoggedIn: boolean = true;

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
