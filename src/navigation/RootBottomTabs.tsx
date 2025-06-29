import React from 'react';
import { createBottomTabNavigator, BottomTabBar, type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/root-bottom-tabs/HomeScreen';
import ProfileScreen from '@/screens/root-bottom-tabs/ProfileScreen';
import Icon from '@react-native-vector-icons/fontawesome6';
import { Image, Pressable } from 'react-native';
import type { HeaderBackButtonProps } from '@react-navigation/elements';

const Tab = createBottomTabNavigator();

const TabBar = (props: BottomTabBarProps) => (
    <BottomTabBar {...props} />
);

const HomeTabIcon = (props: { focused: boolean, color: string, size: number }) => (
    <Icon name="house" iconStyle='solid' {...props} />
);

const ProfileTabIcon = (props: { focused: boolean, color: string, size: number }) => (
    <Icon name="user" iconStyle='solid' {...props} />
);

const HeaderLeftView = (_: HeaderBackButtonProps) => (
    <Pressable className='p-2 ml-2'>
        <Image
            source={require('../assets/logo.jpg')}
            className='w-8 h-8 rounded-full'
            resizeMode='contain'
        />
    </Pressable>
)

function RootBottomTabs() {
    return (
        <Tab.Navigator
            tabBar={TabBar}
            screenOptions={{
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'orange',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: HomeTabIcon,
                    headerLeft: HeaderLeftView,
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
