import { ChangeEvent, KeyboardEvent } from 'react';
import { CHARS } from '@/constants/characters.constants';

export const calculatePrecision = (
  value: number,
  precision: number
): number => {
  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
};

export const handleNumberChange = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
): void => {
  Number(event.target.value) < 0
    ? (event.target.value = '')
    : event.target.value;
};

export const handleKeyPress = (
  event: KeyboardEvent<HTMLInputElement | HTMLDivElement>
): void => {
  if (CHARS.includes(event?.key)) event.preventDefault();
};
