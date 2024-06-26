import { useMatch } from 'react-router-dom';

export const isMatchPath = (path: string): boolean => {
  const match = useMatch(path);

  if (!match) {
    return false;
  }

  return true;
};

export const getExternalURL = (url: string) => {
  const regex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/;
  if (regex.test(url)) {
    return url;
  }
  return 'https://' + url;
};
