import Checkbox from 'expo-checkbox'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
const Login = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full flex-1 justify-center px-4 my-6">
          <View>
            <Text className="font-pbold text-4xl text-secondary-100">
              Welcome
            </Text>
            <Text className="font-pbold text-4xl text-white">back!</Text>
          </View>
          <Text className="text-white font-[18px] font-pmedium my-4">
            Sign in to continue your conversations with ChatGPT and experience
            seamless, intelligent assistance at your fingertips.
          </Text>
          <FormField
            title="Email"
            icon="envelope"
            placeholder="Enter your email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            icon="lock"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-5"
          />
          <View className="flex-row items-center justify-between my-1">
            <View className="flex-row items-center space-x-3">
              <Checkbox
                className="my-5"
                value={isChecked}
                color="#FF9C01"
                onValueChange={setIsChecked}
              />
              <Text className="text-white font-pmedium text-base">
                Remember Me
              </Text>
            </View>
            <Text className="text-secondary-200 font-pmedium text-base">
              Forgot Password?
            </Text>
          </View>
          <CustomButton
            title="Login"
            containerStyles="mt-5"
            handlePress={() => router.push('/home')}
            isLoading={isSubmitting}
          />
          <Text className="self-center text-sm text-white my-3">OR</Text>
          <View className="flex-row self-center">
            <Text className="text-base text-white">Don't have an account?</Text>
            <Link
              href="/register"
              className="text-base text-secondary-200 mx-2"
            >
              Create an account
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login
