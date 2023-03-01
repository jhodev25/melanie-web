import { combineReducers, configureStore } from '@reduxjs/toolkit';

import type { PreloadedState } from '@reduxjs/toolkit';

const reducer = combineReducers({});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
