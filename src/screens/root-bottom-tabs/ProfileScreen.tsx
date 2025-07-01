import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { supabase } from '../../lib/supabase';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }: any) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const {
                    data: { user },
                } = await supabase.auth.getUser();
                setUser(user);
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigation.reset({
            index: 0,
            routes: [{ name: 'Auth' }]
        })
    };

    const getUsername = (email: string | undefined) => {
        if (!email) return 'Anonymous';
        return email.split('@')[0];
    };

    const getJoinedDate = (createdAt: string | undefined) => {
        if (!createdAt) return '';
        return new Date(createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50">
                <ActivityIndicator size="large" color="#3b82f6" />
            </View>
        );
    }

    return (
        <View className="flex-1 bg-gray-50 p-6">
            {user ? (
                <View className="flex-1 items-center mt-10">
                    <View className="w-32 h-32 rounded-full bg-gray-200 items-center justify-center mb-6">
                        <Icon name="person-outline" size={80} color="#6b7280" />
                    </View>
                    <Text className="text-3xl font-bold text-gray-800">
                        {getUsername(user.email)}
                    </Text>
                    <Text className="text-md text-gray-500 mt-1">{user.email}</Text>

                    <View className="w-full bg-white rounded-2xl shadow-sm p-6 mt-10">
                        <View className="flex-row items-center mb-4">
                            <Icon name="calendar-outline" size={24} color="#6b7280" />
                            <Text className="text-gray-700 ml-4">Joined</Text>
                            <Text className="text-gray-900 font-semibold ml-auto">
                                {getJoinedDate(user.created_at)}
                            </Text>
                        </View>
                        <View className="w-full h-px bg-gray-200 my-2" />
                        <View className="flex-row items-center">
                            <Icon name="mail-outline" size={24} color="#6b7280" />
                            <Text className="text-gray-700 ml-4">Email</Text>
                            <Text className="text-gray-900 font-semibold ml-auto">
                                {user.email}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={handleLogout}
                        className="w-full bg-red-500 rounded-xl py-4 flex-row justify-center items-center mt-10"
                    >
                        <Icon name="log-out-outline" size={22} color="white" />
                        <Text className="text-white text-lg font-semibold ml-2">
                            Sign Out
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View className="flex-1 justify-center items-center">
                    <Text className="text-lg text-gray-600">
                        You are not logged in.
                    </Text>
                </View>
            )}
        </View>
    );
}
