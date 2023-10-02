import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PipesModule } from 'src/app/pipes/pipes.module';

// Angular material modules
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppointmentPageComponent, PatientPageComponent],
  imports: [
    CommonModule,
    MatTableModule,
    PipesModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [AppointmentPageComponent, PatientPageComponent],
  providers: [MatDatepickerModule],
})
export class ProtectedPagesModule {}
