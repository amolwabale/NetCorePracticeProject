import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilityService } from './Common/utility.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService  implements OnInit{

  constructor(private http: HttpClient, private utilityService: UtilityService) { }

  ngOnInit(): void {
    
  }

  loginUser(credentials: { UserName: any, Password: any }): Observable<any> {
    return this.http.post(this.utilityService.baseUrl + "Authenticate", credentials);  // API POST request with credentials
  }
}
