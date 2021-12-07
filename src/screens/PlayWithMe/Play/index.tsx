import React from 'react'
import {Text, View} from 'react-native'
import {c, l} from 'styles/shared'

const Play = () => {
  return (
    <View
      style={[
        l.flex,
        {
          backgroundColor: c.drak,
        },
      ]}>
      <Text style={[{color: c.white}]}>Đang làm</Text>
    </View>
  )
}

export default Play
