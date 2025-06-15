import React from 'react';
import { View, Text, Image, Animated } from 'react-native';

function SplashScreen() {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Animated.View
        className="items-center justify-center"
        style={{ opacity: fadeAnim }}
      >
        <Image
          source={require('../assets/logo.jpg')}
          className="w-36 h-36 mb-5"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold text-gray-800 mb-2">
          欢迎使用
        </Text>
        <Text className="text-lg text-gray-600 text-center">
          您的个人应用
        </Text>
      </Animated.View>
    </View>
  );
}

export default SplashScreen;