import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Welcome from './pages/Welcome';
import Repositories from './pages/Repositories';
import Organizations from './pages/Organizations';

import { color } from './styles';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator({
    Welcome,
    User: createBottomTabNavigator({
      Repositories,
      Organizations,
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: color.white,
        inactiveTintColor: color.whiteTransparent,
        style: {
          backgroundColor: color.secundary,
        },
      },
    }),
  },
  {
    initialRouteName: (userLogged ? 'User' : 'Welcome'),
  }),
);

export default Routes;
