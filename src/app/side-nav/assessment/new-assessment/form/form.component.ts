import { Component, EventEmitter, Output } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  // Constructor for the form component
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<FormComponent>,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'cancel',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/cut.svg'
      )
    );
  }

  // Form fields
  name: string = '';
  purpose: string = '';
  duration: string = '';
  noOfQuestions: number;

  // Function to submit the form
  submitForm() {
    // Creating form data object
    const formData = {
      name: this.name,
      purpose: this.purpose,
      duration: this.duration,
      noOfQuestions: this.noOfQuestions,
    };

    // Dismissing the bottom sheet and passing form data
    this._bottomSheetRef.dismiss(formData);
  }

  // Function to close the bottom sheet without submitting
  closeBottomSheet() {
    this._bottomSheetRef.dismiss();
  }
}
