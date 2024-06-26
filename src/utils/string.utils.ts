export const capitalizeStr = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toSnakeCase = (str: string) => {
  if (str === null) return '';
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('_');
};

export const snakeToCamel = (str: string) => {
  return str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', '')
    );
};
