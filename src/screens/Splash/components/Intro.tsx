import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {c, l, t} from 'styles/shared'
import {Button} from 'components/Button'

interface Props {
  onPressLogin?: () => void
  onPressRegister?: () => void
}

const styles = StyleSheet.create({
  container: {
    ...l.flex,
    backgroundColor: c.drak,
  },
  textApp: {
    ...t.textCtr,
    ...t.h0,
    color: c.white,
    fontFamily: t.fontFamily.RobotoSlab.Bold,
  },
  textDescription: {
    ...t.textCtr,
    ...l.px10,
    color: c.gray,
    fontFamily: t.fontFamily.RobotoSlab.Light,
  },
  textWelcome: {
    ...t.textCtr,
    ...t.h1,
    color: c.white,
    fontFamily: t.fontFamily.RobotoSlab.Black,
  },
  viewWelcome: {
    ...l.flex,
    ...l.pb20,
    ...l.justifyEnd,
  },
})

const Intro = ({onPressLogin, onPressRegister}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textApp, l.mt20]}>PWM</Text>

      <View style={styles.viewWelcome}>
        <Text style={styles.textWelcome}>Chào mừng đến với PWM</Text>

        <Text style={[styles.textDescription, l.mt10]}>
          Tham gia cùng hơn 1000 người dùng PWM và trò chuyện với bạn bè và các
          cộng đồng khác nhau
        </Text>

        <Button
          type="gradient-button"
          widgetStyles={{container: [l.mt30]}}
          title="Đăng nhập"
          onPress={onPressLogin}
        />

        <Button
          widgetStyles={{container: [l.mt20]}}
          title="Đăng kí"
          onPress={onPressRegister}
        />
      </View>
    </View>
  )
}

export default React.memo(Intro)
