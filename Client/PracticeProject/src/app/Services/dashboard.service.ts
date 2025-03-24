import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilityService } from './Common/utility.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements OnInit {
  
  constructor(private httpClient: HttpClient, private utilityService: UtilityService) { }

  ngOnInit(): void {
    
  }

  getList(): Observable<any>{
    return this.httpClient.get(this.utilityService.baseUrl + "WeatherForecast");
  }

}
