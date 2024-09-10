import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavRoutes from '../NavRoutes';
import NavConfigs from '../NavConfigs';
import DrawerContent from './DrawerContent';
import Tabs from '../Tabs';

const Drawer = createDrawerNavigator();

export default function LODrawer() {
  return (
    <Drawer.Navigator
      screenOptions={NavConfigs.drawerOptions}
      drawerContent={p => <DrawerContent {...p} />}>
      <Drawer.Screen name={NavRoutes.Drawer} component={Tabs} />
    </Drawer.Navigator>
  );
}
