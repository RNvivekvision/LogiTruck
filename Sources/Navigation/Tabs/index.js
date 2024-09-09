import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Bid, Orders, Setting } from '../../Screens';
import NavRoutes from '../NavRoutes';
import NavConfigs from '../NavConfigs';
import TabBar from './TabBar';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Navigator
      screenOptions={NavConfigs.screenOptions}
      tabBar={p => <TabBar {...p} />}>
      <Screen name={NavRoutes.BottomTabs} component={Home} />
      <Screen name={NavRoutes.Bid} component={Bid} />
      <Screen name={NavRoutes.Orders} component={Orders} />
      <Screen name={NavRoutes.Setting} component={Setting} />
    </Navigator>
  );
}
