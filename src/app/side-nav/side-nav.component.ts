import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent{
  options = [
    { icon: 'dashboard', name: 'Dashboard' },
    { icon: 'assessment', name: 'Assessment' },
    { icon: 'my-library', name: 'My Library' },
    { icon: 'round-status', name: 'Round Status' },
  ];

  //add the icons from assets folder
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'dashboard',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/dashboard.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'assessment',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/note_alt.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'my-library',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/quiz.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'round-status',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/admin_meds.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'menu',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/menu.svg'
      )
    );
  }

  selectedOption: string = 'Assessment';
  
  // Function to handle option selection
  selectOption(option: string) {
    const selectedOption = this.options.find((item) => item.name === option);
    console.log('button clicked');
    console.log(selectedOption);
    if (selectedOption && selectedOption.name !== 'Admin') {
      this.selectedOption = selectedOption.name;
    }
  }

}
