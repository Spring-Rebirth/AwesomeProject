import React, { useState } from 'react'
import { Alert, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { supabase } from '../lib/supabase'

export default function AuthScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // 验证邮箱格式
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function signInWithEmail() {
    // 输入验证
    if (!email.trim()) {
      Alert.alert('请输入邮箱', '请输入您的邮箱地址以登录');
      return;
    }
    if (!password.trim()) {
      Alert.alert('请输入密码', '请输入您的密码以登录');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('邮箱格式错误', '请输入正确的邮箱地址格式');
      return;
    }

    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert('登录失败', error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    // 输入验证
    if (!email.trim()) {
      Alert.alert('请输入邮箱', '请在此页面输入要注册的邮箱地址和密码');
      return;
    }
    if (!password.trim()) {
      Alert.alert('请输入密码', '请在此页面输入要注册的密码');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('邮箱格式错误', '请输入正确的邮箱地址格式');
      return;
    }
    if (password.length < 6) {
      Alert.alert('密码太短', '密码长度至少需要6个字符');
      return;
    }

    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert('注册失败', error.message)
    if (!session) Alert.alert('验证邮件已发送', '请检查您的邮箱进行邮件验证！')
    setLoading(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        className="flex-1"
      >
        <View className="flex-1 justify-center px-6 py-12">
          {/* Header Section */}
          <View className="items-center mb-8">
            <View className="w-20 h-20 bg-blue-500 rounded-full items-center justify-center mb-6 shadow-lg">
              <Text className="text-white text-3xl font-bold">A</Text>
            </View>
            <Text className="text-3xl font-bold text-gray-800 mb-2">
              欢迎使用
            </Text>
            <Text className="text-lg text-gray-600 text-center">
              请登录您的账户或创建新账户
            </Text>
          </View>

          {/* Form Section */}
          <View className="bg-white rounded-2xl p-6 shadow-xl mx-2 mb-6">
            {/* Email Input */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-2">
                邮箱地址
              </Text>
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-base text-gray-800 focus:border-blue-500 focus:bg-white"
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="请输入您的邮箱"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                keyboardType="email-address"
                autoComplete="email"
              />
            </View>

            {/* Password Input */}
            <View className="mb-6">
              <Text className="text-sm font-medium text-gray-700 mb-2">
                密码
              </Text>
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-base text-gray-800 focus:border-blue-500 focus:bg-white"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                placeholder="请输入您的密码"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                autoComplete="password"
              />
            </View>

            {/* Sign In Button */}
            <TouchableOpacity
              className={`bg-blue-500 rounded-xl py-4 mb-4 shadow-md ${loading ? 'opacity-50' : 'active:bg-blue-600'}`}
              disabled={loading}
              onPress={signInWithEmail}
              activeOpacity={0.8}
            >
              <Text className="text-white text-lg font-semibold text-center">
                {loading ? '登录中...' : '登录'}
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center my-4">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="mx-4 text-gray-500 text-sm">或者</Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              className={`bg-white border-2 border-blue-500 rounded-xl py-4 shadow-sm ${loading ? 'opacity-50' : 'active:bg-blue-50'}`}
              disabled={loading}
              onPress={signUpWithEmail}
              activeOpacity={0.8}
            >
              <Text className="text-blue-500 text-lg font-semibold text-center">
                {loading ? '注册中...' : '创建新账户'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View className="items-center px-4">
            <Text className="text-gray-500 text-sm text-center leading-5">
              点击登录或注册即表示您同意我们的{'\n'}
              <Text className="text-blue-500 underline">服务条款</Text>
              {' '}和{' '}
              <Text className="text-blue-500 underline">隐私政策</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}