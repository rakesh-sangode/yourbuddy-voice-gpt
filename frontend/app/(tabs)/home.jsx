import { FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import BoxContainer from '../../components/BoxContainer'
import HistoryContainer from '../../components/HistoryContainer'
import PremiumContainer from '../../components/PremiumContainer'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        {/* Action bar */}
        <View className="w-full flex-1 justify-center px-4 my-6 py-4">
          <View className="my-2 flex-row mt-4 justify-between items-center px-2">
            <View className="flex-row">
              <Image
                source={require('../../assets/images/chatgpt.png')}
                className="w-10 h-10"
              />
              <View className="px-3">
                <Text
                  className="text-gray-100 text-[12px] font-pmedium"
                  style={{ marginBottom: -4 }}
                >
                  Hello, Let's Talk!
                </Text>
                <Text className="text-white text-[16px] leading-tight font-pmedium">
                  Rakesh Sangode
                </Text>
              </View>
            </View>
            <View className=" bg-gray-700 rounded-full p-2 w-10 h-10 items-center justify-center">
              <FontAwesome6
                name="bell"
                size={18}
                color="white"
              />
            </View>
          </View>
          {/* Main Image */}
          <PremiumContainer />
          {/* Explore */}
          <View>
            <Text className="text-gray-100 text-xl font-psemibold">
              Explore
            </Text>
            <View className="flex-row justify-between my-3">
              <BoxContainer
                title="Chat AI"
                icon="message"
                subTitle="Start New Conversation"
                onPress={() => router.push('/newConversation')}
                margin="mr-3"
              />
              <BoxContainer
                icon="image"
                title="ImageGen"
                subTitle="Generate AI Smart Art"
                onPress={() => router.push('/newConversation')}
              />
            </View>
          </View>
          {/* History */}
          <View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-100 text-xl font-psemibold">
                History
              </Text>
              <Text className="text-[16px] text-secondary font-pregular">
                See all
              </Text>
            </View>
            <HistoryContainer
              icon="message"
              title="Make a simple essay about Thorfin in a stoikism logic"
            />
            <HistoryContainer
              icon="image"
              title="Imagine Guardian of the galaxy with spiderman suit"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
