export enum LANGUAGE {
  ENGLISH = 'en',
  ICELAND = 'is',
  NORWAY = 'no',
}

// https://www.nationsonline.org/oneworld/country_code_list.htm
export const getCountryNameAlpha2 = (lang: LANGUAGE): string => {
  let result = 'gb';
  switch (lang) {
    case LANGUAGE.ICELAND:
      result = 'is';
      break;
    case LANGUAGE.NORWAY:
      result = 'no';
      break;
    default:
      result = 'gb';
  }

  return result;
};

export const getCountryName = (lang: LANGUAGE): string => {
  let result = 'English';
  switch (lang) {
    case LANGUAGE.ICELAND:
      result = 'Íslandi';
      break;
    case LANGUAGE.NORWAY:
      result = 'Norsk';
      break;
    default:
      result = 'English';
  }

  return result;
};
