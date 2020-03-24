import { DateTime } from 'luxon';

type RootStackParamList = {
  Home: undefined;
  PowerNap: undefined;
};

type Time = {
  ampm: string;
  hour: string;
  minute: string;
  recommended: boolean;
  sleepTime: string;
  sleepCycles: number;
  time: DateTime;
};
