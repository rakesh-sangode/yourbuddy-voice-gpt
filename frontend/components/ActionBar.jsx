import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ActionBar = ({ title }) => {
  const router = useRouter()

  return (
    <View className="flex-row items-center justify-between  py-4 rounded-t-2xl">
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-gray-700 p-2 rounded-full"
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
        />
      </TouchableOpacity>

      {/* Title and Topic */}
      <View className="flex-1 mx-4">
        <Text className="text-white text-xl font-psemibold text-center">
          {title}
        </Text>
      </View>

      {/* Ellipsis Button */}
      <TouchableOpacity
        onPress={() => {
          // Add any action here
        }}
        className="bg-gray-700 p-2 rounded-full"
      >
        <Ionicons
          name="ellipsis-vertical"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  )
}

export default ActionBar
