import './global.css';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen';
import RootBottomTabs from './src/navigation/RootBottomTabs';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator initialRouteName='Auth'>
            <Stack.Screen name='Auth' component={AuthScreen} />
            <Stack.Screen name='RootBottomTabs' component={RootBottomTabs} />
        </Stack.Navigator>
    );
}

export default function App() {

    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}