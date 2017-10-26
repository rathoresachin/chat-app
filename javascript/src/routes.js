import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen, { screenKey as loginScreenKey } from './screens/LoginScreen';
import ChatListScreen, { screenKey as chatListScreenKey } from './screens/ChatListScreen';

const Routes = () => (
  <Router>
    <Scene key="app_root">
      <Scene key={loginScreenKey} component={LoginScreen} hideNavBar />
      <Scene key={chatListScreenKey} component={ChatListScreen} hideNavBar />
    </Scene>
  </Router>
);

export default Routes;
