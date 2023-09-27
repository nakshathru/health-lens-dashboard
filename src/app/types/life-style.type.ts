import { KeyStringPair } from './base-types';
import { OccuranceFrequency } from './enums';

export type LifeStyle = {
  smoking: OccuranceFrequency;
  alcoholConsumption: OccuranceFrequency;
  drugAbuse: OccuranceFrequency;
  others: KeyStringPair[];
};
