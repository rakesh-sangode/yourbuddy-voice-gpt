import { FontAwesome6 } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function BoxContainer({
  margin,
  title,
  subTitle,
  icon,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress} // Handle navigation on press
      className={`flex-1 w-full h-auto bg-gray-800 p-4 justify-center rounded-2xl ${margin}`}
    >
      <View className="bg-gray-500 rounded-full p-2 w-10 h-10 items-center justify-center">
        <FontAwesome6
          name={icon}
          color="white"
          size={20}
          solid
        />
      </View>
      <Text className="text-secondary text-[16px] font-pmedium mt-4 w-3/4 shrink">
        {title}
      </Text>
      <Text className="text-gray-100 font-pregular w-3/4 shrink mt-1">
        {subTitle}
      </Text>
    </Pressable>
  )
}
