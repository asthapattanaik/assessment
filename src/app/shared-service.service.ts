// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // To manage the toggle state of the sidenav
  private toggleSidenavSource = new BehaviorSubject<boolean>(false);

  // Creating an Observable to observe toggle events
  toggleSidenav$ = this.toggleSidenavSource.asObservable();

  // Function to trigger the toggle of the sidenav
  toggleSidenav() {
    // Emitting the toggle event by setting toggleSidenavSource value to true
    this.toggleSidenavSource.next(true);
  }
}
