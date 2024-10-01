import { FontAwesome6 } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { icons } from '../constants/icons'

const FormField = ({
  title,
  icon,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  textStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`text-base text-gray-100 font-pmedium ${textStyles}`}>
        {title}
      </Text>
      <View className="w-full h-12 px-2 bg-black-100 rounded-xl border-2 border-black-200 focus:border-secondary-100 flex-row items-center mr-4">
        {/* <Image
          source={icons.eye}
          className="w-6 h-6"
          resizeMethod="contain"
        /> */}
        <FontAwesome6
          name={icon}
          size={20}
          color="gray"
        />
        <TextInput
          className="px-2 flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
