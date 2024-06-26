// export const handleDebounce = (
//   reference: NodeJS.Timeout | null,
//   handle: () => void,
//   delay: number,
//   setCustomTimeout: (value: NodeJS.Timeout) => void
// ) => {
//   if (reference) {
//     clearTimeout(reference);
//     reference = null;
//   }

//   setCustomTimeout(setTimeout(handle, delay));
// };

export const mapboxDurationConvertToTime = (seconds: number) => {
  const minute = Math.floor(seconds / 60);
  if (minute > 60) {
    return `${Math.floor(minute / 60)} hour ${Math.floor(minute % 60)} min`;
  }

  return `${minute} min`;
};
