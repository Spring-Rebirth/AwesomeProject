import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../lib/supabase';

function HomeScreen() {
  const handleLogout = async () => {
    try {
      Alert.alert(
        '确认退出',
        '您确定要退出登录吗？',
        [
          {
            text: '取消',
            style: 'cancel',
          },
          {
            text: '退出',
            style: 'destructive',
            onPress: async () => {
              const { error } = await supabase.auth.signOut();
              if (error) {
                Alert.alert('错误', '退出登录失败: ' + error.message);
              } else {
                Alert.alert('成功', '已成功退出登录');
              }
            },
          },
        ],
      );
    } catch (error) {
      Alert.alert('错误', '退出登录时发生错误');
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-50 px-6">
      {/* 欢迎标题 */}
      <View className="items-center mb-8">
        <Text className="text-3xl font-bold text-gray-800 mb-2">
          欢迎回来！
        </Text>
        <Text className="text-lg text-gray-600 text-center">
          您已成功登录到应用
        </Text>
      </View>

      {/* 主页内容区域 */}
      <View className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-sm mb-6">
        <Text className="text-xl font-semibold text-gray-800 text-center mb-4">
          主页
        </Text>
        <Text className="text-gray-600 text-center leading-6">
          这里是您的主页内容，您可以在这里查看和管理您的信息。
        </Text>
      </View>

      {/* 退出登录按钮 */}
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-500 hover:bg-red-600 active:bg-red-700 px-8 py-4 rounded-xl shadow-md w-full max-w-sm"
        activeOpacity={0.8}
      >
        <Text className="text-white text-lg font-semibold text-center">
          退出登录
        </Text>
      </TouchableOpacity>

      {/* 底部装饰 */}
      <View className="mt-8 opacity-60">
        <Text className="text-gray-400 text-sm text-center">
          点击退出登录按钮安全退出应用
        </Text>
      </View>
    </View>
  );
}

export default HomeScreen;