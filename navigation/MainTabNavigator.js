import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
);

HomeStack.navigationOptions = {
  header:null
};

HomeStack.path = '';


const tabNavigator = createStackNavigator({
  HomeStack,
});
tabNavigator.path = '';
export default tabNavigator;
