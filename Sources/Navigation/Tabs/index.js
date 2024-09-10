import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Bid, Orders, Setting } from '../../Screens';
import NavRoutes from '../NavRoutes';
import NavConfigs from '../NavConfigs';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={NavConfigs.screenOptions}
      tabBar={p => <TabBar {...p} />}>
      <Tab.Screen name={NavRoutes.BottomTabs} component={Home} />
      <Tab.Screen name={NavRoutes.Bid} component={Bid} />
      <Tab.Screen name={NavRoutes.Orders} component={Orders} />
      <Tab.Screen name={NavRoutes.Setting} component={Setting} />
    </Tab.Navigator>
  );
}
