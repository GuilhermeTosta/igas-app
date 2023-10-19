import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Promocoes from '../screens/Promocoes';
import Buscar from '../screens/Buscar';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const MainTab = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Promocoes" component={Promocoes} />
    <Tab.Screen name="Buscar" component={Buscar} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default MainTab;
