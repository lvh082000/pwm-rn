import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import React from 'react'
import {View} from 'react-native'
import {c} from 'styles/shared'
import {BottomTabItem} from './BottomTabItem'
import {styles} from './styles'

export function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: c.black1000,
        },
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]

        const isFocused = state.index === index

        const icon = options.tabBarIcon?.({
          focused: isFocused,
          color: isFocused ? c.green300 : c.white,
          size: isFocused ? 30 : 20,
        })

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            //@ts-ignore
            navigation.navigate({name: route.name, merge: true})
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <BottomTabItem
            key={index}
            isFocused={isFocused}
            index={index}
            icon={icon as JSX.Element}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        )
      })}
    </View>
  )
}
