import { Time } from '../types';
import { DateTime } from 'luxon';

// eslint-disable-next-line yoda
const recommended = (n: number) => 5 <= n && n <= 6;

const sleepTimeStr = (n: number): string => {
  const min = n % 60;

  const minStr = min < 10 ? '0' + min : min.toString();

  return Math.floor(n / 60) + ':' + minStr;
};

export const powerNap = (): Time[] => [
  {
    recommended: false,
    sleepCycles: 0,
    sleepTime: sleepTimeStr(20),
    time: DateTime.local().plus({ minutes: 20 }),
  },
];

export const toBedRightNow = (): Time[] => {
  const cycles = 8;
  const duration = 90;
  const buffer = 15;

  const now = DateTime.local().plus({ minutes: buffer });

  return [...Array(cycles).keys()].map(i => {
    const sleepCycles = i + 1;

    return {
      recommended: recommended(sleepCycles),
      sleepCycles,
      sleepTime: sleepTimeStr(sleepCycles * duration),
      time: now.plus({ minutes: sleepCycles * duration }),
    };
  });
};

export const fallAsleepAt = (time: DateTime): Time[] => {
  const cycles = 7;
  const duration = 90;

  return [...Array(cycles).keys()].map(i => {
    const sleepCycles = i + 1;

    return {
      recommended: recommended(sleepCycles),
      sleepCycles,
      sleepTime: sleepTimeStr(sleepCycles * duration),
      time: time.plus({ minutes: sleepCycles * duration }),
    };
  });
};
