import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './Drawer';
import NavConfigs from './NavConfigs';
import NavRoutes from './NavRoutes';
import {
  AboutUs,
  AddBankDetails,
  AddBid,
  AddLicense,
  AddService,
  AddVehical,
  ContactUs,
  HelpFeedback,
  Login,
  Otp,
  Profile,
  RegistrationType,
} from '../Screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NavConfigs.screenOptions}>
        {/* Auth */}
        {/* <Stack.Screen name={NavRoutes.Login} component={Login} />
        <Stack.Screen name={NavRoutes.Otp} component={Otp} />
        <Stack.Screen
          name={NavRoutes.RegistrationType}
          component={RegistrationType}
        /> */}

        {/* App */}
        <Stack.Screen name={NavRoutes.Home} component={Drawer} />
        <Stack.Screen name={NavRoutes.Profile} component={Profile} />
        <Stack.Screen name={NavRoutes.AddBid} component={AddBid} />
        <Stack.Screen name={NavRoutes.AddVehical} component={AddVehical} />
        <Stack.Screen name={NavRoutes.AddLicense} component={AddLicense} />
        <Stack.Screen name={NavRoutes.AddService} component={AddService} />
        <Stack.Screen
          name={NavRoutes.AddBankDetails}
          component={AddBankDetails}
        />
        <Stack.Screen name={NavRoutes.AboutUs} component={AboutUs} />
        <Stack.Screen name={NavRoutes.ContactUs} component={ContactUs} />
        <Stack.Screen name={NavRoutes.HelpFeedback} component={HelpFeedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
