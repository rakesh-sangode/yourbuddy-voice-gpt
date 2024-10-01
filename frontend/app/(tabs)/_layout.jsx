import { Tabs } from 'expo-router'
import React from 'react'
import TabBar from '../../components/TabBar'

const TabLayout = () => {
  return (
    <>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="home"
          options={{ title: 'Home', headerShown: false }}
        />
        <Tabs.Screen
          name="chats"
          options={{ title: 'Chats', headerShown: false }}
        />
        <Tabs.Screen
          name="folder"
          options={{ title: 'Folder', headerShown: false }}
        />
        <Tabs.Screen
          name="account"
          options={{ title: 'Account', headerShown: false }}
        />
      </Tabs>
    </>
  )
}

export default TabLayout
