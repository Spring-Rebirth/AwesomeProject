import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
} from 'react-native-reanimated';
import { useEffect } from 'react';

function HomeScreen() {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(50);
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [{ translateY: translateY.value }, { scale: scale.value }],
        };
    });

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 700 });
        translateY.value = withSpring(0);
    }, [opacity, translateY]);

    const onPressIn = () => {
        scale.value = withSpring(0.85);
    };

    const onPressOut = () => {
        scale.value = withSpring(1);
    };

    return (
        <View className="flex-1 bg-gray-50 items-center justify-center">
            <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
                <Animated.View
                    style={animatedStyle}
                    className="w-48 bg-white rounded-2xl p-4 shadow-sm items-center"
                >
                    <Icon name="stats-chart-outline" size={40} color="#10b981" />
                    <Text className="text-lg font-semibold text-gray-800 mt-2">
                        Analytics
                    </Text>
                    <Text className="text-sm text-gray-500 text-center">
                        Check your stats
                    </Text>
                </Animated.View>
            </Pressable>
        </View>
    );
}

export default HomeScreen;
