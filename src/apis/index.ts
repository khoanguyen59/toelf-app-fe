import {
  removeFromCookie,
  removeFromStorage,
  retrieveFromCookie,
  retrieveFromStorage,
} from '@/utils/storage.util';
import { handleResponseError } from '@utils/api.utils';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validateTokenUrl = 'users/check-token';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use((config: any) => {
  const token =
    retrieveFromStorage('accessToken') || retrieveFromCookie('accessToken');
  if (!!token && !config.url.includes('users/login')) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  async (error: AxiosError) => {
    const isOnline = navigator.onLine;
    if (!isOnline) {
      return Promise.resolve();
    }
    //Remove all toasts !
    toast.dismiss();

    if (!error.response) {
      toast.error('Unknown error happened!');
      return handleResponseError(error);
    }

    const { data } = error.response;
    // const { detailError } = data;

    let messageDetail = '';

    if (error.response.status === 403) {
      removeFromStorage('accessToken');
      removeFromCookie('accessToken');
      if (!window.location.pathname.includes('login')) {
        window.location.replace('/');
      }
    }

    // if (detailError) {
    //   if (Array.isArray(detailError.message)) {
    //     messageDetail = detailError.message[0];
    //   } else {
    //     messageDetail = detailError.message;
    //   }
    // } else {
    //   messageDetail = data.message;
    // }

    if (error.response.config.url === validateTokenUrl) {
      removeFromStorage('accessToken');
      removeFromCookie('accessToken');
      removeFromStorage('refreshToken');
      removeFromCookie('refreshToken');
      window.location.replace('/');
    }

    toast.error(messageDetail);

    const originalConfig = error.config;
    // if (
    //   error.response &&
    //   error.response.status === 401 &&
    //   originalConfig.url &&
    //   originalConfig.url.includes('users/login')
    // ) {
    //   return handleResponseError(error, messageDetail);
    // }

    return handleResponseError(error, messageDetail);
  }
);

export default axiosInstance;
