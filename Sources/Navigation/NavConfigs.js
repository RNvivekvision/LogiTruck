import { TransitionPresets } from '@react-navigation/stack';
import { Colors, FontFamily } from '../Theme';
const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};
const topTabConfig = {
  ...screenOptions,
  tabBarLabelStyle: { fontFamily: FontFamily.SemiBold },
  tabBarActiveTintColor: Colors.primary,
  tabBarInactiveTintColor: Colors.primary + '40',
  tabBarIndicatorStyle: { backgroundColor: Colors.primary },
};
const drawerOptions = {
  ...screenOptions,
  drawerType: 'front',
  drawerStyle: {
    width: '75%',
  },
};
const NavConfigs = { screenOptions, topTabConfig, drawerOptions };
export default NavConfigs;
