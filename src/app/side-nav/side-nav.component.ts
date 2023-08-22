import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  // side navigation options
  options = [
    { icon: 'dashboard', name: 'Dashboard' },
    { icon: 'assessment', name: 'Assessment' },
    { icon: 'my-library', name: 'My Library' },
    { icon: 'round-status', name: 'Round Status' },
  ];

  // Mobile responsiveness variables
  isMobile: boolean;
  sideNavMode: 'side' | 'over' = 'side';
  isSideNavOpen = true;

  // Observable to detect mobile and tablet screen
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(map((result) => result.matches));

  //add the icons from assets folder
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver,
    private sharedService: SharedService
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

    this.matIconRegistry.addSvgIcon(
      'cross',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/cross.svg'
      )
    );

    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.isMobile = result.matches;
      this.sideNavMode = this.isMobile ? 'over' : 'side';
      this.isSideNavOpen = !this.isMobile;
    });
  }

  // Lifecycle hook: Component initialization
  ngOnInit() {
    console.log('SideNavComponent initialized');
    this.sharedService.toggleSidenav$.subscribe(() => {
      if (this.isMobile) {
        this.isSideNavOpen = !this.isSideNavOpen;
      }
    });
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
  // Function to close side nav when cross is clicked
  closeSideNav() {
    if (this.isMobile) {
      this.isSideNavOpen = false;
    }
  }
}
