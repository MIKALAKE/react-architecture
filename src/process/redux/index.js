import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import Api from 'Api';
import sagas from 'Sagas';
import { application, transient } from 'Reducers';

import apiMiddleware from './apiMiddleware';

const logger = createLogger({
  collapsed: true,
});

const persistConfig = {
  key: 'react-arch',
  storage,
  timeout: null,
  blacklist: ['transient'],
};

let sagaMiddleware = createSagaMiddleware();

const middleware = [apiMiddleware, sagaMiddleware, logger];

const reducer = combineReducers({
  [application.name]: application.reducer,
  [transient.name]: transient.reducer,
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});
sagaMiddleware.run(sagas);

const rehydrate = () => {
  store.dispatch(application.actions.rehydrated());
  Api.dispatch = store.dispatch;
};

const persistor = persistStore(store, {}, rehydrate);

export { store, persistor };
