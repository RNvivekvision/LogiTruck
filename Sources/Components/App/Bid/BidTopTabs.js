import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavConfigs, NavRoutes } from '../../../Navigation';
import BidActive from './BidActive';
import BidReoffer from './BidReoffer';
import BidWin from './BidWin';
import BidLose from './BidLose';

const { Navigator, Screen } = createMaterialTopTabNavigator();

export default function BidTopTabs() {
  return (
    <Navigator screenOptions={NavConfigs.topTabConfig}>
      <Screen name={NavRoutes.Active} component={BidActive} />
      <Screen name={NavRoutes.Reoffer} component={BidReoffer} />
      <Screen name={NavRoutes.Win} component={BidWin} />
      <Screen name={NavRoutes.Lose} component={BidLose} />
    </Navigator>
  );
}
