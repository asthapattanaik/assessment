import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormComponent } from './form/form.component';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssessmentService } from '../../service/assessment-overview-table.service';
@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.css'],
})
export class NewAssessmentComponent {
  // Observable to track the device type
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(map((result) => result.matches));

  // Constructor to initialize services and icons
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private bottomSheet: MatBottomSheet,
    private breakpointObserver: BreakpointObserver,
    private assessmentService: AssessmentService
  ) {
    // Register SVG icons
    this.matIconRegistry.addSvgIcon(
      'add',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/add.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'assessment',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/assessment.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'calendar',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/calendar.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'share',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/share.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'filter',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/filter.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'bar',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/bar.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'search',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/search.svg'
      )
    );
  }

  // Variables to store assessment data
  name: string = '';
  purpose: string = '';
  duration: string = '';
  noOfQuestions: number = 0;
  namesArray: string[] = ['Logical Reasoning'];
  purposeArray: string[] = ['Job'];
  durationArray: string[] = ['02:00'];
  noOfQuestionsArray: number[] = [50];

  // Variables to handle date formatting
  today: Date = new Date();
  monthNames: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  dd: string = String(this.today.getDate()).padStart(2, '0');
  mm: string = this.monthNames[this.today.getMonth()];
  yy: string = String(this.today.getFullYear()).slice(2);

  formattedDate: string = `${this.dd} ${this.mm} ${this.yy}`;

  // To open the bottom sheet and handle form data
  openBottomSheet() {
    const bottomSheetRef = this.bottomSheet.open(FormComponent);
    bottomSheetRef.afterDismissed().subscribe((formData) => {
      if (formData) {
        this.name = formData.name;
        this.purpose = formData.purpose;
        this.duration = formData.duration;
        this.noOfQuestions = formData.noOfQuestions;

        this.namesArray.push(this.name);
        this.purposeArray.push(this.purpose);
        this.durationArray.push(this.duration);
        this.noOfQuestionsArray.push(this.noOfQuestions);

        console.log(this.namesArray);
        console.log(this.purposeArray);
        console.log(this.durationArray);
      }
    });
  }

  // Toggle table visibility through the assessment service
  toggleTableVisibility() {
    this.assessmentService.toggleTableVisibility();
  }

  // Handle share button click
  sharebuttonClicked() {}
}
