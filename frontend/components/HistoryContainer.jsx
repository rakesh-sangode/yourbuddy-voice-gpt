import { FontAwesome6 } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

export default function HistoryContainer({ icon, title }) {
  return (
    <View className="w-full flex-row justify-between items-center bg-gray-800 rounded-2xl p-2 px-4 my-2">
      <View className="flex-row space-x-4 items-center">
        <FontAwesome6
          name={icon}
          size={20}
          color="white"
          solid
        />
        <Text className="text-md text-white font-pregular w-3/4 shrink">
          {title}
        </Text>
      </View>
      <FontAwesome6
        name="chevron-right"
        size={20}
        color="#FF9C01"
        solid
      />
    </View>
  )
}
