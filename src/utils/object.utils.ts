export const clone = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

export const isInstance = <T>(obj: any): obj is T => {
  return obj && typeof obj === 'object';
};
