import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormComponent } from './form/form.component';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.css'],
})
export class NewAssessmentComponent {
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private bottomSheet: MatBottomSheet
  ) {
    this.matIconRegistry.addSvgIcon(
      'add',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/add.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'assessment',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/assessment.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'calendar',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/calendar.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'link',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/link.svg'
      )
    );
  }

  name: string = '';
  purpose: string = '';
  duration: string = '';
  noOfQuestions: number = 0;
  namesArray: string[] = ['Logical Reasoning'];
  purposeArray: string[] = ['Job'];
  durationArray: string[] = ['02:00'];
  noOfQuestionsArray: number[] = [50];

  today: Date = new Date();
  monthNames: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  dd: string = String(this.today.getDate()).padStart(2, '0');
  mm: string = this.monthNames[this.today.getMonth()];
  yy: string = String(this.today.getFullYear()).slice(2);

  formattedDate: string = `${this.dd} ${this.mm} ${this.yy}`;

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
  sharebuttonClicked(){
  }
}
