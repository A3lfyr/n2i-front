import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean = false;

  constructor(
    private mService: MemberService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.mService.isLoggedIn()
  }

}
