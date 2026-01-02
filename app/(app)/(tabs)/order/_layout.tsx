import React from 'react'
import { Stack } from 'expo-router'
import { useTheme } from '@react-navigation/native'

const OrderStackLayout = () => {
  const { colors } = useTheme()

  return (
    <Stack screenOptions={{
      contentStyle: { backgroundColor: colors.background },
      headerTitleStyle:{
        fontFamily: 'NotoSerifTC_600SemiBold',
        // fontWeight: '600',
      }
    }}>
      <Stack.Screen name="index" options={{ title: '線上訂購' }} />
      <Stack.Screen name="purchase-history" options={{ title: '消費紀錄' }} />
      <Stack.Screen name="purchase" options={{ title: '產品購買' }} />
    </Stack>
  )
}

export default OrderStackLayout
