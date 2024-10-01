import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import ActionBar from '../components/ActionBar'
import FormField from '../components/FormField'

export default function NewConversation() {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <StatusBar barStyle="light-content" />
      <View className="w-full flex-1 px-4">
        {/* Action bar */}
        <View className="pt-6">
          {/* Adding extra padding if necessary */}
          <ActionBar
            title="New Conversation"
            topic="Topic Name"
          />
        </View>
        <FormField
          title="Topic Name"
          icon="book"
          placeholder="Enter Topic Name"
          otherStyles="my-2"
          textStyles="text-xl"
        />

        <FormField
          title="AI Model"
          icon="book"
          placeholder="Choose AI Model"
          otherStyles="my-2"
          textStyles="text-xl"
        />
      </View>
      <ScrollView>{/* Your other components */}</ScrollView>
    </SafeAreaView>
  )
}
