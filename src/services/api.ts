import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { Server } from '../const';
import { getToken } from './token';
import { processErrorHandle } from './process-error-handle';
import { ErrorMessageType } from '../type';

const StatusCodeMapping: Record<number, boolean> = {
  // [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const getDisplayError = (response: AxiosResponse) => !StatusCodeMapping[response.status];

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: Server.Url,
    timeout: Server.Timeout
  });

  api.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorMessageType>) => {
      if (error.response && getDisplayError(error.response)) {
        const errorMessage = (error.response.data);

        processErrorHandle(errorMessage.message);
      }

      throw error;
    }
  );

  return api;
};

export { createAPI };
