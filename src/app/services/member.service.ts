import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { logginMember } from '../utils/classes';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private loginUrl = "http://api.upssi.net/login.php" // URL to web API
  private user: any;

  /*getCurrentMember(): Observable<any> {/*
    // If the user is logged in
    if(this.user !== undefined)
    {
      console.log(this.user);
      return (this.user);
    }
    this.user = null;
    // If the user is unknowned
    let res = this.http.get<any>(this.memberUrl);
    res.subscribe((def) => {
      this.user = def;
      console.log("[DEBUG] response service : "+def);

    });
*/
    // return the current user
    //return this.user;
  //}
  //*/

  logginMember(lm: logginMember): boolean {
    this.http.post<any>(this.loginUrl, {username: lm.username, password: lm.password, remember: lm.remember, action: "add"}).subscribe(data => {
        return (data.error = "Connected")
    })
    return false;
  }

  constructor(
    private http: HttpClient
  ) { }
}
