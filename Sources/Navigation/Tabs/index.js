import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Wardrobe, OOTD } from '../../Screens';
import NavRoutes from '../NavRoutes';
import NavConfigs from '../NavConfigs';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={NavConfigs.screenOptions}
      tabBar={p => <TabBar {...p} />}>
      <Tab.Screen name={NavRoutes.Tabs} component={Home} />
      <Tab.Screen name={NavRoutes.Wardrobe} component={Wardrobe} />
      <Tab.Screen name={NavRoutes.OOTD} component={OOTD} />
    </Tab.Navigator>
  );
}
