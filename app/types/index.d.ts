import { DateTime } from 'luxon';

type RootStackParamList = {
  Configurations: undefined;
  Info: undefined;
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
