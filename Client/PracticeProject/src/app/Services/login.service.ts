import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService  implements OnInit{

  private apiUrl = 'https://localhost:7164/Authenticate';  // Replace with your API URL

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }

  // Method to call the API and return an observable
  loginUser(credentials: { UserName: any, Password: any }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);  // API POST request with credentials
  }
}
