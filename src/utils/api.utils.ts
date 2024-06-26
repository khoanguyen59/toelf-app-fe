import { useLocation } from 'react-router-dom';
import { clone } from './object.utils';

export const handleResponseError = (
  error: any,
  messageDetail?: string
): Promise<any> => {
  return Promise.reject(messageDetail ?? error);
};

export const prepareGetQuery = (filter: Record<string, any>): string => {
  const keys = Object.keys(filter);
  const filterValues = keys
    .filter((key) => !!filter[key] || filter[key] === 0)
    .map((key) => {
      let filterKey = clone(filter[key]);
      if (typeof filterKey === 'object') {
        filterKey = encodeURIComponent(JSON.stringify(filterKey));
      }
      return `${key}=${filterKey}`;
    });

  const behind = filterValues.join('&');

  if (behind) return `?${behind}`;

  return '';
};

export const useQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
};

export const redirectToRoot = (): void => {
  window.location.replace('/');
};

export const isNorway = () => {
  return process.env.REACT_APP_REGION === 'norway';
};
