import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'hl-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.scss'],
})
export class AppointmentPageComponent implements OnInit {
  appointmentLength: number = 100;
  displayedColumns: string[] = ['position', 'patientId'];
  dataSource = new MatTableDataSource<{ patientId: string }>();
  pageIndex: number = 0;
  pageSize: number = 5;
  dateForm = new FormGroup({
    date: new FormControl(),
  });

  constructor(private _appointmentSvc: AppointmentService) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngAfterViewInit() {
    this.paginator ? (this.dataSource.paginator = this.paginator) : {};
  }

  // getAppointments(page: PageEvent) {
  //   //TODO: Get appointments logic here
  //   console.log(page);

  //   this.pageIndex = page.pageIndex;
  //   this.pageSize = page.pageSize;
  // }

  async getAppointments(lastKey?: string) {
    const appts = (await this._appointmentSvc.getAppoinments({
      limit: this.pageSize,
      lastKey,
    })) as { patientId: string }[];
    this.dataSource.data = appts;
  }
}
