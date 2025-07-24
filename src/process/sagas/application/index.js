import { REHYDRATE } from 'redux-persist';
import { takeLatest } from 'redux-saga/effects';

import { application } from 'Reducers';

import { apiError, rehydrate } from './actions';

export default [
  takeLatest(REHYDRATE, rehydrate),
  takeLatest(application.actions.apiError.type, apiError),
];
