const SLEEP_CICLE_DURATION = 45;
const FALL_ASLEEP_TIME = 15;
const AMOUNT_OF_CICLES = [5, 6];
const DEFAULT_AMOUNT_OF_CYCLES = 8;

export const getFormattedTime = (date: Date): string[] => {
  let hour = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12;

  const hourString = hour
    ? hour < 10
      ? '0' + hour.toString()
      : hour.toString()
    : '12';
  const minuteString = minutes < 10 ? '0' + minutes : minutes.toString();

  return [hourString, minuteString, ampm];
};
