// index.js
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';
import Provider       from './src/MobxRnnProvider';
import Stores         from './src/stores';

registerScreens(Stores,Provider);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  });
});
