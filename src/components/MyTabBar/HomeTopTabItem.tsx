import {c, l, t} from 'styles/shared'
import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

interface HomeTopTabItemProps {
  index: number
  isFocused: boolean
  label?: string
  onPress: () => void
  onLongPress: () => void
}

export function HomeTopTabItem({
  index,
  isFocused,
  label,
  onPress,
  onLongPress,
}: HomeTopTabItemProps) {
  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text
        style={[
          t.textCtr,
          l.px10,
          l.pb10,
          t.h5,
          {
            color: c.white,
            borderBottomWidth: isFocused ? 1.5 : 0,
            borderBottomColor: isFocused ? c.green300 : c.white,
            fontFamily: t.fontFamily.RobotoSlab.Medium,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
