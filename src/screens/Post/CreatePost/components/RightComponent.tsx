import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {c, l, t} from 'styles/shared'

interface Props {
  allowPost: boolean
  onPress?: () => void
}

export const RightComponent = React.memo(({onPress, allowPost}: Props) => {
  return (
    <TouchableOpacity
      style={[
        l.mr10,
        l.px15,
        l.py10,
        {backgroundColor: allowPost ? c.green300 : c.gray, borderRadius: 5},
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!allowPost}>
      <Text
        style={[{fontFamily: t.fontFamily.RobotoSlab.Bold, color: c.white}]}>
        ĐĂNG
      </Text>
    </TouchableOpacity>
  )
})
