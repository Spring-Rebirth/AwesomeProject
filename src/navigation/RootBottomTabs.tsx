import React from 'react';
import { createBottomTabNavigator, BottomTabBar, type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/root-bottom-tabs/HomeScreen';
import ProfileScreen from '@/screens/root-bottom-tabs/ProfileScreen';
import Icon from '@react-native-vector-icons/fontawesome6';
import type { HeaderBackButtonProps } from '@react-navigation/elements';
import Animated from 'react-native-reanimated';
import { Pressable } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

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

const HeaderLeftView = (_: HeaderBackButtonProps) => {
    const navigation = useNavigation<NavigationProp<any> & DrawerNavigationProp<any>>(); // 修改这一行
    return (
        <Pressable onPress={() => navigation.openDrawer()}>
            <Animated.Image
                source={require('../assets/logo.jpg')}
                className='w-8 h-8 rounded-full ml-4' // 将 p-2 ml-2 的样式合并到这里
                resizeMode='contain'
                sharedTransitionTag="user-avatar" // 3. 添加这个 Tag
            />
        </Pressable>
    );
}

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
                    tabBarIcon: ProfileTabIcon,
                    headerStyle: {
                        backgroundColor: 'orange'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 22,
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default RootBottomTabs;
