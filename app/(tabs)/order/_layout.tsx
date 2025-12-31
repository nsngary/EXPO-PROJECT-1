import React from 'react'
import { Stack } from 'expo-router'

const OrderStackLayout = () => {
  return (
    <Stack screenOptions={{
      headerTitleStyle:{
        fontFamily: 'NotoSerifTC_400Regular',
        fontWeight: '600',
      }
    }}>
      <Stack.Screen name="index" options={{ title: '線上訂購' }} />
      <Stack.Screen name="purchase-history" options={{ title: '消費紀錄' }} />
      <Stack.Screen name="purchase" options={{ title: '產品購買' }} />
    </Stack>
  )
}

export default OrderStackLayout
