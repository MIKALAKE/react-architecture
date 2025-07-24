import { all } from 'redux-saga/effects';

// SAGAS

import applicationWatchers from './application';

export default function* root() {
  yield all([...applicationWatchers]);
}
