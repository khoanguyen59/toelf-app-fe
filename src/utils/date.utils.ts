import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const DATE_FORMAT = {
  DDMMYYYY: 'DD/MM/YYYY',
  MMDDYYYY: 'MM/DD/YYYY',
  DDMMMYYYY: 'DD MMM YYYY',
  HHmmMMDDYYYY: 'HH:mm MM/DD/YYYY',
  MMDDYYYYHHmm: 'MM/DD/YYYY HH:mm',
};

export const toLocalDate = (date: Date) => {
  return dayjs().to(dayjs(date));
};

export const formatDate = (date: Date, format: string): string => {
  return dayjs(date).format(format);
};

export const isToday = (date: Date): boolean => {
  const today = new Date();
  return dayjs(today).isSame(date, 'day');
};

export const isYesterday = (date: Date): boolean => {
  const today = new Date();
  const yesterday = dayjs(today).subtract(1, 'day');
  return yesterday.isSame(date, 'day');
};

export const resetTimeZeroOfDate = (date: Date): Date => {
  date = new Date(date);
  const newDate = dayjs(date).hour(0).minute(0).second(0).millisecond(0);
  return newDate.toDate();
};

export const addDays = (date: Date, days: number): Date => {
  const newDate = dayjs(date).add(days, 'day').toDate();
  return newDate;
};
