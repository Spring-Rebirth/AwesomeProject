import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/root-bottom-tabs/HomeScreen';
import ProfileScreen from '../screens/root-bottom-tabs/ProfileScreen';
import Icon from '@react-native-vector-icons/fontawesome6';

const Tab = createBottomTabNavigator();

const HomeTabIcon = (props: { focused: boolean, color: string, size: number }) => (
    <Icon name="house" iconStyle='solid' color={props.color} size={props.size} />
);

const ProfileTabIcon = (props: { focused: boolean, color: string, size: number }) => (
    <Icon name="user" iconStyle='solid' color={props.color} size={props.size} />
);

function RootBottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: HomeTabIcon
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ProfileTabIcon
                }}
            />
        </Tab.Navigator>
    );
}

export default RootBottomTabs;
