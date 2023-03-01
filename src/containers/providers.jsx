import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { setupStore } from 'redux/store';

export const Providers = ({ children }) => {
  return (
    <Provider store={setupStore()}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
