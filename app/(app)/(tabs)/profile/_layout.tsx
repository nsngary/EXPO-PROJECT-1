import React from 'react'
import { Stack } from 'expo-router'
import { useTheme } from '@react-navigation/native'

const ProfileStackLayout = () => {
  const { colors } = useTheme()

  return (
    <Stack screenOptions={{
      contentStyle: { backgroundColor: colors.background },
      headerTitleStyle:{
        fontFamily: 'NotoSerifTC_600SemiBold',
        // fontWeight: '600',
      }
    }}>
      <Stack.Screen name="index" options={{ title: '個人', headerShown: true }} />
      <Stack.Screen name="vip-info" options={{ title: 'VIP 資料' }} />
      <Stack.Screen name="vic-info" options={{ title: 'VIC 資料' }} />
      <Stack.Screen name="form-center" options={{ title: '表單中心' }} />
      <Stack.Screen name="product-certificates" options={{ title: '產品檢驗文件' }} />
      <Stack.Screen name="testimonials" options={{ title: '見證體驗' }} />
      <Stack.Screen name="settings" options={{ title: '設定' }} />
      <Stack.Screen name="logout" options={{ title: '登出' }} />
    </Stack>
  )
}

export default ProfileStackLayout
