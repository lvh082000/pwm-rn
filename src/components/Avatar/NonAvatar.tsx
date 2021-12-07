import {transparentize} from 'color2k'
import React from 'react'
import {StyleProp, Text, View, ViewStyle} from 'react-native'
import {randomColor} from 'services/UtilService'
import {l, t} from 'styles/shared'

interface Props {
  name: string
  size?: number
  type?: 'square' | 'circle'
  style?: StyleProp<ViewStyle>
}

export const NonAvatar = React.memo(
  ({name, size = 40, type = 'square', style}: Props) => {
    const color = randomColor()
    const bg = transparentize(color, 0.85)
    return (
      <View
        style={[
          l.flexCenter,
          style,
          {
            backgroundColor: bg,
            width: size,
            height: size,
            borderRadius: type === 'circle' ? size / 2 : 5,
            borderColor: color,
            borderWidth: 2,
          },
        ]}>
        <Text
          style={{
            color,
            fontFamily: t.fontFamily.RobotoSlab.ExtraBold,
            fontSize: size * (2 / 3),
          }}>
          {name.charAt(0).toUpperCase()}
        </Text>
      </View>
    )
  },
)
