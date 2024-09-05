import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import { Login, Otp } from '../Screens';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={NavConfigs.screenOptions}>
        {/* Auth */}
        <Screen name={NavRoutes.Login} component={Login} />
        <Screen name={NavRoutes.Otp} component={Otp} />

        {/* App */}
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
