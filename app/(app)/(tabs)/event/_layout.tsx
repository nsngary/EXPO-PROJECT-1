import React from 'react'
import { Stack } from 'expo-router'
import { useTheme } from '@react-navigation/native'

const EventStackLayout = () => {
  const { colors } = useTheme()

  return (
    <Stack screenOptions={{
      contentStyle: { backgroundColor: colors.background },
      headerTitleStyle:{
        fontFamily: 'NotoSerifTC_600SemiBold',
        // fontWeight: '600',
      }
    }}>
      <Stack.Screen name="index" options={{ title: '行事曆' }} />
      <Stack.Screen name="event-signup" options={{ title: '活動報名' }} />
      <Stack.Screen name="event-check-in" options={{ title: '簽到' }} />
    </Stack>
  )
}

export default EventStackLayout
