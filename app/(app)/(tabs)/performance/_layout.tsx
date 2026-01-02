import React from 'react'
import { Stack } from 'expo-router'
import { useTheme } from '@react-navigation/native'

const PerformanceStackLayout = () => {
  const { colors } = useTheme()

  return (
    <Stack screenOptions={{
      contentStyle: { backgroundColor: colors.background },
      headerTitleStyle:{
        fontFamily: 'NotoSerifTC_600SemiBold',
        // fontWeight: '600',
      }
    }}>
      <Stack.Screen name="index" options={{ title: '業績查詢' }} />
      <Stack.Screen name="tree-performance" options={{ title: '樹狀業績查詢' }} />
      <Stack.Screen name="bonus-details" options={{ title: '獎金明細' }} />
    </Stack>
  )
}

export default PerformanceStackLayout
