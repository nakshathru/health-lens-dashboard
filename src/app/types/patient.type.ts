import { Address } from './address.type';
import { AppointmentDetails } from './appointment.type';
import { Gender, MaritalStatus } from './enums';
import { Identity } from './identity.type';
import { LifeStyle } from './life-style.type';
import { MedicalHistory } from './medical-history.type';

export type Patient = {
  id: string; // Medical record number
  name: string;
  dateOfBirth: Date;
  gender: Gender;
  occupation: string;
  maritalStatus: MaritalStatus;
  identity: Identity;
  address: Address;
  medicalHistory: MedicalHistory[];
  familyHistory: string[];
  lifeStyle: LifeStyle[];
  allergies: string[];
};

export type PatientWithAppointments = {
  id: string; // Medical record number
  name: string;
  dateOfBirth: Date;
  gender: Gender;
  occupation: string;
  maritalStatus: MaritalStatus;
  identity: Identity;
  address: Address;
  medicalHistory: MedicalHistory[];
  familyHistory: string[];
  lifeStyle: LifeStyle[];
  allergies: string[];
  appointments: AppointmentDetails[];
};
