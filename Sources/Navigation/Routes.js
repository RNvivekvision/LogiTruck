import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import { Home, Login, Otp, RegistrationType } from '../Screens';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={NavConfigs.screenOptions}>
        {/* Auth */}
        <Screen name={NavRoutes.Login} component={Login} />
        <Screen name={NavRoutes.Otp} component={Otp} />
        <Screen
          name={NavRoutes.RegistrationType}
          component={RegistrationType}
        />

        {/* App */}
        <Screen name={NavRoutes.Home} component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
