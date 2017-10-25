import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen, { screenKey as loginScreenKey } from './screens/LoginScreen';

const Routes = () => (
  <Router>
    <Scene key="app_root">
      <Scene key={loginScreenKey} component={LoginScreen} hideNavBar />
    </Scene>
  </Router>
);

export default Routes;
