import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyService } from '../../../Services/Common/notify.service';


@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit{

  showLoader:Boolean = false;
  constructor(private notifyService: NotifyService){}

  ngOnInit() {
    // Subscribe to the actionState$ observable to get the updates
    this.notifyService.notifyLoaderSubscription.subscribe((state: Boolean )=> {
      this.showLoader = state;  
    });
  }
  
}
