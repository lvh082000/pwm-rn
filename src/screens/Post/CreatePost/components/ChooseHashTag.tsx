import React from 'react'
import {Text, View} from 'react-native'
import {c, l, t} from 'styles/shared'

export const ChooseHashTag = React.memo(({}: {}) => {
  return (
    <View
      style={[
        l.py15,
        l.px15,
        {borderBottomWidth: 0.5, borderBottomColor: c.gray},
      ]}>
      <Text
        style={[
          {fontFamily: t.fontFamily.RobotoSlab.Regular, color: c.white},
          t.h5,
        ]}>
        Select hashtag
      </Text>
    </View>
  )
})
