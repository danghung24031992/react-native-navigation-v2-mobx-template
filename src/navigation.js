// navigation.js
import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'SignIn',
            options: {
              bottomTab: {
                text: 'Sign In',
                icon: require('./signin.png'),
                selectedFontSize:12
              }
            }
          },
        },
        {
          component: {
            name: 'SignUp',
            options: {
              bottomTab: {
                text: 'Sign Up',
                icon: require('./signup.png'),
                selectedFontSize:12,
              }
            }
          },
        },
      ],
      options: {
        bottomTabs: {
            tabColor: 'blue',
            titleDisplayMode: 'alwaysShow',
            selectedTabColor: 'yellow',
            fontFamily: 'HelveticaNeue-Italic',
            fontSize: 12,
            animate:false,
            visible:true,
        }
      }
    },
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'Home',
          }
        }
    ],
    }
  }
})