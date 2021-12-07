import {c, t} from 'styles/shared'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  textWelcome: {
    ...t.h1,
    ...t.textCtr,
    color: c.white,
    fontFamily: t.fontFamily.RobotoSlab.Bold,
  },
  textForgot: {
    ...t.pSM,
    color: c.green300,
    fontFamily: t.fontFamily.RobotoSlab.ExtraLight,
  },
})

export {styles}
