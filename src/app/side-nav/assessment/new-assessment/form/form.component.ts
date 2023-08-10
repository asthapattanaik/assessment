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

  constructor(private _bottomSheetRef: MatBottomSheetRef<FormComponent>, private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        'cancel',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/icons/cut.svg'
        )
      );
    }

    name: string = '';
    purpose: string = '';
    duration: string = '';
    noOfQuestions : number;
  
    submitForm() {
      const formData = {
        name: this.name,
        purpose: this.purpose,
        duration: this.duration,
        noOfQuestions: this.noOfQuestions
      };
  
      this._bottomSheetRef.dismiss(formData);
    }



    closeBottomSheet(){
      this._bottomSheetRef.dismiss();
    }
}
