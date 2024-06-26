export const validateEmailAddress = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhoneNumber = (phoneNumber: string) => {
  const re = /(354)*([0-9]{7})\b/;
  return re.test(phoneNumber);
};

export const validateOrganizationId = (id: string) => {
  const re = /^(^$|\d{9}$\b)/;
  return re.test(id);
};

export const validateWebsite = (website: string) => {
  const reg =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/;
  return reg.test(website);
};

export const validatePositiveNumber = (number: string) => {
  const reg = /^[+]?\d*$/;
  return reg.test(number);
};
