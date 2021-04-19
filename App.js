import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}
const sn = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  Drawer:{screen:AppDrawerNavigator},
})
const AppContainer = createAppContainer(sn);