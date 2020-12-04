import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { logginMember, Member } from '../utils/classes';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private loginUrl = "http://api.upssi.net/login.php" // URL to web API
  private user: any;

  isLoggedIn() {
    return true;
  }
  

  logginMember(lm: logginMember): boolean {
    this.http.post<any>(this.loginUrl, {username: lm.username, password: lm.password, remember: lm.remember, action: "add"}, {withCredentials: true}).subscribe(data => {
        return (data.error = "Connected")
    })
    return false;
  }

  constructor(
    private http: HttpClient
  ) { }
}
