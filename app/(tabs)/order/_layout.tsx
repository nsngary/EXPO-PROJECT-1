import React from 'react'
import { Stack } from 'expo-router'

const OrderStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: '線上訂購' }} />
      <Stack.Screen name="purchase-history" options={{ title: '消費紀錄' }} />
    </Stack>
  )
}

export default OrderStackLayout
