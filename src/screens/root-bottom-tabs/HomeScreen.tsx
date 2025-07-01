import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';

function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-blue-500 p-8 rounded-3xl shadow-lg mx-2 mt-4">
        <Text className="text-3xl font-bold text-white mt-4">Welcome Back!</Text>
        <Text className="text-lg text-white/80 mt-1">
          Here's what's happening today.
        </Text>
      </View>

      {/* Features Grid */}
      <View className="p-6">
        <Text className="text-xl font-bold text-gray-700 mb-4">Quick Actions</Text>
        <View className="flex-row flex-wrap justify-between">
          {/* Feature Card 1 */}
          <View className="w-[48%] bg-white rounded-2xl p-4 shadow-sm mb-4 items-center">
            <Icon name="person-circle-outline" size={40} color="#3b82f6" />
            <Text className="text-lg font-semibold text-gray-800 mt-2">
              Profile
            </Text>
            <Text className="text-sm text-gray-500 text-center">
              View your profile
            </Text>
          </View>

          {/* Feature Card 2 */}
          <View className="w-[48%] bg-white rounded-2xl p-4 shadow-sm mb-4 items-center">
            <Icon name="stats-chart-outline" size={40} color="#10b981" />
            <Text className="text-lg font-semibold text-gray-800 mt-2">
              Analytics
            </Text>
            <Text className="text-sm text-gray-500 text-center">
              Check your stats
            </Text>
          </View>

          {/* Feature Card 3 */}
          <View className="w-[48%] bg-white rounded-2xl p-4 shadow-sm items-center">
            <Icon name="settings-outline" size={40} color="#f97316" />
            <Text className="text-lg font-semibold text-gray-800 mt-2">
              Settings
            </Text>
            <Text className="text-sm text-gray-500 text-center">
              App settings
            </Text>
          </View>

          {/* Feature Card 4 */}
          <View className="w-[48%] bg-white rounded-2xl p-4 shadow-sm items-center">
            <Icon name="notifications-outline" size={40} color="#ef4444" />
            <Text className="text-lg font-semibold text-gray-800 mt-2">
              Updates
            </Text>
            <Text className="text-sm text-gray-500 text-center">
              See what's new
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
