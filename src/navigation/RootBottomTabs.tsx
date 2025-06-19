import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/root-bottom-tabs/HomeScreen';
import ProfileScreen from '../screens/root-bottom-tabs/ProfileScreen';
import Icon from '@react-native-vector-icons/fontawesome6';

const RootBottomTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: () => (
          <Icon name="house" size={24} color="black" iconStyle="solid" />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarIcon: () => (
          <Icon name="user" size={24} color="black" iconStyle="solid" />
        ),
      },
    },
  },
});

export default RootBottomTabs; 
