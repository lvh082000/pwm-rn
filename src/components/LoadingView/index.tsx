import React from 'react'
import {Text, View} from 'react-native'
import {Swing} from 'react-native-animated-spinkit'
import {c, l, t} from 'styles/shared'

interface Props {
  title?: string | undefined
}

const LoadingView = ({title = 'Loading...'}: Props) => {
  return (
    <View style={[l.flex, l.flexCenter, {backgroundColor: c.drak}]}>
      <Swing size={45} color={c.green300} />
      <Text
        style={[
          t.h5,
          l.mt5,
          {color: c.green300, fontFamily: t.fontFamily.RobotoSlab.Bold},
        ]}>
        {title}
      </Text>
    </View>
  )
}

export default React.memo(LoadingView)
