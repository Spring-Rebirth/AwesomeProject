import './global.css';
import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import { useIsSignedIn, useIsSignedOut, useAuthState } from './src/hooks/auth';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const { loading } = useAuthState();

  // 如果还在加载中，可以显示一个加载屏幕
  if (loading) {
    return <SplashScreen />;
  }

  const RootStack = createNativeStackNavigator({
    screens: {
      Home: {
        if: useIsSignedIn,
        screen: HomeScreen,
      },
      Auth: {
        if: useIsSignedOut,
        screen: AuthScreen,
      },
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />;
}