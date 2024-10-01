import axios from 'axios'
import Checkbox from 'expo-checkbox'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
const Register = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleRegister = async () => {
    if (!isChecked) {
      Alert.alert('Please agree to the Terms of Service and Privacy Policy')
      return
    }
    setIsSubmitting(true)

    try {
      const response = await axios.post(
        'http://192.168.16.182:8005/api/auth/register/',
        {
          email: form.email,
          password: form.password,
          password2: form.confirmPassword,
          tc: isChecked,
        },
      )
      // Assuming your Django API returns a token on successful registration
      if (response.status === 201) {
        Alert.alert('Registration Successful', response.data.message)
        // Navigate to login screen or perform any other action after successful registration
      } else {
        Alert.alert('Registration Failed', response.data)
      }
    } catch (error) {
      console.error('Error registering:', error)
      Alert.alert(
        'Registration Failed',
        'An error occurred while registering. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full flex-1 justify-center px-4 my-6">
          <View>
            <Text className="font-pbold text-4xl text-secondary-200">
              Hello
            </Text>
            <Text className="font-pbold text-4xl text-white">there!</Text>
          </View>
          <Text className="text-white font-[18px] font-pregular my-4">
            Sign up to create your account and enjoy seamless, intelligent
            assistance with ChatGPT, tailored to your needs.
          </Text>
          <FormField
            title="Email"
            placeholder="Enter your email"
            icon="envelope"
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
          <FormField
            title="Confirm Password"
            icon="lock"
            placeholder="Re-type your password"
            value={form.confirmPassword}
            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
            otherStyles="mt-5"
          />
          <View className="flex-row items-center justify-center my-5">
            {/* <View className="flex-row items-center space-x-3"> */}
            <Checkbox
              className="mr-3"
              value={isChecked}
              color="#FF9C01"
              onValueChange={setIsChecked}
            />
            <Text className="text-white font-pmedium text-sm">
              By signing up, you agree to our{' '}
              <Text className="text-sm text-secondary-200 font-pmedium">
                Terms of Service
              </Text>{' '}
              and{' '}
              <Text className="text-sm text-secondary-200 font-pmedium">
                Privacy Policy
              </Text>
            </Text>
            {/* </View> */}
          </View>
          <CustomButton
            title="Register"
            containerStyles="mt-5"
            isLoading={isSubmitting}
            handlePress={handleRegister}
          />
          <Text className="self-center text-sm text-white my-3">OR</Text>
          <View className="flex-row self-center">
            <Text className="text-base text-white">
              Already have an account?
            </Text>
            <Link
              href="/login"
              className="text-base text-secondary-200 mx-2"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register
