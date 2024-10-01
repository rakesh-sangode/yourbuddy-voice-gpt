import React from 'react'
import { Image, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'

export default function PremiumContainer() {
  return (
    <View className="bg-secondary p-4 rounded-2xl flex-row w-full my-2">
      <View className="w-3/4 shrink">
        <Text className="text-white text-xl font-psemibold">Premium Plan</Text>
        <Text className="text-white text-sm font-pregular">
          Unlock your AI chatbot & get all premium features
        </Text>
        <CustomButton
          title="Get Premium"
          textStyles="text-secondary text-sm"
          containerStyles="bg-white rounded-3xl mt-4 w-3/4"
        />
      </View>
      <Image
        source={require('../assets/images/bot.png')}
        style={{ width: '40%', height: 'auto' }}
      />
    </View>
  )
}
