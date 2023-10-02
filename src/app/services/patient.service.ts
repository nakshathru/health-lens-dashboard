import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientResponse } from '../types/response/patient.response.type';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private _http: HttpClient) {}

  private _baseUrl = 'https://icgni6sgc1.execute-api.us-east-1.amazonaws.com';

  async getPatient(
    patientId: string | null
  ): Promise<PatientResponse[] | null> {
    if (patientId) {
      return new Promise((resolve, reject) => {
        this._http
          .get<PatientResponse[]>(this._baseUrl + '/dev/patient', {
            params: {
              patientId: patientId,
            },
          })
          .subscribe((patient) => resolve(patient));
      });
    }
    return null;
  }
}
