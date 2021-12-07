import React from 'react'
import {TouchableOpacity} from 'react-native'
import {c} from 'styles/shared'
import {styles} from './styles'

interface BottomTabItemProps {
  index: number
  isFocused: boolean
  icon: JSX.Element
  onPress: () => void
  onLongPress: () => void
}

export function BottomTabItem({
  index,
  isFocused,
  icon,
  onPress,
  onLongPress,
}: BottomTabItemProps) {
  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.item]}>
      {React.cloneElement(icon, {
        focused: isFocused,
        color: isFocused ? c.green300 : c.white,
        size: isFocused ? 30 : 20,
      })}
    </TouchableOpacity>
  )
}
