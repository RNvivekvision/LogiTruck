import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import Tabs from './Tabs';
import { Login, Otp, RegistrationType } from '../Screens';
import Drawer from './Drawer';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={NavConfigs.screenOptions}>
        {/* Auth */}
        {/* <Screen name={NavRoutes.Login} component={Login} />
        <Screen name={NavRoutes.Otp} component={Otp} />
        <Screen
          name={NavRoutes.RegistrationType}
          component={RegistrationType}
        /> */}

        {/* App */}
        <Screen name={NavRoutes.Home} component={Drawer} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
