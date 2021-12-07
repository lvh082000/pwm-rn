import {VectorIcon, VectorIconProps} from 'components/VectorIcon'
import React from 'react'
import {StyleProp, Text, TextStyle, TouchableOpacity} from 'react-native'
import {l, t} from 'styles/shared'

interface Props {
  onPress?: () => void
  widgetStyles?: {
    textTitle?: StyleProp<TextStyle>
  }
  title?: string
  icon?: VectorIconProps
}

export const BottomSheetItem = React.memo(
  ({onPress, widgetStyles, icon, title}: Props) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[l.flexRow, l.py10, l.alignCtr]}>
        {icon && <VectorIcon {...icon} />}
        <Text
          style={[
            l.ml15,
            t.h5,
            {fontFamily: t.fontFamily.RobotoSlab.Regular},
            widgetStyles?.textTitle,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  },
)
