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
