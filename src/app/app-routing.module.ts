import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './side-nav/dashboard/dashboard.component';
import { AssessmentComponent } from './side-nav/assessment/assessment.component';
import { MyLibraryComponent } from './side-nav/my-library/my-library.component';
import { RoundStatusComponent } from './side-nav/round-status/round-status.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
 { path:'assessment' , component: AssessmentComponent},
 { path:'my-library' , component: MyLibraryComponent},
 { path:'round-status' , component: RoundStatusComponent},
 { path: '', redirectTo: '/assessment', pathMatch: 'full' }, // Default route to the Dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
