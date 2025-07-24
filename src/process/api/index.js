import axios from 'axios';

import { application } from 'Reducers';

let TOKEN = null;
let REFRESH_TOKEN = null;

const api = axios.create({
  //TODO Replace with your actual base URL
  baseURL: 'http://localhost:3000',
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const defaultConfig = {
  internal: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const interceptors = {
  config: config => {
    if (TOKEN && config.internal) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
    }

    return config;
  },
  useRequestError: async error => error,
  responseSuccess: async response => response,
  responseError: async error => {
    return Promise.reject(error?.response?.data);
  },
  useResponseError: async error => {
    if (
      [401].includes(error.response?.status) &&
      error.response.config?.url !== '/api/auth/login'
    ) {
      Api.dispatch(application.actions.sessionExpired());
      return Promise.reject({ _handled: true });
    } else {
      return Promise.reject({ ...error.response?.data });
    }
  },
};

api.interceptors.request.use(interceptors.config, interceptors.useRequestError);
api.interceptors.response.use(
  interceptors.responseSuccess,
  interceptors.useResponseError,
);

const Api = {
  API_CALL: 'API_CALL',
  API_ERROR: 'API_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',

  catchError: error => error,

  clearSessionAction: () => (TOKEN = null),

  dispatch: () => {},

  getToken: () => TOKEN,

  getRefreshToken: () => REFRESH_TOKEN,

  setToken(token) {
    if (token) {
      TOKEN = token;
    } else {
      TOKEN = null;
    }
  },

  get(path, params = {}, config = defaultConfig) {
    const request = api.get(path, { ...config, params });
    request.catch(Api.catchError);
    return request;
  },

  post(path, body, config = defaultConfig) {
    const request = api.post(path, body, { ...defaultConfig, ...config });
    request.catch(Api.catchError);
    return request;
  },

  put(path, body, config = defaultConfig) {
    const request = api.put(path, body, config);
    request.catch(Api.catchError);
    return request;
  },

  patch(path, body, config = defaultConfig) {
    const request = api.patch(path, body, config);
    request.catch(Api.catchError);
    return request;
  },

  delete(path, config = defaultConfig) {
    const request = api.delete(path, config);
    request.catch(Api.catchError);
    return request;
  },
};

export default Api;
