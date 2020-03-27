import { DateTime } from 'luxon';

type RootStackParamList = {
  Home: undefined;
  SleepNow: undefined;
  PowerNap: undefined;
  FallAsleepPicker: undefined;
  FallAsleepScreen: { time: number };
  WakeUpPicker: undefined;
  WakeUpScreen: { time: number };
};

type Time = {
  recommended: boolean;
  sleepTime: string;
  sleepCycles: number;
  time: DateTime;
};
