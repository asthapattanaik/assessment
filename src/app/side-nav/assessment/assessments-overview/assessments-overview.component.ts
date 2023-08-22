import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssessmentService } from '../../service/assessment-overview-table.service';

@Component({
  selector: 'app-assessments-overview',
  templateUrl: './assessments-overview.component.html',
  styleUrls: ['./assessments-overview.component.css'],
})
export class AssessmentsOverviewComponent implements OnInit {
  
  // Observable to track the device type (handset or tablet)
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(map((result) => result.matches));

  // Constructor to initialize services and icons
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver,
    private assessmentService: AssessmentService
  ) {
    // Register SVG icons
    this.matIconRegistry.addSvgIcon(
      'agenda',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/agenda.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'candidates',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/candidates.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'source',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/source.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'link',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/link.svg'
      )
    );
  }

  // Initialize initial dummy values for data
  totalAssessment: number = 34;
  totalCandidates: number = 11145;
  attemptedCandidates: number = 114;
  email: number = 11000;
  socialShare: number = 145;
  uniqueLink: number = 145;
  totalPurpose: number = 11;

  isTableVisible: boolean = false;

  // ngOnInit lifecycle hook
  ngOnInit() {
    this.assessmentService.isTableVisible$.subscribe((isVisible) => {
      this.isTableVisible = isVisible;
    });
  }

  // Function to toggle the visibility of the table
  toggleTableVisibility() {
    this.isTableVisible = !this.isTableVisible;
  }
}
