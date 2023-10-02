import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentPageComponent } from './pages/protected-pages/appointment-page/appointment-page.component';
import { PatientPageComponent } from './pages/protected-pages/patient-page/patient-page.component';

const routes: Routes = [
  { path: 'appointments', component: AppointmentPageComponent },
  { path: 'patient/:id', component: PatientPageComponent },
  { path: '', redirectTo: '/appointments', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
