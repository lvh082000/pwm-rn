import React from 'react'
import {StyleProp, Text, View, ViewStyle} from 'react-native'
import {c, l, t} from 'styles/shared'

const NoDataView = React.memo(
  ({title, style}: {title: string; style?: StyleProp<ViewStyle>}) => {
    return (
      <View style={[l.flex, l.flexCenter, {backgroundColor: c.drak}]}>
        <Text
          style={[
            t.h4,
            {color: c.white, fontFamily: t.fontFamily.RobotoSlab.Medium},
            l.mt30,
          ]}>
          {title}
        </Text>
      </View>
    )
  },
)

export default NoDataView
