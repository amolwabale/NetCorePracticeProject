import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit {

  name:any;
  constructor(private dashboardService: DashboardService){}
  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.dashboardService.getList().subscribe({
      next: (response) => {
        this.name = response;
        console.log(response);
      },
      error: (error) => {
        // Handle error response
        console.error('Login failed', error);
      }
    });
  }

}
