import { NumericReading } from './base-types';
import { Medication } from './medication.type';
import { Patient } from './patient.type';
import { Vitals } from './vitals.type';

export type Appointment = {
  patient: Patient;
  appointment: AppointmentDetails;
};

export type AppointmentDetails = {
  id: string;
  date: Date;
  height: NumericReading;
  weight: NumericReading;
  vitals: Vitals;
  cheifComplaint: string;
  dignosis: string;
  treatment: string;
  medication: Medication;
};
