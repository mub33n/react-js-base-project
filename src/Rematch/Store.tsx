import { init } from '@rematch/core';
import { persistStore } from 'redux-persist';
import createRematchPersist from '@rematch/persist';
import selectPlugin from '@rematch/select';
import storageSession from 'redux-persist/es/storage/session';
import { models } from './Models/RootModel';

const persist = createRematchPersist({
  key: 'root',
  storage: storageSession,
  throttle: 2500,
  version: 2,
  timeout: 2500,
  whitelist: ['User'], // Add models here of what needs persisting
});

export const store = init({
  models,
  plugins: [persist, selectPlugin()],
});

export type Store = typeof store;

export const persistor = persistStore(store);
