import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import ScreenView from './components/ScreenView';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <ScreenView>
      <Routes />
    </ScreenView>
  </Provider>
);

export default App;
