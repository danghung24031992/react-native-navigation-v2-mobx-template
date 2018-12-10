// screens.js

import {Navigation} from 'react-native-navigation';

export function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponentWithRedux('Home', () => require('./Home').default,Provider, store);
  Navigation.registerComponent('Initializing', (sc) => require('./Initializing').default);
  Navigation.registerComponentWithRedux('SignIn', () => require('./SignIn').default,Provider, store);
  Navigation.registerComponentWithRedux('SignUp', () => require('./SignUp').default,Provider, store);
  Navigation.registerComponentWithRedux('Screen2', () => require('./Screen2').default,Provider,store );
}