import React from 'react'
import { Stack } from 'expo-router'

const EventStackLayout = () => {
  return (
    <Stack screenOptions={{
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
