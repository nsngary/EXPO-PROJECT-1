import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '@/components/TabBar'

const TabLayout = () => {
  return (
    <Tabs
      initialRouteName='home'
      tabBar={props => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name='home' options={{ title: "首頁" }} />
      <Tabs.Screen name='performance' options={{ title: "業績" }} />
      <Tabs.Screen name='order' options={{ title: "訂單" }} />
      <Tabs.Screen name='event' options={{ title: "活動123" }} />
      <Tabs.Screen name='profile' options={{ title: "我的" }} />
    </Tabs>
  )
};


export default TabLayout
