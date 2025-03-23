import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';  // Import Subject from RxJS

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private notifyLoaderVisibilitySubject = new Subject<boolean>();  // Subject to publish changes
  notifyLoaderSubscription = this.notifyLoaderVisibilitySubject.asObservable();  // Observable to subscribe to the state
  notifyLoaderVisibility(state: boolean): void {
    this.notifyLoaderVisibilitySubject.next(state);
  }

}
