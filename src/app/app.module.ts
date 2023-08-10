import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AssessmentComponent } from './side-nav/assessment/assessment.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './side-nav/dashboard/dashboard.component';
import { MyLibraryComponent } from './side-nav/my-library/my-library.component';
import { RoundStatusComponent } from './side-nav/round-status/round-status.component';
import { AssessmentHeaderComponent } from './side-nav/assessment/assessment-header/assessment-header.component';
import { AssessmentsOverviewComponent } from './side-nav/assessment/assessments-overview/assessments-overview.component';
import { NewAssessmentComponent } from './side-nav/assessment/new-assessment/new-assessment.component';
import {MatTableModule} from '@angular/material/table';
import { FormComponent } from './side-nav/assessment/new-assessment/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AssessmentComponent,
    DashboardComponent,
    MyLibraryComponent,
    RoundStatusComponent,
    AssessmentHeaderComponent,
    AssessmentsOverviewComponent,
    NewAssessmentComponent,
    FormComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
