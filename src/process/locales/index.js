import I18n from 'i18next';

import rs from './rs';
import hu from './hu';

I18n.init({
  resources: {
    rs,
    hu,
  },
  lng: localStorage.getItem('language'),
  fallbackLng: 'rs',
  whitelist: ['rs'],
});

export default I18n;
