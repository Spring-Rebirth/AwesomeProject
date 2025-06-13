/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './global.css';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, useColorScheme, View, Text } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text className="text-3xl font-bold text-blue-600 mb-4">
        NativeWind 安装成功！
      </Text>
      <View className="bg-gray-100 p-4 rounded-lg">
        <Text className="text-lg text-gray-800">
          这是使用 Tailwind CSS 样式的文本
        </Text>
      </View>
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}

export default App;
