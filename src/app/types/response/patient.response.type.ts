import { BasicAppointment } from '../appointment.type';
import { Healthlens } from '../healthlens.type';

export type PatientResponse = {
  patientId: string;
  type: string;
  conversation?: {
    channel1: string;
    channel2: string;
  };
  data?: BasicAppointment | Healthlens;
  healthlens?: Healthlens;
};
