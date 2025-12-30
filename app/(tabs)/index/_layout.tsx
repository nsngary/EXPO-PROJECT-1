import React from 'react'
import { Stack } from 'expo-router'

const HomeStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: '最新消息' }} />
      <Stack.Screen name="gift-box" options={{ title: '禮物箱' }} />
      <Stack.Screen name="daily-check-in" options={{ title: '每日簽到' }} />
    </Stack>
  )
}

export default HomeStackLayout
