import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { Appointment, BasicAppointment, Healthlens } from 'src/app/types';
import { PatientResponse } from 'src/app/types/response/patient.response.type';

@Component({
  selector: 'hl-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.scss'],
})
export class PatientPageComponent implements OnInit {
  id!: string | null;
  patientData?: BasicAppointment;
  treatment = {
    doctor: '',
    ai: '',
  };
  rawData? = '';
  loading = false;
  healthlensData?: Healthlens;
  constructor(
    private _route: ActivatedRoute,
    private _patientSvc: PatientService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.id = this._route.snapshot.paramMap.get('id');
    this._patientSvc
      .getPatient(this.id)
      .then((datas) => {
        console.log(datas);
        datas?.forEach((data) => {
          if (data?.type === 'raw') this.rawData = data?.conversation?.channel1;
          if (data?.type === 'extracted')
            this.patientData = data?.data as BasicAppointment;
          if (data?.type === 'openAI')
            this.healthlensData = data?.data as Healthlens;
        });
        this.loading = false;
      })
      .catch((err) => (this.loading = false));
  }
}
