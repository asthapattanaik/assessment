import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from 'src/app/shared-service.service';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavComponent } from '../../side-nav.component';

@Component({
  selector: 'app-assessment-header',
  templateUrl: './assessment-header.component.html',
  styleUrls: ['./assessment-header.component.css'],
})
export class AssessmentHeaderComponent {

  // Observable to detect handset (mobile) screen
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset,Breakpoints.Tablet])
    .pipe(map((result) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sharedService: SharedService
  ) {}

 // Function to handle the click event of the toggle sidenav button
  onToggleSidenavClick() {
    console.log('On toggle side nav - assessment-header');
    this.sharedService.toggleSidenav();
  }
}
