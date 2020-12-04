import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { logginMember } from 'src/app/utils/classes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  lm: logginMember;
  username: string = "";
  password: string = "";
  remember: boolean = false;
  


  constructor(
    private mService: MemberService
  ) { }

  ngOnInit() {
  }

  login() {
    this.lm = new logginMember();
    this.lm.username = this.username;
    this.lm.password = this.password;
    if(this.remember){
      this.lm.remember = 1
    } else {
      this.lm.remember = 0
    }
    this.mService.logginMember(this.lm);
  }

}
