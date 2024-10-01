import { Feather } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { Pressable } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { drawerIcons } from '../constants/icons'

export default function TabBarButton({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}) {
  const scale = useSharedValue(0)

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 })
  }, [isFocused])

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2])
    const top = interpolate(scale.value, [0, 1], [0, 9])

    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
      top,
    }
  })

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0])

    return { opacity }
  })

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className="flex-1 justify-center items-center"
    >
      <Animated.View style={animatedIconStyle}>
        <Feather
          name={drawerIcons[routeName]}
          size={24}
          color={
            isFocused
              ? 'white                                                                          '
              : 'white'
          }
        />
      </Animated.View>
      <Animated.Text
        style={[{ color: isFocused ? '#FF9C01' : 'white' }, animatedTextStyle]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  )
}
