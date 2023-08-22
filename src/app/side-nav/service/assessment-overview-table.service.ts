// assessment.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
  // To manage the visibility state of the table
  private isTableVisibleSubject = new BehaviorSubject<boolean>(false);

  // Creating an Observable to observe changes
  isTableVisible$: Observable<boolean> =
    this.isTableVisibleSubject.asObservable();

  // Function to toggle the visibility state of the table
  toggleTableVisibility() {
    // Inverting the current value and emitting the change
    this.isTableVisibleSubject.next(!this.isTableVisibleSubject.value);
  }
}
