import { DateTime } from 'luxon';
import { Time } from '../types';

const SLEEP_CICLE_DURATION = 45;
const FALL_ASLEEP_TIME = 15;
const AMOUNT_OF_CICLES = [5, 6];
const DEFAULT_AMOUNT_OF_CYCLES = 8;

const getAmpm = (hour: number): string => (hour < 12 ? 'AM' : 'PM');

const formatHour = (hour: number): string => {
  if (!hour) {
    return '12';
  }

  return hour < 10 ? '0' + hour.toString() : hour.toString();
};

const formatMinutes = (minutes: number): string =>
  minutes < 10 ? '0' + minutes : minutes.toString();

export const powerNap = (): Time[] => {
  const now = DateTime.local();

  const pnTime = now.plus({ minute: 20 });

  return [
    {
      ampm: getAmpm(pnTime.hour),
      hour: formatHour(pnTime.hour),
      minute: formatMinutes(pnTime.minute),
      recommended: false,
      sleepCycles: 0,
      sleepTime: '0:20',
      time: pnTime,
    },
  ];
};

export const getFormattedTime = (date: Date): string[] => [
  formatHour(date.getHours() % 12),
  formatMinutes(date.getMinutes()),
  getAmpm(date.getHours()),
];
