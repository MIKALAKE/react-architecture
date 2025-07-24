import { call, put } from 'redux-saga/effects';

import Api from 'Api';
import { transient } from 'Reducers';

export const rehydrate = function* ({ payload }) {
  if (payload?.application?.session) {
    yield call(Api.setToken, payload.user.token);
  }
};

export const apiError = function* () {
  yield put({
    type: transient.actions.updateProps.type,
    payload: {
      message: 'Error',
    },
  });
};
