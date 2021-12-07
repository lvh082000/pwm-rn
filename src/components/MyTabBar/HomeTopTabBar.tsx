import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs'
import React from 'react'
import {View} from 'react-native'
import {c, l} from 'styles/shared'
import {HomeTopTabItem} from './HomeTopTabItem'

export function HomeTopTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  return (
    <View
      style={[
        l.flexRow,
        l.flexCenter,
        l.pt10,
        {
          backgroundColor: c.drak,
          borderBottomWidth: 0.5,
          borderBottomColor: c.gray,
        },
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        const isFocused = state.index === index

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
          <HomeTopTabItem
            key={index}
            isFocused={isFocused}
            index={index}
            label={label as string}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        )
      })}
    </View>
  )
}
