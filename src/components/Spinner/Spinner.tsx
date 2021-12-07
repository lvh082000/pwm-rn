import React, {FC, useEffect} from 'react'
import {Text, View} from 'react-native'
import {Swing} from 'react-native-animated-spinkit'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {c, l, t} from 'styles/shared'

interface Props {
  visible: boolean
  title: string | undefined
}

const colors = ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.65)']

const Spinner: FC<Props> = ({visible, title = 'Loading...'}) => {
  const color = useSharedValue(colors[0])
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(color.value),
      zIndex: visible ? 1 : -1,
    }
  })

  useEffect(() => {
    if (visible) {
      color.value = colors[1]
    } else {
      color.value = colors[0]
    }
  }, [visible])

  return (
    <Animated.View style={[l.absoluteFill, animatedStyles]}>
      <View style={[l.flex, l.flexCenter]}>
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
    </Animated.View>
  )
}

export default Spinner
