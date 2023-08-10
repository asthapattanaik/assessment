import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-assessments-overview',
  templateUrl: './assessments-overview.component.html',
  styleUrls: ['./assessments-overview.component.css']
})
export class AssessmentsOverviewComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
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

  totalAssessment : number = 34;
  totalCandidates :number = 11145;
  attemptedCandidates : number = 114;
  email : number = 11000;
  socialShare : number = 145;
  uniqueLink : number = 145;
  totalPurpose : number = 11;

}
