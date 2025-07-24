import Api from 'Api';

import { transient } from 'Reducers';
import { dataFormatter } from 'Helpers';

const setLoading = ({ next, options, isLoading }) => {
  if (!options.key) return;
  // the value can be an id, it defaults to true if not specified
  const value = isLoading ? options.value || true : false;
  next({
    type: transient.actions.updateProps.type,
    payload: { [options.key]: value },
  });
};

const apiMiddleware = () => {
  return next => action => {
    const { type, actions = {}, promise, ...rest } = action;

    if (type !== Api.API_CALL) {
      return next(action);
    }

    const { success, load = { key: 'processing' }, fail } = actions;

    setLoading({ next, options: load, isLoading: true });

    return promise
      .then(payload => {
        if (success && success.type) {
          if (payload.data !== '' && payload.data.data) {
            const result = dataFormatter.deserialize(payload.data);
            return next({ ...rest, payload: result, ...success });
          } else {
            return next({ ...rest, payload: payload?.data, ...success });
          }
        }
      })
      .catch(error => {
        const response = error?.response;

        if (error?._handled) {
          return;
        }

        if (fail && fail.type) {
          return next({
            ...rest,
            ...response,
            error,
            ...fail,
          });
        }
      })
      .finally(setLoading.bind(null, { next, options: load, isLoading: false }));
  };
};

export default apiMiddleware;
