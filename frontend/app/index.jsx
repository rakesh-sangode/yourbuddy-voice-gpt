import { router } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 items-center justify-center">
          <Image
            source={require('../assets/images/bot.png')}
            className="w-[300] h-[300]"
            resizeMode="cover"
          />
        </View>

        <View className="w-full px-4 justify-end pb-10">
          <Text className="text-2xl text-white font-pbold text-center">
            Welcome to <Text className="text-secondary">YourBuddy</Text>
          </Text>
          <Text className="text-base text-white font-pmedium self-center">
            🏆Chat with your AI assistant!
          </Text>
          <CustomButton
            title="Let's get Started"
            handlePress={() => router.push('/login')}
            containerStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
