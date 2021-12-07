import React from 'react'
import {Text, View} from 'react-native'
import {c, l, t} from 'styles/shared'

interface Props {
  content: string
}

export const PostContent = React.memo(({content}: Props) => {
  return (
    <View style={[l.mt5, l.px15]}>
      <Text
        numberOfLines={2}
        style={[
          {
            fontFamily: t.fontFamily.RobotoSlab.Regular,
            color: c.white,
          },
        ]}>
        {content}
      </Text>
    </View>
  )
})
