import { Injectable } from '@angular/core';
import { AppointmentRequest } from '../types';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private _http: HttpClient) {}

  private _baseUrl = 'https://icgni6sgc1.execute-api.us-east-1.amazonaws.com';

  async getAppoinments(request: AppointmentRequest) {
    const params = new HttpParams();
    request.limit ? params.set('limit', request.limit) : {};
    request.lastKey ? params.set('lastKey', request.lastKey) : {};
    if (!request.lastKey && !request.limit) {
      return new Promise((resolve, reject) => {
        this._http
          .get(this._baseUrl + '/dev/appointments')
          .subscribe((appointments) => resolve(appointments));
      });
    }
    return new Promise((resolve, reject) => {
      this._http
        .get(this._baseUrl + '/dev/appointments', { params })
        .subscribe((appointments) => resolve(appointments));
    });
  }
}
