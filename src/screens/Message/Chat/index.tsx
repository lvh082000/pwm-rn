import {HeaderApp} from 'components/HeaderApp'
import React from 'react'
import {View} from 'react-native'
import {c, l} from 'styles/shared'

const Chat = () => {
  return (
    <View
      style={[
        l.flex,
        {
          backgroundColor: c.drak,
        },
      ]}>
      <HeaderApp typeLeft="avatar" title="Trò chuyện" />
    </View>
  )
}

export default Chat
