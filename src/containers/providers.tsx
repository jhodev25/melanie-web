import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { setupStore } from 'redux/store';

interface Props {
  children: JSX.Element;
}
export const Providers = ({ children }: Props) => {
  return (
    <Provider store={setupStore()}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
