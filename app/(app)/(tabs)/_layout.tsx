import React from 'react'
import { Tabs } from 'expo-router'
import { useTheme } from '@react-navigation/native'
import { TabBar } from '@/components/TabBar'

const TabLayout = () => {
  const { colors } = useTheme()

  return (
    <Tabs
      initialRouteName='home'
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneContainerStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen name='home' options={{ title: "首頁" }} />
      <Tabs.Screen name='performance' options={{ title: "業績" }} />
      <Tabs.Screen name='order' options={{ title: "訂單" }} />
      <Tabs.Screen name='event' options={{ title: "活動" }} />
      <Tabs.Screen name='profile' options={{ title: "個人" }} />
    </Tabs>
  )
};

export default TabLayout
