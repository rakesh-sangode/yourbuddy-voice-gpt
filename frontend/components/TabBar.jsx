import React, { useState } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import TabBarButton from '../components/TabBarButton'

export default function TabBar({ state, descriptors, navigation }) {
  const [dimension, setDimension] = useState({ height: 20, width: 100 })

  // Prevent divide-by-zero errors
  const buttonWidth =
    state.routes.length > 0 ? dimension.width / state.routes.length : 0

  const onTabBarLayout = (e) => {
    setDimension({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    })
  }

  const tabPositionX = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: tabPositionX.value,
        },
      ],
    }
  })

  return (
    <View
      onLayout={onTabBarLayout}
      className="absolute bottom-5 flex-row justify-between items-center bg-gray-600 mx-5 rounded-full py-2"
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            position: 'absolute',
            backgroundColor: '#FF9C01',
            borderRadius: 30,
            marginHorizontal: 12,
            height: dimension.height - 15,
            width: buttonWidth - 25,
          },
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.tabBarLabel || options.title || route.name

        const isFocused = state.index === index

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {
            duration: 1500,
          })

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? 'white' : '#FF9C01'}
            label={label}
          />
        )
      })}
    </View>
  )
}
