import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';

import ApplicationRoot from './ApplicationRoot';

import { store, persistor } from 'Redux';

const Application = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ApplicationRoot />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default Application;
