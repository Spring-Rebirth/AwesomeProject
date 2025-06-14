import './global.css';
import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { supabase } from './src/lib/supabase';
import AuthScreen from './src/screens/AuthScreen';

function useIsSignedIn() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // 检查当前会话
    supabase.auth.getSession().then(({ data }) => {
      setIsSignedIn(!!data.session);
      setLoading(false);
    });

    // 监听认证状态变化
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsSignedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { isSignedIn, loading };
}

export default function App() {
  const { isSignedIn, loading } = useIsSignedIn();

  // 如果还在加载中，可以显示一个加载屏幕
  if (loading) {
    return null; // 或者返回一个加载组件
  }

  const RootStack = createNativeStackNavigator({
    screens: {
      ...(isSignedIn ? {
        Home: HomeScreen,
      } : {
        Auth: AuthScreen,
      })
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />;
}