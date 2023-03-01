import { Providers } from './containers/providers';
import { RouteContainer } from './containers/route-container';
import './index.css';

const App = () => {
  return (
    <Providers>
      <RouteContainer />
    </Providers>
  );
};

export default App;
