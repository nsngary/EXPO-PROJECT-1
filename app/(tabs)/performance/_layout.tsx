import React from 'react'
import { Stack } from 'expo-router'

const PerformanceStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: '業績查詢' }} />
      <Stack.Screen name="tree-performance" options={{ title: '樹狀業績查詢' }} />
      <Stack.Screen name="bonus-details" options={{ title: '獎金明細' }} />
    </Stack>
  )
}

export default PerformanceStackLayout
